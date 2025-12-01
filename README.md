# Rocket Power - E-commerce SPA

E-commerce de patines y equipamiento recreativo con comunidad y blog orientados a promover la actividad física lúdica.

## Estructura del Proyecto

\`\`\`
SA-HA1/
├─ assets/
│  ├─ img/          (imágenes del proyecto)
│  ├─ css/
│  │  └─ styles.css (estilos organizados por secciones)
│  └─ js/
│     └─ main.js    (lógica modular de la aplicación)
├─ index.html       (estructura HTML semántica)
└─ README.md        (este archivo)
\`\`\`

## Navegación SPA

La aplicación funciona como una Single Page Application (SPA) simple:

- **Sin recarga de página**: Toda la navegación se maneja con JavaScript
- **Función `showSection(sectionId)`**: Muestra/oculta secciones según el ID
- **Estado activo**: Los enlaces del menú se actualizan automáticamente
- **Scroll suave**: Al cambiar de sección, se hace scroll al inicio

### Secciones disponibles:
- `home` - Página de inicio con hero, carrusel y categorías
- `about` - Sobre nosotros
- `products` - Catálogo de productos con filtros
- `services` - Servicios de mantenimiento, custom y clases
- `community` - Blog y testimonios

## Funcionalidades Principales

### Carrusel de Productos Destacados
- Muestra productos marcados como `destacado: true`
- Navegación con flechas y puntos indicadores
- Auto-play con pausa al hover
- Responsive: 1-4 productos visibles según viewport

### Sistema de Carrito
- `addToCart(productId)` - Agregar producto
- `removeFromCart(productId)` - Eliminar producto
- `updateCartQuantity(productId, change)` - Modificar cantidad
- Persistencia en localStorage
- Contador en el icono del header

### Favoritos
- `toggleFavorite(productId)` - Agregar/quitar de favoritos
- Lista accesible desde el panel lateral
- Persistencia en localStorage

### Pasarela de Pago Simulada
- Proceso de 4 pasos: Resumen → Datos → Pago → Confirmación
- Progress bar visual
- Validación de formularios
- Animación de confetti al completar
- Generación de número de pedido

### Autenticación
- Login con validación
- Registro con validación completa
- Persistencia de usuarios en localStorage
- Historial de pedidos por usuario

### Filtros de Productos
- Por categoría (checkboxes)
- Por rango de precio
- Búsqueda por texto (con debounce)
- Ordenamiento (precio, nombre)
- Paginación simulada

### Componentes UI
- **Toast**: Notificaciones con tipos (success, error, info)
- **Modal genérico**: Para servicios, blog, confirmaciones
- **Quick View**: Vista rápida de productos
- **Dark Mode**: Toggle de tema claro/oscuro

## Tecnologías Utilizadas

- **HTML5** semántico
- **CSS3** con variables CSS, Flexbox y Grid
- **JavaScript ES6** vanilla
- **localStorage** para persistencia

## Características Adicionales

- **Skeleton loaders** para carga de contenido
- **Animaciones en scroll** con Intersection Observer
- **Debounce** en búsqueda para optimización
- **Event delegation** para mejor rendimiento
- **Accesibilidad**: aria-labels, roles, navegación por teclado
- **Responsive**: Mobile-first con breakpoints en 480px, 768px, 1024px
- **Prefers-reduced-motion**: Respeta preferencias de accesibilidad

## Paleta de Colores

- Primary: `#128f8b`
- Secondary: `#4ea19d`, `#75b4b0`, `#98c6c3`, `#bbd9d7`, `#ddeceb`
- Text: `#0f172a`
- Background: `#f8fafc`

## Tipografía

TikTok Sans con fallback a system-ui para máxima compatibilidad.
