/**
 * ============================================
 * API SERVICE
 * Manejo de conexiones con el backend
 * https://power-backend-tfkb.onrender.com
 * http://localhost:8080
 * ============================================
 */

// Configuracion basica
const API_CONFIG = {
    BASE_URL: 'https://powerbackendtest.onrender.com', // Production URL
    DEFAULT_HEADERS: { 'Content-Type': 'application/json', Accept: 'application/json' }
};

/**
 * Servicio generico para peticiones HTTP
 * @param {string} endpoint - El endpoint al que conectar (ej: '/productos')
 * @param {object} options - Opciones de fetch (method, body, headers, etc)
 * @returns {Promise<any>} - Respuesta del servidor parseada
 */
async function fetchFromBackend(endpoint, options = {}) {
    const cleanEndpoint = endpoint.startsWith('/api')
        ? endpoint
        : `/api${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    const url = `${API_CONFIG.BASE_URL}${cleanEndpoint}`;

    let token = localStorage.getItem('rp_authToken');
    if (token === "undefined" || token === "null") token = null;

    const headers = {
        ...API_CONFIG.DEFAULT_HEADERS,
        ...options.headers
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        ...options,
        headers
    };

    console.log('[API] Fetch URL:', url);
    console.log('[API] Token sent:', token ? `${token.substring(0, 10)}...` : 'NULL/MISSING');
    console.log('[API] Headers:', headers);

    try {
        console.log(`[API] Conectando a: ${url}`);
        const response = await fetch(url, config);

        if (!response.ok) {
            const errorBody = await response.text();
            try {
                const errorJson = JSON.parse(errorBody);
                // Check if error is related to expired token ONLY if global logout is not skipped
                if (!options.skipGlobalLogout) {
                    if (response.status === 401 || response.status === 403 || (errorJson.message && errorJson.message.includes('expired'))) {
                        console.warn('[API] Sesión expirada o inválida. Cerrando sesión...');
                        ApiService.logout();
                        return;
                    }
                }
                throw new Error(errorJson.message || errorJson.error || `Error ${response.status}`);
            } catch (e) {
                if (!options.skipGlobalLogout && (response.status === 401 || response.status === 403)) {
                    ApiService.logout();
                    return;
                }
                if (e.message && e.message.startsWith('Error')) throw e;
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
        }

        if (response.status === 204) {
            return null;
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.warn('[API] Error en conectar con backend:', error.message);
        throw error;
    }
}

const ApiService = {
    // ================= AUTENTICACION =================
    login: async (email, password) => {
        // Do not clear session yet. Only clear if the new login is successful.
        // This allows "Switch User" to fail gracefully without logging out the current user.

        const data = await fetchFromBackend('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            skipGlobalLogout: true // IMPORTANT: Don't trigger global logout on 401 (wrong password)
        });

        if (data && data.token) {
            localStorage.setItem('rp_authToken', data.token);
            const userData = {
                nombre: data.nombre,
                email: data.email,
                id: data.idUsuario,
                rol: data.rol
            };
            localStorage.setItem('rp_currentUser', JSON.stringify(userData));

            // Save for fast switching
            ApiService.saveUserProfile(userData, data.token);
        }
        return data;
    },

    register: async (userData) => {
        const data = await fetchFromBackend('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData)
        });

        if (data && data.token) {
            localStorage.setItem('rp_authToken', data.token);
            localStorage.setItem('rp_currentUser', JSON.stringify({
                nombre: data.nombre,
                email: data.email,
                id: data.idUsuario,
                rol: data.rol
            }));
        }
        return data;
    },

    logout: () => {
        localStorage.removeItem('rp_authToken');
        localStorage.removeItem('rp_currentUser');
        window.location.reload();
    },

    isAuthenticated: () => !!localStorage.getItem('rp_authToken'),

    getCurrentUser: () => {
        const userStr = localStorage.getItem('rp_currentUser');
        return userStr ? JSON.parse(userStr) : null;
    },

    // ================= MULTI-PERFIL =================
    // ================= MULTI-PERFIL =================
    getSavedUsers: () => {
        try {
            const users = localStorage.getItem('rp_savedUsers');
            if (!users) return [];
            const parsed = JSON.parse(users);
            // Defensive: Filter out corrupt data
            return Array.isArray(parsed) ? parsed.filter(u => u && u.email) : [];
        } catch (e) {
            console.warn('[API] Corrupt saved users data, resetting.');
            localStorage.removeItem('rp_savedUsers');
            return [];
        }
    },

    saveUserProfile: (user, token) => {
        try {
            let users = ApiService.getSavedUsers();
            // Remove existing entry for this email (case-insensitive) to avoid duplicates
            // Safeguard against missing email property
            users = users.filter(u => u.email && u.email.toLowerCase() !== user.email.toLowerCase());

            // Add updated profile at the end (most recent)
            users.push({ ...user, token, lastActive: Date.now() });

            // Limit to 3 users (FIFO: keep last 3)
            if (users.length > 3) {
                users = users.slice(users.length - 3);
            }

            localStorage.setItem('rp_savedUsers', JSON.stringify(users));
        } catch (error) {
            console.error('[API] Failed to save user profile:', error);
        }
    },

    switchUser: (email) => {
        const users = ApiService.getSavedUsers();
        const target = users.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (target && target.token) {
            localStorage.setItem('rp_authToken', target.token);
            localStorage.setItem('rp_currentUser', JSON.stringify({
                nombre: target.nombre,
                email: target.email,
                id: target.idUsuario || target.id,
                rol: target.rol
            }));
            // Update last active timestamp
            ApiService.saveUserProfile(target, target.token);
            return true;
        }
        return false;
    },

    removeSavedUser: (email) => {
        const users = ApiService.getSavedUsers();
        const filtered = users.filter(u => u.email.toLowerCase() !== email.toLowerCase());
        localStorage.setItem('rp_savedUsers', JSON.stringify(filtered));
    },

    // ================= CATEGOR�AS =================
    getCategories: async () => {
        try {
            return await fetchFromBackend('/categorias');
        } catch (err) {
            console.warn('[API] No se pudieron cargar categor�as:', err.message);
            return [];
        }
    },

    // ================= PRODUCTOS =================
    getProducts: async () => {
        try {
            return await fetchFromBackend('/productos');
        } catch (err) {
            console.warn('[API] No se pudieron cargar productos:', err.message);
            return [];
        }
    },

    getProductById: async (id) => fetchFromBackend(`/productos/${id}`),

    createProduct: async (productData) => fetchFromBackend('/productos', {
        method: 'POST',
        body: JSON.stringify(productData)
    }),

    // ================= ORDENES =================
    createOrder: async (orderData) => fetchFromBackend('/pedidos', {
        method: 'POST',
        body: JSON.stringify(orderData)
    })
};

