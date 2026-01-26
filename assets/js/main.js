/**
 * ============================================
 * ROCKET POWER - MAIN JAVASCRIPT
 * E-commerce SPA for skating & recreational equipment
 * ============================================
 */

// ==================== DATA ====================
// Array global de productos cargados desde el backend
let products = [];

// Cat�logo base de categor�as y copia din�mica
const defaultCategories = [
  { id: 1, nombre: "Patines", slug: "patines", imagen: "assets/img/fitness-inline-skates-blue-speed.jpg?height=200&width=200" },
  { id: 2, nombre: "Ruedas", slug: "ruedas", imagen: "assets/img/inline-skate-wheels-80mm-set-of-4-teal.jpg?height=200&width=200" },
  { id: 3, nombre: "Protecciones", slug: "protecciones", imagen: "assets/img/skating-protection-gear-set-knee-pads-elbow-pads-w.jpg?height=200&width=200" },
  { id: 4, nombre: "Mochilas", slug: "mochilas", imagen: "assets/img/skating-backpack-with-skate-holder-teal-black.jpg?height=200&width=200" },
  { id: 5, nombre: "Ropa", slug: "ropa", imagen: "assets/img/sports-tshirt-teal-with-skating-logo.jpg?height=200&width=200" },
  { id: 6, nombre: "Repuestos", slug: "repuestos", imagen: "assets/img/inline-skate-brake-pad-replacement-black.jpg?height=200&width=200" },
];

let categories = [...defaultCategories];

const services = {
  maintenance: {
    title: "Servicio de Mantenimiento",
    description:
      "Nuestro equipo de expertos se encarga de mantener tus patines en perfectas condiciones. Realizamos limpieza profunda, cambio de rodamientos, ajuste de frenos y revisión completa del equipo.",
    features: [
      "Limpieza y lubricación de rodamientos",
      "Cambio de ruedas y frenos",
      "Ajuste de botas y cierres",
      "Revisión de estructura y ejes",
      "Garantía de 30 días en el servicio",
    ],
    duration: "24-48 horas",
    price: "Desde $15.000",
  },
  custom: {
    title: "Personalización de Patines",
    description:
      "Haz que tus patines sean únicos con nuestro servicio de customización. Desde cambios de color hasta grabados personalizados, transformamos tu equipo en una obra de arte.",
    features: [
      "Pintura personalizada con aerógrafo",
      "Grabado láser de nombres o diseños",
      "Cambio de cordones y accesorios",
      "Combinaciones de colores exclusivas",
      "Diseños únicos bajo pedido",
    ],
    duration: "3-5 días hábiles",
    price: "Desde $25.000",
  },
  classes: {
    title: "Clases y Talleres",
    description:
      "Aprende a patinar o mejora tus habilidades con nuestros instructores certificados. Ofrecemos clases para todos los niveles, desde principiantes hasta avanzados.",
    features: [
      "Clases individuales y grupales",
      "Niveles: principiante, intermedio, avanzado",
      "Talleres de trucos y freestyle",
      "Sesiones de fitness sobre ruedas",
      "Eventos y salidas grupales",
    ],
    duration: "1-2 horas por sesión",
    price: "Desde $12.000/sesión",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "5 Tips para Principiantes en el Patinaje",
    excerpt: "Descubre los consejos esenciales para comenzar tu aventura sobre ruedas de forma segura y divertida.",
    image: "assets/img/5Tips.jpg",
    content:
      "El patinaje es una actividad increíble que combina ejercicio, diversión y libertad. Si estás comenzando, aquí te dejamos 5 tips esenciales:1. **Usa siempre protección**: Casco, rodilleras, coderas y muñequeras son indispensables.2. **Aprende a caer**: Practica caer hacia adelante sobre tus protecciones, nunca hacia atrás.3. **Domina la posición básica**: Rodillas flexionadas, peso hacia adelante, brazos al frente.4. **Practica el frenado**: Antes de ganar velocidad, asegúrate de saber frenar.5. **Sé paciente**: El progreso viene con la práctica constante. ¡Disfruta el proceso!",
  },
  {
    id: 2,
    title: "Los Mejores Lugares para Patinar en Santiago",
    excerpt: "Una guía completa de los spots más populares y seguros para disfrutar del patinaje en la capital.",
    image: "assets/img/spotter_rogerferrero.jpg",
    content:
      "Santiago ofrece múltiples opciones para los amantes del patinaje. Aquí nuestros favoritos:**Parque Bicentenario**: Amplias ciclovías y superficies lisas perfectas para principiantes.**Parque Forestal**: Ambiente bohemio y rutas escénicas junto al río Mapocho.**Costanera Center**: Explanadas amplias ideales para practicar trucos.**Parque O'Higgins**: Circuitos largos para sesiones de fitness.**Skatepark de Providencia**: Para los más avanzados que buscan rampas y obstáculos.Recuerda siempre respetar a los peatones y usar protección.",
  },
  {
    id: 3,
    title: "Cómo Mantener tus Patines en Óptimas Condiciones",
    excerpt: "Guía práctica de mantenimiento para alargar la vida útil de tu equipo y mejorar tu rendimiento.",
    image: "assets/img/mantener.jpg",
    content:
      "Un buen mantenimiento puede duplicar la vida útil de tus patines. Sigue estos pasos:**Limpieza semanal**:- Limpia las ruedas con un paño húmedo- Revisa que no haya piedras o residuos**Mantenimiento mensual**:- Rota las ruedas para un desgaste uniforme- Limpia los rodamientos con solvente especial- Lubrica con aceite para rodamientos**Revisión trimestral**:- Verifica el estado de los frenos- Revisa tornillos y ejes- Inspecciona la bota por desgaste¿No tienes tiempo? ¡Trae tus patines a nuestro servicio de mantenimiento!",
  },
]

const testimonials = [
  {
    id: 1,
    name: "María González",
    avatar: "assets/img/maria.jpg?height=100&width=100",
    rating: 5,
    text: "Increíble experiencia. Los patines que compré son de excelente calidad y el servicio al cliente es excepcional.",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    avatar: "assets/img/carlos.jpg?height=100&width=100",
    rating: 5,
    text: "Las clases para principiantes me cambiaron la vida. Ahora patino todos los fines de semana con mi familia.",
  },
  {
    id: 3,
    name: "Ana Martínez",
    avatar: "assets/img/ana.jpg?height=100&width=100",
    rating: 4,
    text: "El servicio de personalización dejó mis patines increíbles. Todos me preguntan dónde los compré.",
  },
  {
    id: 4,
    name: "Diego Soto",
    avatar: "assets/img/diego.jpg?height=100&width=100",
    rating: 5,
    text: "La comunidad de Rocket Power es lo mejor. He conocido gente increíble y mejorado muchísimo mi técnica.",
  },
]

// ==================== STATE ====================

const state = {
  currentSection: "home",
  cart: [],
  favorites: [],
  users: [],
  currentUser: null,
  filters: {
    categories: [],
    priceRanges: [],
    search: "",
  },
  sort: "default",
  currentPage: 1,
  productsPerPage: 8,
  carouselIndex: 0,
  carouselAutoPlay: null,
  checkoutStep: 1,
}

// ==================== INITIALIZATION ====================

document.addEventListener("DOMContentLoaded", () => {
  loadStateFromStorage()
  initNavigation()
  initSearch()
  initThemeToggle()
  initCarousel()
  initCategories()
  initProducts()
  initFilters()
  initBlog()
  initTestimonials()
  initForms()
  initCartTabs()
  initScrollAnimations()
  initScrollToTop()
  initKeyboardNavigation()
  updateAuthUI()
  updateCartUI()
  updateFavoritesUI()

  // Intentar cargar datos del backend (si existe)
  loadRemoteData()
})

// ==================== LOCAL STORAGE ====================

function loadStateFromStorage() {
  try {
    const users = localStorage.getItem("rp_users")
    const currentUser = localStorage.getItem("rp_currentUser")
    const theme = localStorage.getItem("rp_theme")

    if (users) state.users = JSON.parse(users)
    if (theme) document.documentElement.setAttribute("data-theme", theme)

    if (currentUser) {
      state.currentUser = JSON.parse(currentUser)

      // Load User Data
      const userCart = localStorage.getItem(`rp_cart_${state.currentUser.id}`)
      const userFavs = localStorage.getItem(`rp_favorites_${state.currentUser.id}`)

      if (userCart) state.cart = JSON.parse(userCart)
      if (userFavs) state.favorites = JSON.parse(userFavs)
    }
    // Guest cart could be loaded here if we supported it
  } catch (e) {
    console.error("Error loading state from storage:", e)
  }
}

function saveStateToStorage() {
  try {
    if (state.currentUser) {
      localStorage.setItem(`rp_cart_${state.currentUser.id}`, JSON.stringify(state.cart))
      localStorage.setItem(`rp_favorites_${state.currentUser.id}`, JSON.stringify(state.favorites))
      localStorage.setItem("rp_currentUser", JSON.stringify(state.currentUser))
    } else {
      // Guest state (optional: clear global or keep)
      // For now we keep global for guests, but UI enforces login for checkout
      // localStorage.setItem("rp_cart", JSON.stringify(state.cart))
      localStorage.removeItem("rp_currentUser")
    }
  } catch (e) {
    console.error("Error saving state to storage:", e)
  }
}

// ==================== NAVIGATION ====================

function initNavigation() {
  // Nav links
  // Nav links
  // Modified for multi-page: Removed SPA navigation logic
  document.querySelectorAll(".nav__link").forEach((link) => {
    // Only intercept if it's a hash link on the same page (optional, but standard nav links will be actual pages now)
    if (link.getAttribute("href").startsWith("#") && !link.getAttribute("href").startsWith("#!")) {
      // link.addEventListener("click", ...) - Removed to allow default navigation
    }
  })

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle")
  menuToggle.addEventListener("click", toggleMobileMenu)

  // User button
  document.getElementById("user-btn").addEventListener("click", () => {
    if (state.currentUser) {
      toggleUserMenu()
    } else {
      openOverlay("login-overlay")
    }
  })

  // Cart button
  document.getElementById("cart-btn").addEventListener("click", () => {
    openOverlay("cart-overlay")
    switchCartTab("cart")
  })

  // Favorites button
  document.getElementById("favorites-btn").addEventListener("click", () => {
    openOverlay("cart-overlay")
    switchCartTab("favorites")
  })
}

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active")
  })

  // Show target section
  const targetSection = document.getElementById(sectionId)
  if (targetSection) {
    targetSection.classList.add("active")
    state.currentSection = sectionId

    // Update nav links
    document.querySelectorAll(".nav__link").forEach((link) => {
      link.classList.remove("active")
      if (link.dataset.section === sectionId) {
        link.classList.add("active")
      }
    })

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" })

    // Trigger animations
    setTimeout(() => {
      triggerScrollAnimations()
    }, 100)
  }
}

function toggleMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle")
  const nav = document.getElementById("nav")

  menuToggle.classList.toggle("active")
  nav.classList.toggle("mobile-active")
}

function closeMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle")
  const nav = document.getElementById("nav")

  menuToggle.classList.remove("active")
  nav.classList.remove("mobile-active")
}

// ==================== SEARCH ====================

function initSearch() {
  const searchToggle = document.getElementById("search-toggle")
  const searchBox = document.getElementById("search-box")
  const searchInput = document.getElementById("search-input")
  const searchBtn = document.getElementById("search-btn")

  if (!searchToggle || !searchBox || !searchInput || !searchBtn) return


  let debounceTimer

  searchToggle.addEventListener("click", () => {
    searchBox.classList.toggle("active")
    if (searchBox.classList.contains("active")) {
      searchInput.focus()
    }
  })

  // Debounced search
  searchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      state.filters.search = e.target.value.toLowerCase()
      state.currentPage = 1
      renderProducts()

      // Navigate to products if not already there
      if (state.currentSection !== "products" && e.target.value.length > 0) {
        showSection("products")
      }
    }, 300)
  })

  searchBtn.addEventListener("click", () => {
    state.filters.search = searchInput.value.toLowerCase()
    state.currentPage = 1
    renderProducts()
    showSection("products")
    searchBox.classList.remove("active")
  })

  // Close search on click outside
  document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target) && !searchToggle.contains(e.target)) {
      searchBox.classList.remove("active")
    }
  })
}

// ==================== THEME TOGGLE ====================

function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle")

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("rp_theme", newTheme)
  })
}

// ==================== CAROUSEL ====================

function initCarousel() {
  const track = document.getElementById("carousel-track")
  if (!track) return

  const dotsContainer = document.getElementById("carousel-dots")
  const prevBtn = document.getElementById("carousel-prev")
  const nextBtn = document.getElementById("carousel-next")

  // Get featured products
  const featuredProducts = products.filter((p) => p.destacado)

  // Render products
  track.innerHTML = featuredProducts.map((product) => createProductCard(product, true)).join("")

  // Calculate slides
  const slidesCount = Math.ceil(featuredProducts.length / getVisibleSlides())

  // Render dots
  dotsContainer.innerHTML = Array(slidesCount)
    .fill(0)
    .map(
      (_, i) =>
        `<button class="carousel__dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Ir a slide ${i + 1}"></button>`,
    )
    .join("")

  // Event listeners
  prevBtn.addEventListener("click", prevSlide)
  nextBtn.addEventListener("click", nextSlide)

  dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("carousel__dot")) {
      goToSlide(Number.parseInt(e.target.dataset.index))
    }
  })

  // Auto-play
  startAutoPlay()

  // Pause on hover
  track.addEventListener("mouseenter", stopAutoPlay)
  track.addEventListener("mouseleave", startAutoPlay)

  // Handle resize
  window.addEventListener(
    "resize",
    debounce(() => {
      updateCarousel()
    }, 250),
  )
}

function getVisibleSlides() {
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 4
}

function updateCarousel() {
  const track = document.getElementById("carousel-track")
  const cards = track.querySelectorAll(".product-card")
  const visibleSlides = getVisibleSlides()
  const cardWidth = cards[0]?.offsetWidth || 280
  const gap = 24 // var(--space-lg)

  const offset = state.carouselIndex * (cardWidth + gap) * visibleSlides
  track.style.transform = `translateX(-${offset}px)`

  // Update dots
  const dots = document.querySelectorAll(".carousel__dot")
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === state.carouselIndex)
  })
}

function nextSlide() {
  const featuredProducts = products.filter((p) => p.destacado)
  const maxIndex = Math.ceil(featuredProducts.length / getVisibleSlides()) - 1

  state.carouselIndex = state.carouselIndex >= maxIndex ? 0 : state.carouselIndex + 1
  updateCarousel()
}

function prevSlide() {
  const featuredProducts = products.filter((p) => p.destacado)
  const maxIndex = Math.ceil(featuredProducts.length / getVisibleSlides()) - 1

  state.carouselIndex = state.carouselIndex <= 0 ? maxIndex : state.carouselIndex - 1
  updateCarousel()
}

function goToSlide(index) {
  state.carouselIndex = index
  updateCarousel()
}

function startAutoPlay() {
  stopAutoPlay()
  state.carouselAutoPlay = setInterval(nextSlide, 5000)
}

function stopAutoPlay() {
  if (state.carouselAutoPlay) {
    clearInterval(state.carouselAutoPlay)
    state.carouselAutoPlay = null
  }
}

// ==================== CATEGORY IMAGE MAPPING ====================

/**
 * Mapeo hardcodeado de categorías a imágenes locales
 * Solución temporal mientras las imágenes del backend no están accesibles
 */
const CATEGORY_IMAGE_MAP = {
  'Patines': 'assets/img/fitness-inline-skates-blue-speed.jpg',
  'patines': 'assets/img/fitness-inline-skates-blue-speed.jpg',
  'Ruedas': 'assets/img/inline-skate-wheels-80mm-set-of-4-teal.jpg',
  'ruedas': 'assets/img/inline-skate-wheels-80mm-set-of-4-teal.jpg',
  'Protecciones': 'assets/img/skating-protection-gear-set-knee-pads-elbow-pads-w.jpg',
  'protecciones': 'assets/img/skating-protection-gear-set-knee-pads-elbow-pads-w.jpg',
  'Mochilas': 'assets/img/skating-backpack-with-skate-holder-teal-black.jpg',
  'mochilas': 'assets/img/skating-backpack-with-skate-holder-teal-black.jpg',
  'Ropa': 'assets/img/sports-tshirt-teal-with-skating-logo.jpg',
  'ropa': 'assets/img/sports-tshirt-teal-with-skating-logo.jpg',
  'Repuestos': 'assets/img/inline-skate-brake-pad-replacement-black.jpg',
  'repuestos': 'assets/img/inline-skate-brake-pad-replacement-black.jpg',
  'Accesorios': 'assets/img/skate-bearings-abec-9-set-of-8.jpg',
  'accesorios': 'assets/img/skate-bearings-abec-9-set-of-8.jpg',
  'Giftcards': 'assets/img/gift-card-modern-design-teal-gradient-skating-them.jpg',
  'giftcards': 'assets/img/gift-card-modern-design-teal-gradient-skating-them.jpg'
};

/**
 * Obtiene la imagen correcta para una categoría
 * @param {string} categoryName - Nombre de la categoría
 * @returns {string} - Ruta de la imagen
 */
function getCategoryImageByName(categoryName) {
  if (!categoryName) return 'assets/img/placeholder.jpg';

  // Buscar en el mapeo (case-insensitive)
  const mapped = CATEGORY_IMAGE_MAP[categoryName] || CATEGORY_IMAGE_MAP[categoryName.toLowerCase()];
  if (mapped) return mapped;

  // Fallback
  return 'assets/img/placeholder.jpg';
}

// ==================== IMAGE PATH RESOLVER ====================

/**
 * Resuelve rutas de imágenes para que funcionen tanto en local como en producción
 * Si la imagen viene del backend con ruta relativa (assets/img/...), 
 * la convierte a ruta absoluta del frontend
 * @param {string} imagePath - Ruta de imagen desde el backend o local
 * @returns {string} - Ruta absoluta que funciona en el frontend
 */
function resolveImagePath(imagePath) {
  if (!imagePath) return 'assets/img/placeholder.jpg';

  // Si ya es una URL completa (http/https), retornarla tal cual
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // Si es una ruta relativa que empieza con 'assets/', asegurarse que funcione
  // En Vercel, las rutas relativas se resuelven desde la raíz del proyecto
  if (imagePath.startsWith('assets/')) {
    return imagePath; // Ya está en formato correcto
  }

  // Si empieza con '/', quitarlo para que sea relativo
  if (imagePath.startsWith('/assets/')) {
    return imagePath.substring(1); // Quitar el '/' inicial
  }

  // Si no tiene 'assets/', agregarlo
  return `assets/img/${imagePath}`;
}

// ==================== CATEGORIES ====================

function initCategories() {
  const grid = document.getElementById("categories-grid");

  if (!grid) {
    console.error('categories-grid not found');
    return;
  }

  const categoriesToRender = (categories && categories.length > 0) ? categories : defaultCategories;

  // Generar HTML usando el mapeo hardcodeado
  const cardsHTML = categoriesToRender.map(cat => {
    const imageSrc = getCategoryImageByName(cat.nombre) || 'assets/img/placeholder.jpg';
    const href = `products.html?category=${encodeURIComponent(cat.nombre)}`;

    return `<a class="category-card" href="${href}">
      <img class="category-card__image" src="${imageSrc}" alt="${cat.nombre}">
      <div class="category-card__overlay">
        <span class="category-card__name">${cat.nombre}</span>
      </div>
    </a>`;
  }).join('');

  grid.innerHTML = cardsHTML;
  console.log(`✅ ${categoriesToRender.length} categorías renderizadas`);
}



// function initCategories() {
//   const grid = document.getElementById("categories-grid")
//   console.log('initCategories - grid element:', grid);
//   console.log('initCategories - categories array:', categories);

//   if (!grid) {
//     console.error('Element categories-grid not found!');
//     return;
//   }

//   const categoriesToRender = (categories && categories.length ? categories : defaultCategories);
//   console.log('Categories to render:', categoriesToRender);

//   grid.innerHTML = categoriesToRender
//     .map((category) => {
//       const href = `products.html?category=${encodeURIComponent(category.nombre)}`

//       // Prioridad: 1) Mapeo hardcodeado, 2) Imagen del backend, 3) Placeholder
//       let imageSrc = getCategoryImageByName(category.nombre);
//       if (!imageSrc || imageSrc.includes('placeholder')) {
//         imageSrc = resolveImagePath(category.imagen || category.imagen_url);
//       }

//       console.log(`Rendering category: ${category.nombre}, image: ${imageSrc}`);
//       return `
//     <a class="category-card animate-on-scroll" href="${href}">
//       <img class="category-card__image" src="${imageSrc}" alt="${category.nombre}" loading="lazy" onerror="this.src='assets/img/placeholder.jpg'">
//       <div class="category-card__overlay">
//         <span class="category-card__name">${category.nombre}</span>
//       </div>
//     </a>
//   `
//     })
//     .join("")

//   console.log('Categories rendered. HTML length:', grid.innerHTML.length);
// }


// ==================== PRODUCTS ====================

function initProducts() {
  if (!document.getElementById("products-grid")) return
  renderCategoryFilters()

  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');

  if (categoryParam) {
    state.filters.categories = [categoryParam];
    // Marca el checkbox si existe
    const checkbox = Array.from(document.querySelectorAll('#category-filters input'))
      .find(input => input.value.toLowerCase() === categoryParam.toLowerCase());
    if (checkbox) checkbox.checked = true;
    filterByCategory(categoryParam); // ya recarga la grilla
  } else {
    renderProducts();
  }
}


function renderCategoryFilters() {
  const container = document.getElementById("category-filters")
  const uniqueCategories = [...new Set(products.map((p) => p.categoria))]

  container.innerHTML = uniqueCategories
    .map(
      (cat) => `
    <label class="filter-checkbox">
      <input type="checkbox" name="category" value="${cat}">
      <span class="checkmark"></span>
      ${cat}
    </label>
  `,
    )
    .join("")

  // Add event listeners
  container.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", handleCategoryFilter)
  })
}

function handleCategoryFilter() {
  const checked = document.querySelectorAll("#category-filters input:checked")
  state.filters.categories = Array.from(checked).map((input) => input.value)
  state.currentPage = 1
  renderProducts()
}

function initFilters() {
  // Price filters
  document.querySelectorAll('input[name="price"]').forEach((input) => {
    input.addEventListener("change", handlePriceFilter)
  })

  // Sort
  const sortSelect = document.getElementById("sort-select")
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sort = e.target.value
      renderProducts()
    })
  }

  // Clear filters
  const clearBtn = document.getElementById("clear-filters")
  if (clearBtn) {
    clearBtn.addEventListener("click", clearFilters)
  }

  // Mobile filters toggle
  const filterToggle = document.getElementById("filters-toggle-mobile")
  if (filterToggle) {
    filterToggle.addEventListener("click", () => {
      document.getElementById("products-sidebar").classList.add("mobile-active")
    })
  }

  const sidebarClose = document.getElementById("sidebar-close")
  if (sidebarClose) {
    sidebarClose.addEventListener("click", () => {
      document.getElementById("products-sidebar").classList.remove("mobile-active")
    })
  }
}

function handlePriceFilter() {
  const checked = document.querySelectorAll('input[name="price"]:checked')
  state.filters.priceRanges = Array.from(checked).map((input) => {
    const [min, max] = input.value.split("-").map(Number)
    return { min, max }
  })
  state.currentPage = 1
  renderProducts()
}

function clearFilters() {
  state.filters = { categories: [], priceRanges: [], search: "" }
  state.sort = "default"
  state.currentPage = 1

  // Uncheck all filters
  document.querySelectorAll('#category-filters input, input[name="price"]').forEach((input) => {
    input.checked = false
  })

  document.getElementById("sort-select").value = "default"
  document.getElementById("search-input").value = ""

  renderProducts()
}

function filterByCategory(category) {
  clearFilters()
  state.filters.categories = [category]

  // Check the corresponding checkbox
  const checkbox = document.querySelector(`#category-filters input[value="${category}"]`)
  if (checkbox) checkbox.checked = true

  state.currentPage = 1
  renderProducts()
}

function getFilteredProducts() {
  let filtered = [...products]

  // Category filter
  if (state.filters.categories.length > 0) {
    filtered = filtered.filter((p) => state.filters.categories.includes(p.categoria))
  }

  // Price filter
  if (state.filters.priceRanges.length > 0) {
    filtered = filtered.filter((p) => {
      return state.filters.priceRanges.some((range) => p.precio >= range.min && p.precio <= range.max)
    })
  }

  // Search filter
  if (state.filters.search) {
    filtered = filtered.filter(
      (p) =>
        p.nombre.toLowerCase().includes(state.filters.search) ||
        p.categoria.toLowerCase().includes(state.filters.search),
    )
  }

  // Sort
  switch (state.sort) {
    case "price-asc":
      filtered.sort((a, b) => a.precio - b.precio)
      break
    case "price-desc":
      filtered.sort((a, b) => b.precio - a.precio)
      break
    case "name-asc":
      filtered.sort((a, b) => a.nombre.localeCompare(b.nombre))
      break
    case "name-desc":
      filtered.sort((a, b) => b.nombre.localeCompare(a.nombre))
      break
  }

  return filtered
}

function renderProducts() {
  const grid = document.getElementById("products-grid")
  if (!grid) return

  const filtered = getFilteredProducts()

  // Pagination
  const start = (state.currentPage - 1) * state.productsPerPage
  const end = start + state.productsPerPage
  const paginated = filtered.slice(start, end)

  // Update results count
  const resultsCountEl = document.getElementById("results-count")
  if (resultsCountEl) resultsCountEl.textContent = `${filtered.length} productos`

  // Render products
  if (paginated.length === 0) {
    grid.innerHTML = `
      <div class="products-empty" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
        <p style="color: var(--color-text-muted);">No se encontraron productos con los filtros seleccionados.</p>
        <button class="btn btn--outline" onclick="clearFilters()" style="margin-top: 1rem;">Limpiar filtros</button>
      </div>
    `
  } else {
    grid.innerHTML = paginated.map((product) => createProductCard(product)).join("")
  }

  // Render pagination
  renderPagination(filtered.length)

  // Trigger animations
  setTimeout(triggerScrollAnimations, 100)
}

function createProductCard(product, isCarousel = false) {
  const isFavorite = state.favorites.includes(product.id)
  const isLowStock = product.stock <= 5 && product.stock > 0
  const isOutOfStock = product.stock === 0
  const imageSrc = resolveImagePath(product.imagen || product.imagen_url)

  return `
    <div class="product-card ${isCarousel ? "" : "animate-on-scroll"}">
      <div class="product-card__image">
        <img src="${imageSrc}" alt="${product.nombre}" loading="lazy" onerror="this.src='assets/img/placeholder.jpg'">
        ${isLowStock ? '<span class="product-card__badge product-card__badge--low">Últimas unidades</span>' : ""}
        ${isOutOfStock ? '<span class="product-card__badge product-card__badge--low">Agotado</span>' : ""}
        ${product.destacado && !isLowStock && !isOutOfStock ? '<span class="product-card__badge">Destacado</span>' : ""}
        <div class="product-card__actions">
          <button class="product-card__action ${isFavorite ? "favorited" : ""}" onclick="toggleFavorite(${product.id})" aria-label="${isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button class="product-card__action" onclick="openQuickView(${product.id})" aria-label="Vista rápida">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>
      </div>
      <div class="product-card__content">
        <span class="product-card__category">${product.categoria}</span>
        <h3 class="product-card__name">${product.nombre}</h3>
        <p class="product-card__stock">Stock: ${product.stock} unidades</p>
        <p class="product-card__price">${formatPrice(product.precio)}</p>
        <button class="btn btn--primary btn--sm product-card__btn" onclick="addToCart(${product.id})" ${isOutOfStock ? "disabled" : ""}>
          ${isOutOfStock ? "Agotado" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  `
}

function renderPagination(totalProducts) {
  const container = document.getElementById("products-pagination")
  if (!container) return

  const totalPages = Math.ceil(totalProducts / state.productsPerPage)

  if (totalPages <= 1) {
    container.innerHTML = ""
    return
  }

  let html = `
    <button class="pagination-btn" onclick="changePage(${state.currentPage - 1})" ${state.currentPage === 1 ? "disabled" : ""}>
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 18l-6-6 6-6"></path>
      </svg>
    </button>
  `

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= state.currentPage - 1 && i <= state.currentPage + 1)) {
      html += `<button class="pagination-btn ${i === state.currentPage ? "active" : ""}" onclick="changePage(${i})">${i}</button>`
    } else if (i === state.currentPage - 2 || i === state.currentPage + 2) {
      html += `<span class="pagination-btn" style="cursor: default;">...</span>`
    }
  }

  html += `
    <button class="pagination-btn" onclick="changePage(${state.currentPage + 1})" ${state.currentPage === totalPages ? "disabled" : ""}>
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"></path>
      </svg>
    </button>
  `

  container.innerHTML = html
}

function changePage(page) {
  const totalPages = Math.ceil(getFilteredProducts().length / state.productsPerPage)
  if (page < 1 || page > totalPages) return

  state.currentPage = page
  renderProducts()

  // Scroll to products section top
  document.getElementById("products").scrollIntoView({ behavior: "smooth" })
}

// ==================== QUICK VIEW ====================

function openQuickView(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  const isFavorite = state.favorites.includes(product.id)
  const content = document.getElementById("quickview-content")

  content.innerHTML = `
    <div class="quickview__image">
      <img src="${product.imagen}" alt="${product.nombre}">
    </div>
    <div class="quickview__details">
      <span class="quickview__category">${product.categoria}</span>
      <h2 class="quickview__name">${product.nombre}</h2>
      <p class="quickview__stock" style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 0.5rem;">Stock: ${product.stock} unidades</p>
      <p class="quickview__price">${formatPrice(product.precio)}</p>
      <p class="quickview__desc">${product.descripcion}</p>
      <div class="quickview__actions">
        <button class="btn btn--primary" onclick="addToCart(${product.id}); closeOverlay('quickview-overlay');" ${product.stock === 0 ? "disabled" : ""}>
          ${product.stock === 0 ? "Agotado" : "Agregar al carrito"}
        </button>
        <button class="btn btn--outline ${isFavorite ? "favorited" : ""}" onclick="toggleFavorite(${product.id})">
          <svg class="icon" viewBox="0 0 24 24" fill="${isFavorite ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
  `

  openOverlay("quickview-overlay")
}

// ==================== CART ====================

function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product || product.stock === 0) return

  const existingItem = state.cart.find((item) => item.id === productId)

  if (existingItem) {
    if (existingItem.quantity < product.stock) {
      existingItem.quantity++
    } else {
      showToast("Stock máximo alcanzado", "info")
      return
    }
  } else {
    state.cart.push({ id: productId, quantity: 1 })
  }

  saveStateToStorage()
  updateCartUI()
  showToast(`${product.nombre} agregado al carrito`, "success")
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId)
  saveStateToStorage()
  updateCartUI()
  renderCheckoutItems()
}

function updateCartQuantity(productId, change) {
  const item = state.cart.find((item) => item.id === productId)
  const product = products.find((p) => p.id === productId)

  if (!item || !product) return

  const newQuantity = item.quantity + change

  if (newQuantity <= 0) {
    removeFromCart(productId)
  } else if (newQuantity <= product.stock) {
    item.quantity = newQuantity
    saveStateToStorage()
    updateCartUI()
    renderCheckoutItems()
  } else {
    showToast("Stock máximo alcanzado", "info")
  }
}

function updateCartUI() {
  const cartItems = document.getElementById("cart-items")
  const cartEmpty = document.getElementById("cart-empty")
  const cartSummary = document.getElementById("cart-summary")
  const cartCount = document.getElementById("cart-count")

  // Update count
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems

  if (state.cart.length === 0) {
    cartItems.classList.add("hidden")
    cartEmpty.classList.remove("hidden")
    cartSummary.classList.add("hidden")
    return
  }

  cartItems.classList.remove("hidden")
  cartEmpty.classList.add("hidden")
  cartSummary.classList.remove("hidden")

  // Render items
  cartItems.innerHTML = state.cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id)
      if (!product) return ""

      return `
      <div class="cart-item">
        <div class="cart-item__image">
          <img src="${product.imagen}" alt="${product.nombre}">
        </div>
        <div class="cart-item__details">
          <h4 class="cart-item__name">${product.nombre}</h4>
          <p class="cart-item__price">${formatPrice(product.precio)}</p>
          <div class="cart-item__qty">
            <button class="qty-btn" onclick="updateCartQuantity(${product.id}, -1)">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity(${product.id}, 1)">+</button>
          </div>
        </div>
        <div class="cart-item__remove">
          <button onclick="removeFromCart(${product.id})" aria-label="Eliminar">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    `
    })
    .join("")

  // Update totals
  updateCartTotals()
}

function updateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id)
    return sum + (product ? product.precio * item.quantity : 0)
  }, 0)

  const tax = Math.round(subtotal * 0.19)
  const total = subtotal + tax

  document.getElementById("cart-subtotal").textContent = formatPrice(subtotal)
  document.getElementById("cart-tax").textContent = formatPrice(tax)
  document.getElementById("cart-total").textContent = formatPrice(total)
}

// ==================== FAVORITES ====================

function toggleFavorite(productId) {
  const index = state.favorites.indexOf(productId)

  if (index === -1) {
    state.favorites.push(productId)
    showToast("Agregado a favoritos", "success")
  } else {
    state.favorites.splice(index, 1)
    showToast("Eliminado de favoritos", "info")
  }

  saveStateToStorage()
  updateFavoritesUI()
  renderProducts()

  // Update carousel if visible
  const carouselTrack = document.getElementById("carousel-track")
  if (carouselTrack) {
    const featuredProducts = products.filter((p) => p.destacado)
    carouselTrack.innerHTML = featuredProducts.map((product) => createProductCard(product, true)).join("")
  }
}

function updateFavoritesUI() {
  const favoritesItems = document.getElementById("favorites-items")
  const favoritesEmpty = document.getElementById("favorites-empty")
  const favoritesCount = document.getElementById("favorites-count")

  // Update count
  favoritesCount.textContent = state.favorites.length

  if (state.favorites.length === 0) {
    favoritesItems.classList.add("hidden")
    favoritesEmpty.classList.remove("hidden")
    return
  }

  favoritesItems.classList.remove("hidden")
  favoritesEmpty.classList.add("hidden")

  // Render items
  favoritesItems.innerHTML = state.favorites
    .map((id) => {
      const product = products.find((p) => p.id === id)
      if (!product) return ""

      return `
      <div class="favorite-item">
        <div class="favorite-item__image">
          <img src="${product.imagen}" alt="${product.nombre}">
        </div>
        <div class="favorite-item__details">
          <h4 class="favorite-item__name">${product.nombre}</h4>
          <p class="favorite-item__price">${formatPrice(product.precio)}</p>
        </div>
        <div class="favorite-item__actions">
          <button onclick="addToCart(${product.id})" aria-label="Agregar al carrito">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
          <button onclick="toggleFavorite(${product.id})" aria-label="Eliminar de favoritos">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    `
    })
    .join("")
}

// ==================== CART TABS ====================

function initCartTabs() {
  document.querySelectorAll(".cart-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      switchCartTab(tab.dataset.tab)
    })
  })
}

function switchCartTab(tabName) {
  // Update tabs
  document.querySelectorAll(".cart-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName)
  })

  // Update content
  const cartContent = document.getElementById("cart-content")
  const favoritesContent = document.getElementById("favorites-content")
  const cartSummary = document.getElementById("cart-summary")

  if (tabName === "cart") {
    cartContent.classList.remove("hidden")
    favoritesContent.classList.add("hidden")
    if (state.cart.length > 0) {
      cartSummary.classList.remove("hidden")
    }
  } else {
    cartContent.classList.add("hidden")
    favoritesContent.classList.remove("hidden")
    cartSummary.classList.add("hidden")

    // Explicitly update favorites UI when showing the tab
    if (typeof updateFavoritesUI === "function") {
      updateFavoritesUI()
    }
  }
}

const CHILE_REGIONS = {
  "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
  "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
  "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
  "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado", "Illapel", "Canela", "Los Vilos", "Salamanca"],
  "Valparaíso": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
  "Metropolitana": ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
  "O'Higgins": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchigüe", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
  "Maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
  "Biobío": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"],
  "Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
  "Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
  "Los Lagos": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
  "Aysén": ["Coyhaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
  "Magallanes": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
};

// ==================== CHECKOUT LOGIC ====================

function loadRegions() {
  const regionSelect = document.getElementById("checkout-region");
  if (!regionSelect) return;

  // Clear existing except placeholder
  regionSelect.innerHTML = '<option value="">Selecciona una región</option>';

  Object.keys(CHILE_REGIONS).forEach(region => {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    regionSelect.appendChild(option);
  });

  // Enable region change listener
  regionSelect.addEventListener("change", handleRegionChange);
}

function handleRegionChange(e) {
  const region = e.target.value;
  const citySelect = document.getElementById("checkout-city");

  if (!citySelect) return;

  // Reset city select
  citySelect.innerHTML = '<option value="">Selecciona una comuna</option>';
  citySelect.disabled = !region;

  if (region && CHILE_REGIONS[region]) {
    CHILE_REGIONS[region].sort().forEach(commune => {
      const option = document.createElement("option");
      option.value = commune;
      option.textContent = commune;
      citySelect.appendChild(option);
    });
  }
}

function autoFillCheckout() {
  if (!state.currentUser) return;

  const nameInput = document.getElementById("checkout-name");
  // Assuming email might be stored in future, currently just name
  // const emailInput = document.getElementById("checkout-email"); 

  if (nameInput) {
    const fullName = `${state.currentUser.nombre || ""} ${state.currentUser.apellido || ""}`.trim();
    nameInput.value = fullName;
  }
  // if (emailInput) emailInput.value = state.currentUser.email || "";
}


async function openCheckout() {
  if (!state.currentUser) {
    // Custom Alert Window as requested
    const result = await showCustomAlert({
      title: "Iniciar Sesión",
      message: "Debes iniciar sesión o registrarte para realizar una compra.",
      confirmText: "Iniciar Sesión",
      cancelText: "Cancelar",
      showCancel: true
    });

    if (result) {
      closeOverlay("cart-overlay");
      setTimeout(() => openOverlay("login-overlay"), 300);
    }
    return;
  }

  if (state.cart.length === 0) {
    showToast("Tu carrito está vacío", "error")
    return
  }

  state.checkoutStep = 1
  renderCheckoutItems()
  updateCheckoutProgress()
  openOverlay("checkout-overlay")

  // Initialize Form Data
  loadRegions();
  setTimeout(autoFillCheckout, 100); // Small delay to ensure modal is ready
}

function renderCheckoutItems() {
  const container = document.getElementById("checkout-items")

  container.innerHTML = state.cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id)
      if (!product) return ""

      return `
      <div class="checkout-item">
        <div class="checkout-item__image">
          <img src="${product.imagen}" alt="${product.nombre}">
        </div>
        <div class="checkout-item__details">
          <p class="checkout-item__name">${product.nombre}</p>
          <p class="checkout-item__qty">Cantidad: ${item.quantity}</p>
        </div>
        <p class="checkout-item__price">${formatPrice(product.precio * item.quantity)}</p>
      </div>
    `
    })
    .join("")

  // Update totals
  const subtotal = state.cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id)
    return sum + (product ? product.precio * item.quantity : 0)
  }, 0)

  const tax = Math.round(subtotal * 0.19)
  const total = subtotal + tax

  document.getElementById("checkout-subtotal").textContent = formatPrice(subtotal)
  document.getElementById("checkout-tax").textContent = formatPrice(tax)
  document.getElementById("checkout-total").textContent = formatPrice(total)
}

function updateCheckoutProgress() {
  document.querySelectorAll(".progress-step").forEach((step, index) => {
    const stepNum = index + 1
    step.classList.remove("active", "completed")

    if (stepNum < state.checkoutStep) {
      step.classList.add("completed")
    } else if (stepNum === state.checkoutStep) {
      step.classList.add("active")
    }
  })

  document.querySelectorAll(".checkout-step").forEach((step, index) => {
    step.classList.toggle("active", index + 1 === state.checkoutStep)
  })
}

// ==================== PAYMENT FORMATTERS ====================

function setupPaymentFormatters() {
  const cardInput = document.getElementById('card-number');
  const expiryInput = document.getElementById('card-expiry');

  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
      value = value.substring(0, 16); // Limit to 16 digits
      // Add space every 4 digits
      const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
      e.target.value = formatted;
    });
  }

  if (expiryInput) {
    expiryInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
      if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
      e.target.value = value.substring(0, 5); // Limit MM/YY
    });
  }
}

// Ensure this is called when entering step 3
function nextCheckoutStep(step) {
  // Validate current step
  if (state.checkoutStep === 2) {
    const form = document.getElementById("checkout-form")
    const region = document.getElementById("checkout-region").value;
    const city = document.getElementById("checkout-city").value;
    const phone = document.getElementById("checkout-phone").value.replace(/\s/g, '');
    const zip = document.getElementById("checkout-zip").value.trim();

    // Check HTML5 Validity first
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    // Custom Validations
    let errorMessage = "";

    if (!region) errorMessage = "Debes seleccionar una región";
    else if (!city) errorMessage = "Debes seleccionar una comuna";

    // Validate Phone: +569XXXXXXXX or 9XXXXXXXX (Chilean Format)
    else if (!/^(\+?56)?(9|2)\d{8}$/.test(phone)) {
      errorMessage = "Ingresa un teléfono válido (Ej: +56912345678)";
    }

    // Validate Zip: ~7 digits usually
    else if (!/^\d{7}$/.test(zip)) {
      errorMessage = "El Código Postal debe tener 7 dígitos";
    }

    if (errorMessage) {
      showToast(errorMessage, "error");
      return;
    }
  }

  state.checkoutStep = step
  updateCheckoutProgress()

  if (step === 3) {
    setTimeout(setupPaymentFormatters, 100);
  }
}

function prevCheckoutStep(step) {
  state.checkoutStep = step
  updateCheckoutProgress()
}

async function processPaymentSimulated() {
  // Check if any payment method is selected
  const paymentMethodInput = document.querySelector('input[name="payment"]:checked');
  if (!paymentMethodInput) {
    showToast("Selecciona un método de pago", "error");
    return;
  }
  const paymentMethod = paymentMethodInput.value;

  if (paymentMethod === 'credit' || paymentMethod === 'debit') {
    const cardName = document.getElementById('card-name').value.trim();
    const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
    const cardExpiry = document.getElementById('card-expiry').value.trim();
    const cardCvv = document.getElementById('card-cvv').value.trim();

    // 1. Validate Name (At least 2 words)
    if (cardName.split(' ').length < 2) {
      showToast("Ingresa nombre y apellido en la tarjeta", "error");
      return;
    }

    // 2. Validate Card Number (16 digits)
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
      showToast("El número de tarjeta debe tener 16 dígitos", "error");
      return;
    }

    // 3. Validate Expiry (Format MM/YY and Future Check)
    if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
      showToast("Fecha inválida (Use MM/YY)", "error");
      return;
    }

    // Simple expiry check logic
    const [expMonth, expYear] = cardExpiry.split('/').map(num => parseInt(num));
    const now = new Date();
    const currentYear = now.getFullYear() % 100; // 25
    const currentMonth = now.getMonth() + 1;

    if (expMonth < 1 || expMonth > 12) {
      showToast("Mes inválido (01-12)", "error");
      return;
    }

    // Check if expired
    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
      showToast("La tarjeta está vencida", "error");
      return;
    }

    // 4. Validate CVV (3 or 4 digits)
    if (cardCvv.length < 3 || cardCvv.length > 4 || !/^\d+$/.test(cardCvv)) {
      showToast("CVV inválido (3 o 4 dígitos)", "error");
      return;
    }
  }

  // Process Payment
  showToast("Procesando pago seguro...", "info");

  try {
    // 1. Construct Order Payload
    const addressData = {
      name: document.getElementById("checkout-name").value,
      address: document.getElementById("checkout-address").value,
      region: document.getElementById("checkout-region").value,
      city: document.getElementById("checkout-city").value,
      zip: document.getElementById("checkout-zip").value,
      phone: document.getElementById("checkout-phone").value
    };

    const paymentData = {
      method: paymentMethod,
      // Store only last 4 digits for reference, never full card
      cardLast4: (paymentMethod === 'credit' || paymentMethod === 'debit')
        ? document.getElementById('card-number').value.replace(/\s/g, '').slice(-4)
        : 'N/A'
    };

    // 1. Construct Order Payload MATCHING PedidoRequest DTO exactly
    // public record PedidoRequest(Integer idUsuario, UsuarioRequest usuario, Integer idDireccion, DireccionRequest direccion, List<PedidoItemRequest> items, String paymentMethod)

    // Split address into street and number (naive split)
    const fullAddress = addressData.address || "Calle Desconocida S/N";

    // Try to extract number from end of string
    let street = fullAddress;
    let number = "S/N";

    const numberMatch = fullAddress.match(/(\d+)\s*$/);
    if (numberMatch) {
      number = numberMatch[1];
      street = fullAddress.replace(numberMatch[0], "").trim();
    }

    if (!street) street = "Calle Principal"; // Fallback for empty street
    if (street.length > 80) street = street.substring(0, 80); // Truncate if too long (DB limit)

    const orderData = {
      idUsuario: parseInt(state.currentUser.id || state.currentUser.idUsuario),
      total: state.cart.reduce((sum, item) => {
        const p = products.find(prod => prod.id === item.id);
        return sum + (p ? p.precio * item.quantity : 0);
      }, 0),
      // Send both camelCase and snake_case for address to be safe with varying DTO styles
      direccion: {
        idUsuario: parseInt(state.currentUser.id || state.currentUser.idUsuario),
        calle: street,
        numero: number,
        ciudad: addressData.city || "Santiago",
        region: addressData.region || "RM",
        pais: "Chile",
        codigoPostal: addressData.zip || "9999999",
        codigo_postal: addressData.zip || "9999999", // Snake case fallback
        esPrincipal: false,
        es_principal: false
      },
      items: state.cart.map(item => {
        const p = products.find(prod => prod.id === item.id);
        return {
          idProducto: parseInt(item.id),
          cantidad: parseInt(item.quantity),
          precioUnitario: p ? p.precio : 0
        };
      }),
      paymentMethod: paymentMethod // 'credit' or 'debit'
    };

    console.log("Sending Order Payload:", JSON.stringify(orderData, null, 2)); // Debug log

    // 2. Send to Backend
    // Note: createOrder is async in api.js
    let response = null;
    if (typeof ApiService !== 'undefined') {
      response = await ApiService.createOrder(orderData);
    }

    // 3. Local Updates (On Success)
    // Update local stock for visual consistency
    state.cart.forEach(item => {
      const product = products.find(p => p.id === item.id);
      if (product) product.stock = Math.max(0, (product.stock || 0) - item.quantity);
    });

    // Save Order History & Preferences to User Profile
    if (state.currentUser) {
      if (!state.currentUser.orders) state.currentUser.orders = [];
      // Use backend response ID if available, else generate one
      orderData.id = (response && response.id) ? response.id : Math.floor(100000 + Math.random() * 900000);
      state.currentUser.orders.push(orderData);

      // Save Preferences for Auto-fill
      state.currentUser.lastAddress = addressData;
      state.currentUser.lastPaymentMethod = paymentMethod; // Just the type

      // Save User State
      saveStateToStorage();
    }

    // 4. Clear Cart
    state.cart = [];
    saveStateToStorage();
    updateCartUI();

    // 5. Show Success
    state.checkoutStep = 4;
    updateCheckoutProgress();
    createConfetti();
    showToast("¡Compra realizada con éxito!", "success");

  } catch (error) {
    console.error("Order Error:", error);
    showToast(error.message || "Error al procesar el pedido. Intente nuevamente.", "error");

    // Reset button to allow retry
    const btn = document.querySelector("#checkout-step-3 .btn--primary");
    if (btn) {
      btn.textContent = "Confirmar Pago";
      btn.disabled = false;
    }
  }
}
// Remove the old async definition if this was replacing internals
// But since I am inside the function in the view, I need to make sure the function signature is async.
// Since replace_file_content replaces the body, I can't easily change the signature 'function processPaymentSimulated()' to 'async function...'
// UNLESS I replace the whole function definition line.

// Let's check the StartLine/EndLine of the previous view. 
// It was inside the function body? No, I viewed lines 1270-1330 and 1330-1410.
// I need to replace the WHOLE function to make it async.


function finishCheckout() {
  // Misma funcionalidad que el botón X: cerrar overlay y resetear estado interno
  closeOverlay("checkout-overlay")

  // Pequeño delay para que el reset no se vea brusco mientras cierra
  setTimeout(() => {
    state.checkoutStep = 1
    updateCheckoutProgress()
    // Limpiamos el contenedor de confetti para la proxima
    const confettiContainer = document.getElementById("confetti-container")
    if (confettiContainer) confettiContainer.innerHTML = ""
  }, 300)
}

function createConfetti() {
  const container = document.getElementById("confetti-container")
  const colors = ["#128f8b", "#4ea19d", "#75b4b0", "#98c6c3", "#fbbf24", "#f472b6"]

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div")
    confetti.className = "confetti"
    confetti.style.left = Math.random() * 100 + "%"
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)]
    confetti.style.animationDelay = Math.random() * 2 + "s"
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`
    container.appendChild(confetti)
  }

  // Clean up after animation
  setTimeout(() => {
    container.innerHTML = ""
  }, 5000)
}

// ==================== SERVICES ====================

function openServiceModal(serviceKey) {
  const service = services[serviceKey]
  if (!service) return

  const content = document.getElementById("modal-content")

  content.innerHTML = `
    <h2>${service.title}</h2>
    <p>${service.description}</p>
    <h4 style="margin-top: 1.5rem; margin-bottom: 1rem;">Incluye:</h4>
    <ul style="margin-bottom: 1.5rem;">
      ${service.features
      .map(
        (f) => `<li style="padding: 0.5rem 0; padding-left: 1.5rem; position: relative;">
        <span style="position: absolute; left: 0; color: var(--color-primary);">✓</span>
        ${f}
      </li>`,
      )
      .join("")}
    </ul>
    <div style="display: flex; gap: 2rem; margin-bottom: 1.5rem;">
      <div>
        <strong>Duración:</strong>
        <p style="color: var(--color-text-muted);">${service.duration}</p>
      </div>
      <div>
        <strong>Precio:</strong>
        <p style="color: var(--color-primary); font-weight: 600;">${service.price}</p>
      </div>
    </div>
    <button class="btn btn--primary" onclick="closeOverlay('modal-overlay'); showToast('Servicio solicitado. Te contactaremos pronto.', 'success');">
      Solicitar servicio
    </button>
  `

  openOverlay("modal-overlay")
}

// ==================== BLOG ====================

function initBlog() {
  const grid = document.getElementById("blog-grid")
  if (!grid) return


  grid.innerHTML = blogPosts
    .map(
      (post) => `
    <article class="blog-card animate-on-scroll">
      <div class="blog-card__image">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </div>
      <div class="blog-card__content">
        <h3 class="blog-card__title">${post.title}</h3>
        <p class="blog-card__excerpt">${post.excerpt}</p>
        <button class="btn btn--outline btn--sm" onclick="openBlogPost(${post.id})">
          Leer más
        </button>
      </div>
    </article>
  `,
    )
    .join("")
}

function openBlogPost(postId) {
  const post = blogPosts.find((p) => p.id === postId)
  if (!post) return

  const content = document.getElementById("modal-content")

  content.innerHTML = `
    <img src="${post.image}" alt="${post.title}" style="margin-bottom: 1.5rem;">
    <h2>${post.title}</h2>
    <div style="white-space: pre-line; line-height: 1.8;">
      ${post.content}
    </div>
  `

  openOverlay("modal-overlay")
}

// ==================== TESTIMONIALS ====================

function initTestimonials() {
  const grid = document.getElementById("testimonials-grid")
  if (!grid) return


  grid.innerHTML = testimonials
    .map(
      (testimonial) => `
    <div class="testimonial-card animate-on-scroll">
      <div class="testimonial-card__avatar">
        <img src="${testimonial.avatar}" alt="${testimonial.name}">
      </div>
      <h4 class="testimonial-card__name">${testimonial.name}</h4>
      <div class="testimonial-card__rating">
        ${"★".repeat(testimonial.rating)}${"☆".repeat(5 - testimonial.rating)}
      </div>
      <p class="testimonial-card__text">"${testimonial.text}"</p>
    </div>
  `,
    )
    .join("")
}

// ==================== FORMS ====================

function initForms() {
  // Login form
  const loginForm = document.getElementById("login-form")
  if (loginForm) loginForm.addEventListener("submit", handleLogin)

  // Register form
  const registerForm = document.getElementById("register-form")
  if (registerForm) registerForm.addEventListener("submit", handleRegister)

  // Newsletter form
  const newsletterForm = document.getElementById("newsletter-form")
  if (newsletterForm) newsletterForm.addEventListener("submit", handleNewsletter)
}

async function handleLogin(e) {
  e.preventDefault()

  const email = document.getElementById("login-email").value.trim()
  const password = document.getElementById("login-password").value.trim()

  // Clear errors
  clearFormErrors("login")

  // Validate
  let isValid = true

  if (!email) {
    showFormError("login-email", "El correo es requerido")
    isValid = false
  } else if (!isValidEmail(email)) {
    showFormError("login-email", "Ingresa un correo válido")
    isValid = false
  }

  if (!password) {
    showFormError("login-password", "La contraseña es requerida")
    isValid = false
  }

  if (!isValid) return

  // Check credentials via API
  try {
    showToast("Iniciando sesión...", "info");
    const rememberEl = document.getElementById("login-remember");
    const rememberMe = rememberEl ? rememberEl.checked : true; // Default to true if element missing

    // Pass rememberMe value to control profile saving
    const user = await ApiService.login(email, password, rememberMe);

    if (user) {
      // Actualizar estado global
      state.currentUser = user; // El ApiService ya guarda en localStorage

      // Load User Cart/Favs
      const savedCartJson = localStorage.getItem(`rp_cart_${user.id}`)
      const savedCart = savedCartJson ? JSON.parse(savedCartJson) : []

      const guestCart = [...state.cart];

      // Cart Merge Logic
      if (guestCart.length > 0) {
        if (savedCart.length > 0) {
          const wantToMerge = await showCustomAlert({
            title: "Carritos Encontrados",
            message: `Tienes ${guestCart.length} productos en tu carrito actual y ${savedCart.length} guardados. \n¿Deseas combinarlos?`,
            confirmText: "Combinar Carritos",
            cancelText: "Descartar Actual",
            showCancel: true
          });

          if (wantToMerge) {
            // Merge strategy: Add guest items to saved items
            // If item exists, sum quantities
            guestCart.forEach(guestItem => {
              const existing = savedCart.find(sc => sc.id === guestItem.id);
              if (existing) {
                existing.quantity += guestItem.quantity;
                // Cap at stock? (Ideally check stock, but for now simple sum)
              } else {
                savedCart.push(guestItem);
              }
            });
            state.cart = savedCart;
            showToast("Carritos combinados exitosamente", "success");
          } else {
            state.cart = savedCart;
            showToast("Carrito guardado restaurado", "info");
          }
        } else {
          // User has no saved cart, keep guest cart
          const keepGuest = await showCustomAlert({
            title: "Guardar Carrito",
            message: `Tienes ${guestCart.length} productos en tu carrito. ¿Deseas guardarlos en tu cuenta?`,
            confirmText: "Guardar",
            cancelText: "Descartar",
            showCancel: true
          });

          if (keepGuest) {
            state.cart = guestCart;
            showToast("Carrito asignado a tu cuenta", "success");
          } else {
            state.cart = [];
            showToast("Carrito limpiado", "info");
          }
        }
      } else {
        // No guest items, just load saved
        state.cart = savedCart;
      }

      // Save new state immediately
      saveStateToStorage();

      const userFavs = localStorage.getItem(`rp_favorites_${user.id}`)
      state.favorites = userFavs ? JSON.parse(userFavs) : []

      updateCartUI();
      updateFavoritesUI();

      updateAuthUI();
      closeOverlay("login-overlay");
      showToast(`¡Bienvenido, ${user.nombre}!`, "success");
      e.target.reset();
    }
  } catch (error) {
    console.error(error);
    // Modified: Ensure we don't logout/close session on failed login inside the Switch User flow
    // Just show the error toast
    showToast("Credenciales incorrectas o error de conexión", "error");
    // Ensure we keep the overlay open so they can retry
    return;
  }
}

async function handleRegister(e) {
  e.preventDefault()

  const nombre = document.getElementById("register-name").value.trim()
  const apellido = document.getElementById("register-lastname").value.trim()
  // const birthdate = document.getElementById("register-birthdate").value.trim() // Backend no usa fecha por ahora
  const email = document.getElementById("register-email").value.trim()
  const password = document.getElementById("register-password").value.trim()
  const confirm = document.getElementById("register-confirm").value.trim()

  // Clear errors
  clearFormErrors("register")

  // Validate
  let isValid = true

  if (!nombre) {
    showFormError("register-name", "El nombre es requerido")
    isValid = false
  }

  if (!apellido) {
    showFormError("register-lastname", "El apellido es requerido")
    isValid = false
  }

  /* 
  // Backend no valida fecha aun, omitimos validación estricta para simplificar integración
  if (!birthdate) {
    showFormError("register-birthdate", "La fecha de nacimiento es requerida")
    isValid = false
  } 
  */

  if (!email) {
    showFormError("register-email", "El correo es requerido")
    isValid = false
  } else if (!isValidEmail(email)) {
    showFormError("register-email", "Ingresa un correo válido")
    isValid = false
  }

  if (!password) {
    showFormError("register-password", "La contraseña es requerida")
    isValid = false
  } else if (password.length < 6) {
    showFormError("register-password", "Mínimo 6 caracteres")
    isValid = false
  }

  if (password !== confirm) {
    showFormError("register-confirm", "Las contraseñas no coinciden")
    isValid = false
  }

  if (!isValid) return

  // Create user via API
  const newUser = {
    nombre,
    apellido,
    email,
    password
  }

  try {
    showToast("Registrando usuario...", "info");
    const data = await ApiService.register(newUser);

    if (data) {
      // Auto-login success
      state.currentUser = data; // ApiService updates localStorage

      showToast("¡Registro exitoso! Sesión iniciada.", "success");
      e.target.reset();

      // Close register, verify if we need to open something else?
      // Just close overlays
      closeOverlay("register-overlay");
      updateAuthUI();
    }
  } catch (error) {
    console.error(error);
    showToast("Error al registrar: " + error.message, "error");
  }
}

function handleNewsletter(e) {
  e.preventDefault()

  const name = document.getElementById("newsletter-name").value.trim()
  const email = document.getElementById("newsletter-email").value.trim()

  // Clear errors
  document.getElementById("newsletter-name-error").textContent = ""
  document.getElementById("newsletter-email-error").textContent = ""

  // Validate
  let isValid = true

  if (!name) {
    document.getElementById("newsletter-name-error").textContent = "El nombre es requerido"
    isValid = false
  }

  if (!email) {
    document.getElementById("newsletter-email-error").textContent = "El correo es requerido"
    isValid = false
  } else if (!isValidEmail(email)) {
    document.getElementById("newsletter-email-error").textContent = "Ingresa un correo válido"
    isValid = false
  }

  if (!isValid) return

  showToast("¡Gracias por suscribirte! Pronto recibirás novedades.", "success")
  e.target.reset()
}

function showFormError(inputId, message) {
  const input = document.getElementById(inputId)
  const error = document.getElementById(`${inputId}-error`)

  if (input) input.classList.add("error")
  if (error) error.textContent = message
}

function clearFormErrors(formPrefix) {
  document.querySelectorAll(`[id^="${formPrefix}-"]`).forEach((el) => {
    if (el.tagName === "INPUT") {
      el.classList.remove("error")
    }
    if (el.id.endsWith("-error")) {
      el.textContent = ""
    }
  })
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidDate(date) {
  // return /^\d{2}\-\d{2}\-\d{4}$/.test(date)
  return /\d{4}-\d{2}-\d{2}/.test(date)
}

// ==================== AUTH ====================

function switchAuth(type) {
  if (type === "login") {
    closeOverlay("register-overlay")
    openOverlay("login-overlay")
  } else {
    closeOverlay("login-overlay")
    openOverlay("register-overlay")
  }
}

function updateAuthUI() {
  const userName = document.getElementById("user-name");
  const userMenuName = document.getElementById("user-menu-name");

  if (state.currentUser) {
    const greeting = `Hola, ${state.currentUser.nombre}`;

    // Direct update
    if (userName) {
      userName.textContent = greeting;
    }

    if (userMenuName) {
      userMenuName.textContent = greeting;
    }
  } else {
    if (userName) userName.textContent = "";
    if (userMenuName) userMenuName.textContent = "";
    closeUserMenu();
  }
}

function ensureUserMenu() {
  let menu = document.getElementById("user-menu");
  if (menu) return menu;

  menu = document.createElement("div");
  menu.id = "user-menu";
  menu.className = "user-menu";

  const currentUser = state.currentUser;
  const savedUsers = (typeof ApiService !== 'undefined') ? ApiService.getSavedUsers() : [];

  // Filter out current user from list
  const otherUsers = savedUsers.filter(u => u.email !== (currentUser?.email));

  let profilesHtml = '';
  if (otherUsers.length > 0) {
    profilesHtml = `
        <div class="user-menu__divider"></div>
        <div class="user-menu__profiles">
            <div class="user-menu__profiles-title">Otras cuentas</div>
            ${otherUsers.map(u => `
                <div class="user-menu__profile-item" onclick="handleSwitchProfile('${u.email}')">
                    <div class="profile-avatar">${u.nombre.charAt(0).toUpperCase()}</div>
                    <div class="profile-info">
                        <span class="profile-name">${u.nombre}</span>
                    </div>
                    <button class="profile-remove" onclick="handleRemoveProfile('${u.email}', event)" title="Eliminar cuenta">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            `).join('')}
        </div>
      `;
  }

  menu.innerHTML = `
    <div class="user-menu__header">
      <span id="user-menu-name"></span>
    </div>
    
    <!-- Explicit Add Account Button -->
    <button class="user-menu__item" id="add-account-btn" type="button">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px;">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Agregar otra cuenta
    </button>
    
    <button class="user-menu__item" id="logout-btn" type="button">Cerrar sesión</button>

    <!-- Profiles listed BELOW buttons as requested -->
    ${profilesHtml}
  `;

  const actions = document.querySelector(".header__actions");
  if (actions) actions.appendChild(menu);

  const logoutBtn = menu.querySelector("#logout-btn");
  if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);

  // This button now always acts as "Add Account" (opens login overlay)
  const addBtn = menu.querySelector("#add-account-btn");
  if (addBtn) addBtn.addEventListener("click", () => {
    closeUserMenu();
    openOverlay("login-overlay");
  });

  // IMMEDIATE UPDATE: Populate the name slot we just created
  // This fixes the bug where the dropdown opened with an empty header
  if (state.currentUser) {
    const userMenuName = menu.querySelector("#user-menu-name");
    if (userMenuName) userMenuName.textContent = `Hola, ${state.currentUser.nombre}`;
  }

  return menu;
}

function toggleUserMenu() {
  const menu = ensureUserMenu();
  const isOpen = menu.classList.toggle("active");
  if (isOpen) {
    document.addEventListener("click", handleOutsideUserMenu, { once: true });
  }
}

function closeUserMenu() {
  const menu = document.getElementById("user-menu");
  if (menu) menu.classList.remove("active");
}

function handleOutsideUserMenu(e) {
  const menu = document.getElementById("user-menu");
  const userBtn = document.getElementById("user-btn");
  if (!menu || !userBtn) return;

  if (!menu.contains(e.target) && !userBtn.contains(e.target)) {
    closeUserMenu();
  } else {
    document.addEventListener("click", handleOutsideUserMenu, { once: true });
  }
}

// Make handlers global for inline onclick
window.handleSwitchProfile = function (email) {
  if (typeof ApiService !== 'undefined') {
    const success = ApiService.switchUser(email);
    if (success) {
      state.currentUser = ApiService.getCurrentUser();
      updateAuthUI();
      closeUserMenu();
      showToast(`Cambiado a ${state.currentUser.nombre}`, "success");
      setTimeout(() => window.location.reload(), 500);
    } else {
      showToast("Error al cambiar de usuario", "error");
    }
  }
};

window.handleRemoveProfile = function (email, event) {
  if (event) event.stopPropagation(); // Prevent triggering parent click handlers
  if (confirm('¿Eliminar esta cuenta del acceso rápido?')) {
    if (typeof ApiService !== 'undefined') {
      ApiService.removeSavedUser(email);
      // Refresh menu by removing and re-creating it
      const menu = document.getElementById("user-menu");
      if (menu) menu.remove();
      toggleUserMenu(); // Re-open updated menu
      showToast("Cuenta eliminada del acceso rápido", "info");
    }
  }
};

function handleLogout() {
  closeUserMenu();

  // Clear session data
  state.cart = [];
  state.favorites = [];
  updateCartUI();
  updateFavoritesUI();

  if (typeof ApiService !== "undefined") {
    ApiService.logout();
  } else {
    state.currentUser = null;
    saveStateToStorage();
    updateAuthUI();
    showToast("Sesión cerrada", "info");
    // Removed reload to prevent loops if called during switch context
    // window.location.reload(); 
    setTimeout(() => window.location.reload(), 1000); // Delay refresh if needed
  }
}

// function handleSwitchUser() {
//   closeUserMenu();
//   openOverlay("login-overlay");
// }

// ==================== OVERLAYS ====================

function openOverlay(overlayId) {
  const overlay = document.getElementById(overlayId)
  if (overlay) {
    overlay.classList.add("active")
    overlay.setAttribute("aria-hidden", "false")
    document.body.style.overflow = "hidden"

    // Focus first focusable element
    const focusable = overlay.querySelector("button, input, select, textarea")
    if (focusable) focusable.focus()
  }
}

function closeOverlay(overlayId) {
  const overlay = document.getElementById(overlayId)
  if (overlay) {
    overlay.classList.remove("active")
    overlay.setAttribute("aria-hidden", "true")
    document.body.style.overflow = ""
  }
}

// ==================== TOAST ====================

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container")

  const icons = {
    success:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    error:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
  }

  const titles = {
    success: "Éxito",
    error: "Error",
    info: "Información",
  }

  const toast = document.createElement("div")
  toast.className = `toast toast--${type}`
  toast.innerHTML = `
    <div class="toast__icon">${icons[type]}</div>
    <div class="toast__content">
      <p class="toast__title">${titles[type]}</p>
      <p class="toast__message">${message}</p>
    </div>
    <button class="toast__close" onclick="this.parentElement.remove()" aria-label="Cerrar">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `

  container.appendChild(toast)

  // Auto remove
  setTimeout(() => {
    toast.classList.add("removing")
    setTimeout(() => toast.remove(), 300)
  }, 4000)
}

// ==================== SCROLL ANIMATIONS ====================

function initScrollAnimations() {
  // Use Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated")
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el)
  })
}

function triggerScrollAnimations() {
  const elements = document.querySelectorAll(".animate-on-scroll:not(.animated)")
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("animated")
    }
  })
}

// ==================== SCROLL TO TOP ====================

function initScrollToTop() {
  const scrollBtn = document.getElementById("scroll-top")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollBtn.classList.add("visible")
    } else {
      scrollBtn.classList.remove("visible")
    }
  })

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
}

// ==================== KEYBOARD NAVIGATION ====================

function initKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    // Close overlays with Escape
    if (e.key === "Escape") {
      const activeOverlay = document.querySelector(".overlay.active")
      if (activeOverlay) {
        closeOverlay(activeOverlay.id)
      }
    }
  })
}

// ==================== UTILITIES ====================

function formatPrice(price) {
  return "$" + price.toLocaleString("es-CL")
}

function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Make functions globally available
window.showSection = showSection
window.filterByCategory = filterByCategory
window.addToCart = addToCart
window.removeFromCart = removeFromCart
window.updateCartQuantity = updateCartQuantity
window.toggleFavorite = toggleFavorite
window.openQuickView = openQuickView
window.openServiceModal = openServiceModal
window.openBlogPost = openBlogPost
window.openOverlay = openOverlay
window.closeOverlay = closeOverlay
window.switchAuth = switchAuth
window.openCheckout = openCheckout
window.nextCheckoutStep = nextCheckoutStep
window.prevCheckoutStep = prevCheckoutStep
window.processPaymentSimulated = processPaymentSimulated
window.finishCheckout = finishCheckout
window.changePage = changePage
window.clearFilters = clearFilters

/* ==================== CONTACT SECTION ==================== */
function handleContactForm(e) {
  e.preventDefault()

  const name = document.getElementById("contact-name").value.trim()
  const email = document.getElementById("contact-email").value.trim()
  const reason = document.getElementById("contact-reason").value
  const message = document.getElementById("contact-message").value.trim()
  const privacy = document.getElementById("contact-privacy").checked

  // Clear errors
  document.getElementById("contact-name-error").textContent = ""
  document.getElementById("contact-email-error").textContent = ""
  document.getElementById("contact-reason-error").textContent = ""
  document.getElementById("contact-message-error").textContent = ""
  document.getElementById("contact-privacy-error").textContent = ""

  // Remove error classes
  document.getElementById("contact-name").classList.remove("error")
  document.getElementById("contact-email").classList.remove("error")
  document.getElementById("contact-reason").classList.remove("error")
  document.getElementById("contact-message").classList.remove("error")

  // Validate
  let isValid = true

  if (!name) {
    document.getElementById("contact-name-error").textContent = "El nombre es requerido"
    document.getElementById("contact-name").classList.add("error")
    isValid = false
  }

  if (!email) {
    document.getElementById("contact-email-error").textContent = "El correo es requerido"
    document.getElementById("contact-email").classList.add("error")
    isValid = false
  } else if (!isValidEmail(email)) {
    document.getElementById("contact-email-error").textContent = "Ingresa un correo válido"
    document.getElementById("contact-email").classList.add("error")
    isValid = false
  }

  if (!reason) {
    document.getElementById("contact-reason-error").textContent = "Selecciona un motivo de contacto"
    document.getElementById("contact-reason").classList.add("error")
    isValid = false
  }

  if (!message) {
    document.getElementById("contact-message-error").textContent = "El mensaje es requerido"
    document.getElementById("contact-message").classList.add("error")
    isValid = false
  } else if (message.length < 20) {
    document.getElementById("contact-message-error").textContent = "El mensaje debe tener al menos 20 caracteres"
    document.getElementById("contact-message").classList.add("error")
    isValid = false
  }

  if (!privacy) {
    document.getElementById("contact-privacy-error").textContent = "Debes aceptar la política de privacidad"
    isValid = false
  }

  if (!isValid) return

  showToast("Mensaje enviado correctamente (simulado). Te contactaremos pronto.", "success")
  e.target.reset()
}

function showFormError(inputId, message) {
  const input = document.getElementById(inputId)
  const error = document.getElementById(`${inputId}-error`)

  if (input) input.classList.add("error")
  if (error) error.textContent = message
}
// ==================== PRODUCT FORM HANDLING ====================

const CATEGORY_MAP = {};

function getCategoryIdByName(name) {
  if (!name) return null;
  const found = categories.find(c => c.nombre.toLowerCase() === name.toLowerCase());
  return found ? found.id : null;
}

function getCategorySlug(cat) {
  if (!cat) return '';
  if (cat.slug) return cat.slug;
  return cat.nombre
    ? cat.nombre.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    : '';
}

async function handleProductSubmit() {
  const saveBtn = document.getElementById('saveProductBtn');
  const originalText = saveBtn.textContent;

  // Get values
  const nombre = document.getElementById('nombre').value.trim();
  const categoriaName = document.getElementById('categoria').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const imagenUrl = document.getElementById('imagen').value.trim();
  const stock = parseInt(document.getElementById('stock').value);
  const destacado = document.getElementById('destacado').checked;
  const descripcion = document.getElementById('descripcion').value.trim();

  // Basic validation (Bootstrap handles UI validation, this is extra safety)
  if (!nombre || !categoriaName || !precio || !stock) {
    alert("Por favor complete todos los campos obligatorios.");
    return;
  }

  const productData = {
    nombre,
    descripcion,
    precio,
    stock,
    destacado,
    activo: true,
    idCategoria: getCategoryIdByName(categoriaName) || 5, // Default to Accesorios if unknown
    imagenUrl
  };

  try {
    saveBtn.textContent = "Guardando...";
    saveBtn.disabled = true;

    await ApiService.createProduct(productData);

    // Success
    showToast("Producto creado exitosamente", "success");

    // Close modal
    const modalEl = document.getElementById('addProductModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    // Clear form
    document.getElementById('productForm').reset();

    // Reload products
    loadRemoteData();

  } catch (error) {
    console.error(error);
    const alertDiv = document.getElementById('formAlert');
    if (alertDiv) {
      alertDiv.textContent = "Error al guardar: " + error.message;
      alertDiv.classList.remove('d-none', 'alert-success');
      alertDiv.classList.add('alert-danger');
    }
    showToast("Error al crear producto", "error");
  } finally {
    saveBtn.textContent = originalText;
    saveBtn.disabled = false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('saveProductBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', handleProductSubmit);
  }
});



function showAlert(message, type) {
  const alertBox = document.getElementById('formAlert');
  alertBox.className = `alert alert-${type}`;
  alertBox.textContent = message;
  alertBox.classList.remove('d-none');
}

// ==================== API INTEGRATION ====================

/**
 * Intenta cargar datos del backend Spring Boot.
 * Si falla, mantiene los datos locales de ejemplo.
 */
async function loadRemoteData() {
  if (typeof ApiService === 'undefined') return;

  // Optimización: Cargar desde cache local primero si existe para renderizado instantaneo
  const cachedProducts = localStorage.getItem('rp_products_cache');
  if (cachedProducts) {
    try {
      const parsed = JSON.parse(cachedProducts);
      if (Array.isArray(parsed) && parsed.length > 0) {
        console.log('[Cache] Cargando productos desde cache local...');
        products = parsed;
        // Render inicial rápido
        updateUIWithProducts();
      }
    } catch (e) { console.warn('Error leyendo cache de productos', e); }
  }

  try {
    console.log('Intentando conectar con el backend...');

    // 0. Categorías
    const remoteCategories = await ApiService.getCategories();
    if (remoteCategories && Array.isArray(remoteCategories) && remoteCategories.length > 0) {
      categories = remoteCategories.map(c => ({
        id: c.id || c.idCategoria,
        nombre: c.nombre,
        slug: c.slug || getCategorySlug(c),
        imagen: c.imagen_url || c.imagenUrl || c.imagen || getCategoryImage(c.nombre)
      }));
      console.log('Categorías mapeadas:', categories);
    } else {
      categories = [...defaultCategories];
      console.log('Usando categorías por defecto');
    }

    // Forzar renderización de categorías
    console.log('Llamando a initCategories()...');
    if (typeof initCategories === 'function') {
      initCategories();
      console.log('initCategories() ejecutado');
    }

    // 1. Productos
    const remoteProducts = await ApiService.getProducts();
    if (remoteProducts && Array.isArray(remoteProducts) && remoteProducts.length > 0) {
      products = remoteProducts.map(p => ({
        id: p.id,
        nombre: p.nombre,
        categoria: p.nombreCategoria,
        precio: p.precio,
        imagen: p.imagen_url || p.imagenUrl || p.imagen || getFallbackImage(p.nombreCategoria),
        destacado: p.destacado,
        stock: p.stock,
        descripcion: p.descripcion
      }));

      // Guardar en cache para la proxima
      localStorage.setItem('rp_products_cache', JSON.stringify(products));

      console.log(`Productos cargados desde el backend: ${products.length}`);
      updateUIWithProducts();

    } else {
      console.log('El backend no devolvió productos o la lista está vacía. Usando datos locales.');
    }
  } catch (error) {
    console.error('No se pudo conectar con el backend (endpoint /productos). Usando datos locales de respaldo.');
  }
}

// Helper para actualizar UI centralizado
function updateUIWithProducts() {
  if (typeof initCarousel === 'function') initCarousel();

  // Update UI regardless of page
  if (typeof updateCartUI === 'function') updateCartUI();
  if (typeof updateFavoritesUI === 'function') updateFavoritesUI();

  if (document.getElementById('products-grid')) {
    if (state && typeof renderProducts === 'function') {
      state.currentPage = 1;
      renderProducts();
    }
    if (typeof renderCategoryFilters === 'function') renderCategoryFilters();
  }
}


/**
 * Retorna una imagen por defecto basada en la categoría
 * ya que el backend actual no sirve imágenes.
 */
function getCategoryImage(name) {
  const lower = (name || '').toLowerCase();
  const found = defaultCategories.find(c => c.nombre.toLowerCase() === lower);
  if (found) return found.imagen;
  return getFallbackImage(name);
}


function getFallbackImage(category) {
  const lowerCat = (category || '').toLowerCase();

  if (lowerCat.includes('patin') || lowerCat.includes('urbano') || lowerCat.includes('freestyle')) {
    return "assets/img/urban-inline-skates-black-and-teal-professional.jpg";
  } else if (lowerCat.includes('rueda')) {
    return "assets/img/inline-skate-wheels-80mm-set-of-4-teal.jpg";
  } else if (lowerCat.includes('proteccion') || lowerCat.includes('casco') || lowerCat.includes('rodillera')) {
    return "assets/img/skating-protection-gear-set-knee-pads-elbow-pads-w.jpg";
  } else if (lowerCat.includes('mochila') || lowerCat.includes('bolso') || lowerCat.includes('transport')) {
    return "assets/img/skating-backpack-with-skate-holder-teal-black.jpg";
  } else if (lowerCat.includes('ropa') || lowerCat.includes('polera') || lowerCat.includes('hoodie')) {
    return "assets/img/urban-hoodie-black-with-teal-accents-skating-style.jpg";
  } else if (lowerCat.includes('accesorio') || lowerCat.includes('rodamiento') || lowerCat.includes('freno')) {
    return "assets/img/skate-bearings-abec-9-set-of-8.jpg";
  }

  return "assets/img/urban-inline-skates-black-and-teal-professional.jpg";
}






// Exponer funciones usadas desde HTML inline cuando el script no es module
if (typeof window !== 'undefined') {
  window.filterByCategory = filterByCategory;
  window.initFilters = initFilters;
  window.renderPagination = renderPagination;
  window.initCarousel = initCarousel;
  window.renderProducts = renderProducts;
  window.changePage = changePage;
  window.clearFilters = clearFilters;
  window.toggleFavorite = toggleFavorite;
  window.addToCart = addToCart;
  window.openQuickView = openQuickView;
  window.updateCartQuantity = updateCartQuantity;
  window.removeFromCart = removeFromCart;
}

/* ==================== ADDRESS & REGIONS ==================== */

function initAddressFields() {
  const regionSelect = document.getElementById('checkout-region');
  const citySelect = document.getElementById('checkout-city');

  if (!regionSelect || !citySelect || typeof chileData === 'undefined') return;

  regionSelect.innerHTML = '<option value="">Selecciona una región</option>';
  if (chileData && chileData.regiones) {
    chileData.regiones.forEach(r => {
      const option = document.createElement('option');
      option.value = r.nombre;
      option.textContent = r.nombre;
      regionSelect.appendChild(option);
    });
  }

  regionSelect.addEventListener('change', (e) => {
    const regionName = e.target.value;
    citySelect.innerHTML = '<option value="">Selecciona una comuna</option>';
    citySelect.disabled = true;

    if (regionName) {
      const region = chileData.regiones.find(r => r.nombre === regionName);
      if (region) {
        citySelect.disabled = false;
        region.comunas.forEach(c => {
          const option = document.createElement('option');
          option.value = c;
          option.textContent = c;
          citySelect.appendChild(option);
        });
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initAddressFields();
});

/* ==================== PAYMENT LOGIC (REAL) ==================== */

window.processPayment = async function () {
  const paymentMethodInput = document.querySelector('input[name="payment"]:checked');
  if (!paymentMethodInput) {
    showToast('Selecciona un método de pago', 'error');
    return;
  }
  const paymentMethod = paymentMethodInput.value;

  if (paymentMethod === 'card') {
    const numberInput = document.getElementById('card-number');
    const cvcInput = document.getElementById('card-cvv');

    if (numberInput) {
      const number = numberInput.value.replace(/\s/g, '');
      if (number.length < 13 || number.length > 19) {
        showToast('Número de tarjeta inválido', 'error');
        return;
      }
    }
    if (cvcInput) {
      const cvc = cvcInput.value;
      if (!cvc || cvc.length < 3) {
        showToast('CVV inválido', 'error');
        return;
      }
    }
  }

  showToast('Procesando pedido...', 'info');

  const nameInput = document.getElementById('checkout-name');
  const addressCalle = document.getElementById('checkout-address').value;
  const addressRegion = document.getElementById('checkout-region').value;
  const addressCity = document.getElementById('checkout-city').value;
  const addressZip = document.getElementById('checkout-zip').value;

  const orderData = {
    idUsuario: state.currentUser ? state.currentUser.id : null,
    usuario: state.currentUser ? null : {
      email: "guest_" + Date.now() + "@example.com",
      nombre: nameInput ? nameInput.value.split(" ")[0] : "Guest",
      apellido: nameInput ? (nameInput.value.split(" ").slice(1).join(" ") || "Guest") : "User",
      password: "guestPassword123"
    },
    direccion: {
      calle: addressCalle || "Calle Falsa",
      numero: "123",
      ciudad: addressCity || "Santiago",
      region: addressRegion || "RM",
      pais: "Chile",
      codigoPostal: addressZip || "0000000",
      esPrincipal: true
    },
    items: state.cart.map(item => ({
      idProducto: item.id,
      cantidad: item.quantity
    })),
    paymentMethod: paymentMethod
  };

  try {
    if (typeof ApiService === 'undefined') throw new Error("ApiService no disponible");

    const response = await ApiService.createOrder(orderData);

    if (response && response.id) {
      const orderNumEl = document.getElementById('order-number');
      if (orderNumEl) orderNumEl.textContent = response.id;

      state.cart = [];
      saveStateToStorage();
      updateCartUI();
      state.checkoutStep = 4;
      updateCheckoutProgress();
      createConfetti();
      showToast('¡Compra realizada con éxito!', 'success');
    }
  } catch (error) {
    console.error("Order Error:", error);
    showToast("Error al procesar el pedido: " + error.message, "error");
  }
}

// ==================== CUSTOM ALERT ====================

function showCustomAlert({ title, message, confirmText = "Aceptar", cancelText = "Cancelar", showCancel = false }) {
  return new Promise((resolve) => {
    // Remove existing alert if any
    const existing = document.getElementById("custom-alert");
    if (existing) existing.remove();

    const overlay = document.createElement("div");
    overlay.id = "custom-alert";
    overlay.className = "overlay active";
    overlay.style.zIndex = "2000"; // Higher than other overlays

    // Glassmorphism style matching the site
    overlay.innerHTML = `
      <div class="modal-panel" style="max-width: 550px; text-align: center; animation: slideUp 0.3s ease; padding: 2.5rem;">
        <h3 style="margin-bottom: 1rem; color: var(--text-primary);">${title}</h3>
        <p style="margin-bottom: 2rem; color: var(--text-secondary); line-height: 1.5;">${message}</p>
        <div style="display: flex; gap: 1rem; justify-content: center;">
          ${showCancel ? `
          <button id="alert-cancel" class="btn btn--outline" style="flex: 1;">${cancelText}</button>
          ` : ''}
          <button id="alert-confirm" class="btn btn--primary" style="flex: 1;">${confirmText}</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const closeAlert = (result) => {
      overlay.classList.remove("active");
      setTimeout(() => overlay.remove(), 300);
      resolve(result);
    };

    document.getElementById("alert-confirm").addEventListener("click", () => closeAlert(true));

    if (showCancel) {
      document.getElementById("alert-cancel").addEventListener("click", () => closeAlert(false));
    }
  });
}


window.processPayment = window.processPayment;


/* ==================== UNIFIED INITIALIZATION ==================== */

// Master Init function that runs on EVERY page
// Master Init function that runs on EVERY page
async function init() {
  console.log('Initializing Power Rocket (Global)...');

  // 1. Auth State Sync (PRIORITY: Immediate UI update)
  // Run this BEFORE any network requests to ensure "Hola [Name]" is visible instantly
  if (typeof updateAuthUI === 'function') {
    updateAuthUI();
  } else {
    console.warn('updateAuthUI not found');
  }

  // 2. Initial Data Load (Products, Categories)
  // Now we await data, but UI is already correct
  await loadRemoteData();

  // 3. UI Components Sync
  if (typeof updateCartUI === 'function') updateCartUI();
  if (typeof updateFavoritesUI === 'function') updateFavoritesUI();

  // 4. Listeners for UI
  // Note: initThemeToggle() (line 356) already handles the click event logic locally.
  // We do not need to add another listener here, especially since 'toggleTheme' global function is not defined.

  // Initialize Theme from Storage
  const savedTheme = localStorage.getItem('rp_theme'); // Use rp_theme key consistently
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  // Removed auto-switch based on OS preference to prevent "ghosting"

  // Address Fields
  if (typeof initAddressFields === 'function') initAddressFields();

  console.log('Power Rocket Initialized.');
}

// Run Init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}





































