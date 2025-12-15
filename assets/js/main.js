/**
 * ============================================
 * ROCKET POWER - MAIN JAVASCRIPT
 * E-commerce SPA for skating & recreational equipment
 * ============================================
 */

// ==================== DATA ====================

const products = [
  {
    id: 1,
    nombre: "Patines Urban Flow",
    categoria: "Patines",
    precio: 89990,
    imagen: "assets/img/urban-inline-skates-black-and-teal-professional.jpg",
    destacado: true,
    stock: 15,
    descripcion:
      "Patines urbanos de alta calidad con ruedas de 80mm y rodamientos ABEC-7. Perfectos para desplazamientos y freestyle.",
  },
  {
    id: 2,
    nombre: "Patines Freestyle Pro",
    categoria: "Patines",
    precio: 129990,
    imagen: "assets/img/freestyle-roller-skates-white-professional.jpg",
    destacado: true,
    stock: 8,
    descripcion:
      "Patines profesionales para freestyle con bota rígida y sistema de cierre rápido. Ideales para trucos y slalom.",
  },
  {
    id: 3,
    nombre: "Patines Fitness Speed",
    categoria: "Patines",
    precio: 109990,
    imagen: "assets/img/fitness-inline-skates-blue-speed.jpg",
    destacado: false,
    stock: 20,
    descripcion: "Patines de fitness con ruedas de 90mm para máxima velocidad y comodidad en largas distancias.",
  },
  {
    id: 4,
    nombre: "Ruedas Street 80mm",
    categoria: "Ruedas",
    precio: 24990,
    imagen: "assets/img/inline-skate-wheels-80mm-set-of-4-teal.jpg",
    destacado: true,
    stock: 50,
    descripcion: "Set de 4 ruedas de 80mm dureza 85A. Perfectas para uso urbano y superficies mixtas.",
  },
  {
    id: 5,
    nombre: "Ruedas Speed 100mm",
    categoria: "Ruedas",
    precio: 34990,
    imagen: "assets/img/inline-skate-wheels-100mm-professional-white.jpg",
    destacado: false,
    stock: 30,
    descripcion: "Set de 4 ruedas de 100mm dureza 88A. Máxima velocidad para patinadores avanzados.",
  },
  {
    id: 6,
    nombre: "Kit Protecciones Completo",
    categoria: "Protecciones",
    precio: 39990,
    imagen: "assets/img/skating-protection-gear-set-knee-pads-elbow-pads-w.jpg",
    destacado: true,
    stock: 25,
    descripcion: "Kit completo con rodilleras, coderas y muñequeras. Protección certificada para todos los niveles.",
  },
  {
    id: 7,
    nombre: "Casco Urban Style",
    categoria: "Protecciones",
    precio: 44990,
    imagen: "assets/img/skating-helmet-urban-style-matte-black.jpg",
    destacado: true,
    stock: 18,
    descripcion: "Casco certificado con diseño urbano. Ventilación optimizada y ajuste personalizable.",
  },
  {
    id: 8,
    nombre: "Mochila Skate Pack",
    categoria: "Mochilas",
    precio: 54990,
    imagen: "assets/img/skating-backpack-with-skate-holder-teal-black.jpg",
    destacado: true,
    stock: 12,
    descripcion:
      "Mochila diseñada para patinadores con porta-patines, compartimento para laptop y múltiples bolsillos.",
  },
  {
    id: 9,
    nombre: "Bolso Porta Patines",
    categoria: "Mochilas",
    precio: 29990,
    imagen: "assets/img/skate-bag-carrier-black-teal.jpg",
    destacado: false,
    stock: 22,
    descripcion: "Bolso especializado para transportar patines con ventilación y correa ajustable.",
  },
  {
    id: 10,
    nombre: "Polera Rocket Team",
    categoria: "Ropa",
    precio: 19990,
    imagen: "assets/img/sports-tshirt-teal-with-skating-logo.jpg",
    destacado: false,
    stock: 40,
    descripcion: "Polera técnica con tejido transpirable y diseño exclusivo Rocket Power.",
  },
  {
    id: 11,
    nombre: "Hoodie Urban Skate",
    categoria: "Ropa",
    precio: 39990,
    imagen: "assets/img/urban-hoodie-black-with-teal-accents-skating-style.jpg",
    destacado: true,
    stock: 15,
    descripcion: "Hoodie premium con capucha ajustable y bolsillo canguro. Estilo urbano para patinadores.",
  },
  {
    id: 12,
    nombre: "Rodamientos ABEC-9",
    categoria: "Repuestos",
    precio: 19990,
    imagen: "assets/img/skate-bearings-abec-9-set-of-8.jpg",
    destacado: false,
    stock: 60,
    descripcion: "Set de 8 rodamientos ABEC-9 de alta precisión. Máxima velocidad y durabilidad.",
  },
  {
    id: 13,
    nombre: "Frenos de Repuesto",
    categoria: "Repuestos",
    precio: 9990,
    imagen: "assets/img/inline-skate-brake-pad-replacement-black.jpg",
    destacado: false,
    stock: 100,
    descripcion: "Par de frenos de repuesto universales. Compatible con la mayoría de patines inline.",
  },
  {
    id: 14,
    nombre: "Patines Niños Ajustables",
    categoria: "Patines",
    precio: 59990,
    imagen: "assets/img/kids-adjustable-inline-skates-colorful-blue-teal.jpg",
    destacado: true,
    stock: 25,
    descripcion: "Patines ajustables en 4 tallas para niños. Sistema de cierre seguro y ruedas suaves.",
  },
  {
    id: 15,
    nombre: "Giftcard $50.000",
    categoria: "Giftcards",
    precio: 50000,
    imagen: "assets/img/gift-card-modern-design-teal-gradient-skating-them.jpg",
    destacado: false,
    stock: 999,
    descripcion: "Tarjeta de regalo Rocket Power por $50.000. Válida para cualquier producto de la tienda.",
  },
  {
    id: 16,
    nombre: "Giftcard $100.000",
    categoria: "Giftcards",
    precio: 100000,
    imagen: "assets/img/gift-card-modern-design-teal-gradient-skating-them.jpg",
    destacado: false,
    stock: 999,
    descripcion: "Tarjeta de regalo Rocket Power por $100.000. El regalo perfecto para amantes del patinaje.",
  },
]

const categories = [
  { id: 1, nombre: "Patines", imagen: "assets/img/fitness-inline-skates-blue-speed.jpg?height=200&width=200" },
  { id: 2, nombre: "Ruedas", imagen: "assets/img/inline-skate-wheels-80mm-set-of-4-teal.jpg?height=200&width=200" },
  { id: 3, nombre: "Protecciones", imagen: "assets/img/skating-protection-gear-set-knee-pads-elbow-pads-w.jpg?height=200&width=200" },
  { id: 4, nombre: "Mochilas", imagen: "assets/img/skating-backpack-with-skate-holder-teal-black.jpg?height=200&width=200" },
  { id: 5, nombre: "Ropa", imagen: "assets/img/sports-tshirt-teal-with-skating-logo.jpg?height=200&width=200" },
  { id: 6, nombre: "Repuestos", imagen: "assets/img/inline-skate-brake-pad-replacement-black.jpg?height=200&width=200" },
]

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
      "El patinaje es una actividad increíble que combina ejercicio, diversión y libertad. Si estás comenzando, aquí te dejamos 5 tips esenciales:\n\n1. **Usa siempre protección**: Casco, rodilleras, coderas y muñequeras son indispensables.\n\n2. **Aprende a caer**: Practica caer hacia adelante sobre tus protecciones, nunca hacia atrás.\n\n3. **Domina la posición básica**: Rodillas flexionadas, peso hacia adelante, brazos al frente.\n\n4. **Practica el frenado**: Antes de ganar velocidad, asegúrate de saber frenar.\n\n5. **Sé paciente**: El progreso viene con la práctica constante. ¡Disfruta el proceso!",
  },
  {
    id: 2,
    title: "Los Mejores Lugares para Patinar en Santiago",
    excerpt: "Una guía completa de los spots más populares y seguros para disfrutar del patinaje en la capital.",
    image: "assets/img/spotter_rogerferrero.jpg",
    content:
      "Santiago ofrece múltiples opciones para los amantes del patinaje. Aquí nuestros favoritos:\n\n**Parque Bicentenario**: Amplias ciclovías y superficies lisas perfectas para principiantes.\n\n**Parque Forestal**: Ambiente bohemio y rutas escénicas junto al río Mapocho.\n\n**Costanera Center**: Explanadas amplias ideales para practicar trucos.\n\n**Parque O'Higgins**: Circuitos largos para sesiones de fitness.\n\n**Skatepark de Providencia**: Para los más avanzados que buscan rampas y obstáculos.\n\nRecuerda siempre respetar a los peatones y usar protección.",
  },
  {
    id: 3,
    title: "Cómo Mantener tus Patines en Óptimas Condiciones",
    excerpt: "Guía práctica de mantenimiento para alargar la vida útil de tu equipo y mejorar tu rendimiento.",
    image: "assets/img/mantener.jpg",
    content:
      "Un buen mantenimiento puede duplicar la vida útil de tus patines. Sigue estos pasos:\n\n**Limpieza semanal**:\n- Limpia las ruedas con un paño húmedo\n- Revisa que no haya piedras o residuos\n\n**Mantenimiento mensual**:\n- Rota las ruedas para un desgaste uniforme\n- Limpia los rodamientos con solvente especial\n- Lubrica con aceite para rodamientos\n\n**Revisión trimestral**:\n- Verifica el estado de los frenos\n- Revisa tornillos y ejes\n- Inspecciona la bota por desgaste\n\n¿No tienes tiempo? ¡Trae tus patines a nuestro servicio de mantenimiento!",
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
})

// ==================== LOCAL STORAGE ====================

function loadStateFromStorage() {
  try {
    const cart = localStorage.getItem("rp_cart")
    const favorites = localStorage.getItem("rp_favorites")
    const users = localStorage.getItem("rp_users")
    const currentUser = localStorage.getItem("rp_currentUser")
    const theme = localStorage.getItem("rp_theme")

    if (cart) state.cart = JSON.parse(cart)
    if (favorites) state.favorites = JSON.parse(favorites)
    if (users) state.users = JSON.parse(users)
    if (currentUser) state.currentUser = JSON.parse(currentUser)
    if (theme) document.documentElement.setAttribute("data-theme", theme)
  } catch (e) {
    console.error("Error loading state from storage:", e)
  }
}

function saveStateToStorage() {
  try {
    localStorage.setItem("rp_cart", JSON.stringify(state.cart))
    localStorage.setItem("rp_favorites", JSON.stringify(state.favorites))
    localStorage.setItem("rp_users", JSON.stringify(state.users))
    if (state.currentUser) {
      localStorage.setItem("rp_currentUser", JSON.stringify(state.currentUser))
    } else {
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
      showUserMenu()
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

// ==================== CATEGORIES ====================

function initCategories() {
  const grid = document.getElementById("categories-grid")
  if (!grid) return


  grid.innerHTML = categories
    .map(
      (category) => `
    <div class="category-card animate-on-scroll" onclick="filterByCategory('${category.nombre}'); showSection('products');">
      <img class="category-card__image" src="${category.imagen}" alt="${category.nombre}" loading="lazy">
      <div class="category-card__overlay">
        <span class="category-card__name">${category.nombre}</span>
      </div>
    </div>
  `,
    )
    .join("")
}

// ==================== PRODUCTS ====================

function initProducts() {
  if (!document.getElementById("products-grid")) return
  renderCategoryFilters()

  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');

  if (categoryParam) {
    filterByCategory(categoryParam);
  } else {
    renderProducts()
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
  const filtered = getFilteredProducts()

  // Pagination
  const start = (state.currentPage - 1) * state.productsPerPage
  const end = start + state.productsPerPage
  const paginated = filtered.slice(start, end)

  // Update results count
  document.getElementById("results-count").textContent = `${filtered.length} productos`

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

  return `
    <div class="product-card ${isCarousel ? "" : "animate-on-scroll"}">
      <div class="product-card__image">
        <img src="${product.imagen}" alt="${product.nombre}" loading="lazy">
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
      <p class="quickview__price">${formatPrice(product.precio)}</p>
      <p class="quickview__desc">${product.descripcion}</p>
      <div class="quickview__actions">
        <button class="btn btn--primary" onclick="addToCart(${product.id}); closeOverlay('quickview-overlay');">
          Agregar al carrito
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
  }
}

// ==================== CHECKOUT ====================

function openCheckout() {
  if (state.cart.length === 0) {
    showToast("Tu carrito está vacío", "error")
    return
  }

  state.checkoutStep = 1
  renderCheckoutItems()
  updateCheckoutProgress()
  openOverlay("checkout-overlay")
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

function nextCheckoutStep(step) {
  // Validate current step
  if (state.checkoutStep === 2) {
    const form = document.getElementById("checkout-form")
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
  }

  state.checkoutStep = step
  updateCheckoutProgress()
}

function prevCheckoutStep(step) {
  state.checkoutStep = step
  updateCheckoutProgress()
}

function processPaymentSimulated() {
  // Simulate payment processing
  showToast("Procesando pago...", "info")

  setTimeout(() => {
    // Generate order number
    const orderNumber = Math.floor(100000 + Math.random() * 900000)
    document.getElementById("order-number").textContent = orderNumber

    // Save order to history (if user is logged in)
    if (state.currentUser) {
      const order = {
        id: orderNumber,
        date: new Date().toISOString(),
        items: [...state.cart],
        total: state.cart.reduce((sum, item) => {
          const product = products.find((p) => p.id === item.id)
          return sum + (product ? product.precio * item.quantity : 0)
        }, 0),
      }

      if (!state.currentUser.orders) {
        state.currentUser.orders = []
      }
      state.currentUser.orders.push(order)
      saveStateToStorage()
    }

    // Clear cart
    state.cart = []
    saveStateToStorage()
    updateCartUI()

    // Show success step
    state.checkoutStep = 4
    updateCheckoutProgress()

    // Trigger confetti
    createConfetti()

    showToast("¡Compra realizada con éxito!", "success")
  }, 2000)
}

function finishCheckout() {
  closeOverlay("checkout-overlay")
  showSection("home")
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

function handleLogin(e) {
  e.preventDefault()

  const email = document.getElementById("login-email").value.trim()
  const password = document.getElementById("login-password").value

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

  // Check credentials
  const user = state.users.find((u) => u.email === email && u.password === password)

  if (user) {
    state.currentUser = user
    saveStateToStorage()
    updateAuthUI()
    closeOverlay("login-overlay")
    showToast(`¡Bienvenido, ${user.nombre}!`, "success")
    e.target.reset()
  } else {
    showToast("Credenciales incorrectas", "error")
  }
}

function handleRegister(e) {
  e.preventDefault()

  const nombre = document.getElementById("register-name").value.trim()
  const apellido = document.getElementById("register-lastname").value.trim()
  const birthdate = document.getElementById("register-birthdate").value.trim()
  const email = document.getElementById("register-email").value.trim()
  const password = document.getElementById("register-password").value
  const confirm = document.getElementById("register-confirm").value

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

  if (!birthdate) {
    showFormError("register-birthdate", "La fecha de nacimiento es requerida")
    isValid = false
  } else if (!isValidDate(birthdate)) {
    showFormError("register-birthdate", "Formato inválido (DD/MM/AAAA)")
    isValid = false
  }

  if (!email) {
    showFormError("register-email", "El correo es requerido")
    isValid = false
  } else if (!isValidEmail(email)) {
    showFormError("register-email", "Ingresa un correo válido")
    isValid = false
  } else if (state.users.some((u) => u.email === email)) {
    showFormError("register-email", "Este correo ya está registrado")
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

  // Create user
  const newUser = {
    id: Date.now(),
    nombre,
    apellido,
    birthdate,
    email,
    password,
    orders: [],
  }

  state.users.push(newUser)
  saveStateToStorage()

  showToast("¡Registro exitoso! Ya puedes iniciar sesión.", "success")
  e.target.reset()
  switchAuth("login")
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
  return /^\d{2}\/\d{2}\/\d{4}$/.test(date)
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
  const userName = document.getElementById("user-name")

  if (state.currentUser) {
    userName.textContent = `Hola, ${state.currentUser.nombre}`
  } else {
    userName.textContent = ""
  }
}

function showUserMenu() {
  // Simple logout for now
  if (confirm("¿Deseas cerrar sesión?")) {
    state.currentUser = null
    saveStateToStorage()
    updateAuthUI()
    showToast("Sesión cerrada", "info")
  }
}

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