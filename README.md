# Rocket Power - E-commerce SPA

Power Rocket es un proyecto de e-commerce frontend enfocado en patines y equipamiento recreativo, con un fuerte énfasis en la experiencia de usuario, accesibilidad y comunidad. La plataforma busca combatir el sedentarismo promoviendo la actividad física desde un enfoque lúdico y social.

## Estructura del Proyecto
```
Power-Rocket/
│
├── index.html # Página principal (Home)
├── about.html # Sobre nosotros
├── services.html # Servicios
├── products.html # Productos
├── community.html # Comunidad
├── contact.html # Contacto
│
├── assets/
│ ├── css/
│ │ └── styles.css # Estilos globales
│ ├── img/ # Imágenes del proyecto
│ └── js/ # Scripts JavaScript
│
└── README.md
```
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

## Base de datos 
<img width="571" height="803" alt="neondb - public" src="https://github.com/user-attachments/assets/276ed2b0-d371-4b99-a439-2b1e102b381d" />

# Script Creación de tablas
```
-- ================================================
-- POWER ROCKET - ESQUEMA SIMPLE (6 TABLAS)
-- ================================================

-- =============== CATEGORÍAS Y PRODUCTOS =================

CREATE TABLE categorias (
    id_categoria INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL UNIQUE,
    descripcion VARCHAR(255)
);

CREATE TABLE productos (
    id_producto INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion VARCHAR(500),
    precio NUMERIC(12,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    id_categoria INT NOT NULL,
    es_destacado BOOLEAN NOT NULL DEFAULT FALSE,
    activo BOOLEAN NOT NULL DEFAULT TRUE,
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CHECK (precio >= 0),
    CHECK (stock >= 0),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

-- ===================== USUARIOS =====================

CREATE TABLE usuarios (
    id_usuario INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL,
    apellido VARCHAR(80),
    email VARCHAR(150) NOT NULL UNIQUE,
    hash_password VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE direcciones (
    id_direccion INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_usuario INT NOT NULL,
    calle VARCHAR(150) NOT NULL,
    numero VARCHAR(20),
    ciudad VARCHAR(80) NOT NULL,
    region VARCHAR(80),
    pais VARCHAR(80) NOT NULL DEFAULT 'Chile',
    codigo_postal VARCHAR(20),
    es_principal BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
        ON DELETE CASCADE
);
SQL 
-- ===================== ORDENES =====================

CREATE TABLE ordenes (
    id_orden INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_direccion_envio INT,
    id_producto INT NOT NULL,              -- producto asociado a la orden
    cantidad INT NOT NULL DEFAULT 1,       -- cuántas unidades
    precio_unitario NUMERIC(12,2) NOT NULL, -- precio del producto en el momento
    total NUMERIC(12,2) NOT NULL,          -- cantidad * precio_unitario (puedes calcularlo en el backend)
    fecha_orden TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(20) NOT NULL DEFAULT 'pendiente', -- pendiente, pagada, cancelada, etc.
    comentario VARCHAR(255),
    CHECK (cantidad > 0),
    CHECK (precio_unitario >= 0),
    CHECK (total >= 0),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_direccion_envio) REFERENCES direcciones(id_direccion),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

-- ================== MENSAJES DE CONTACTO ==================

CREATE TABLE mensajes_contacto (
    id_contacto INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_usuario INT,
    nombre VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    motivo VARCHAR(50) NOT NULL,
    mensaje VARCHAR(2000) NOT NULL,
    acepta_privacidad BOOLEAN NOT NULL DEFAULT FALSE,
    fecha_envio TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
```
# Script inyección de datos
```
 -- =============== CATEGORÍAS =================

INSERT INTO categorias (nombre, descripcion)
VALUES ('Patines', 'Productos de la categoría Patines.');

INSERT INTO categorias (nombre, descripcion)
VALUES ('Ruedas', 'Productos de la categoría Ruedas.');

INSERT INTO categorias (nombre, descripcion)
VALUES ('Protecciones', 'Productos de la categoría Protecciones.');

INSERT INTO categorias (nombre, descripcion)
VALUES ('Mochilas', 'Productos de la categoría Mochilas y bolsos para patinaje.');

INSERT INTO categorias (nombre, descripcion)
VALUES ('Ropa', 'Productos de la categoría Ropa y accesorios textiles.');

INSERT INTO productos (
  nombre,
  descripcion,
  precio,
  stock,
  id_categoria,
  es_destacado,
  activo
)
VALUES (
  'Patines Urban Flow',
  'Patines urbanos de alta calidad con ruedas de 80mm y rodamientos ABEC-7. Perfectos para desplazamientos y freestyle.',
  129990.00,
  20,
  (SELECT id_categoria FROM categorias WHERE nombre = 'Patines'),
  TRUE,
  TRUE
);

INSERT INTO productos (
  nombre,
  descripcion,
  precio,
  stock,
  id_categoria,
  es_destacado,
  activo
)
VALUES (
  'Patines Freestyle Pro',
  'Patines profesionales para freestyle con bota rígida y sistema de cierre rápido. Ideales para trucos y slalom.',
  159990.00,
  15,
  (SELECT id_categoria FROM categorias WHERE nombre = 'Patines'),
  TRUE,
  TRUE
);

INSERT INTO productos (
  nombre,
  descripcion,
  precio,
  stock,
  id_categoria,
  es_destacado,
  activo
)
VALUES (
  'Patines Fitness Speed',
  'Patines de fitness con ruedas de 90mm para máxima velocidad y comodidad en largas distancias.',
  139990.00,
  10,
  (SELECT id_categoria FROM categorias WHERE nombre = 'Patines'),
  FALSE,
  TRUE
);

INSERT INTO productos (
  nombre,
  descripcion,
  precio,
  stock,
  id_categoria,
  es_destacado,
  activo
)
VALUES (
  'Ruedas Street 80mm',
  'Set de 4 ruedas de 80mm dureza 85A. Perfectas para uso urbano y superficies mixtas.',
  39990.00,
  50,
  (SELECT id_categoria FROM categorias WHERE nombre = 'Ruedas'),
  TRUE,
  TRUE
);

INSERT INTO productos (
  nombre,
  descripcion,
  precio,
  stock,
  id_categoria,
  es_destacado,
  activo
)
VALUES (
  'Kit Protecciones Completo',
  'Kit completo con rodilleras, coderas y muñequeras. Protección certificada para todos los niveles.',
  29990.00,
  40,
  (SELECT id_categoria FROM categorias WHERE nombre = 'Protecciones'),
  TRUE,
  TRUE
);

-- =============== USUARIOS =================

INSERT INTO usuarios (nombre, apellido, email, hash_password)
VALUES ('Juan',  'Pérez',      'juan.perez@example.com',   'hash_falso_1');

INSERT INTO usuarios (nombre, apellido, email, hash_password)
VALUES ('María', 'González',   'maria.gonzalez@example.com','hash_falso_2');

INSERT INTO usuarios (nombre, apellido, email, hash_password)
VALUES ('Carlos','Rojas',      'carlos.rojas@example.com', 'hash_falso_3');

INSERT INTO usuarios (nombre, apellido, email, hash_password)
VALUES ('Ana',   'Fuentes',    'ana.fuentes@example.com',  'hash_falso_4');

INSERT INTO usuarios (nombre, apellido, email, hash_password)
VALUES ('Sofía', 'Martínez',   'sofia.martinez@example.com','hash_falso_5');


INSERT INTO direcciones (
  id_usuario,
  calle,
  numero,
  ciudad,
  region,
  pais,
  codigo_postal,
  es_principal
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'juan.perez@example.com'),
  'Av. Siempre Viva',
  '1234',
  'Santiago',
  'Región Metropolitana',
  'Chile',
  '7500000',
  TRUE
);

INSERT INTO direcciones (
  id_usuario,
  calle,
  numero,
  ciudad,
  region,
  pais,
  codigo_postal,
  es_principal
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'maria.gonzalez@example.com'),
  'Calle Los Patines',
  '456',
  'Valparaíso',
  'Valparaíso',
  'Chile',
  '2340000',
  TRUE
);

INSERT INTO direcciones (
  id_usuario,
  calle,
  numero,
  ciudad,
  region,
  pais,
  codigo_postal,
  es_principal
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'carlos.rojas@example.com'),
  'Pasaje Rocket',
  '789',
  'Concepción',
  'Biobío',
  'Chile',
  '4030000',
  TRUE
);

INSERT INTO direcciones (
  id_usuario,
  calle,
  numero,
  ciudad,
  region,
  pais,
  codigo_postal,
  es_principal
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'ana.fuentes@example.com'),
  'Av. Deporte',
  '101',
  'La Serena',
  'Coquimbo',
  'Chile',
  '1700000',
  TRUE
);

INSERT INTO direcciones (
  id_usuario,
  calle,
  numero,
  ciudad,
  region,
  pais,
  codigo_postal,
  es_principal
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'sofia.martinez@example.com'),
  'Calle Rodar',
  '202',
  'Temuco',
  'Araucanía',
  'Chile',
  '4800000',
  TRUE
);

-- =============== ORDENES =================

-- 1) Juan compra Patines Urban Flow (1 unidad)
INSERT INTO ordenes (
  id_usuario,
  id_direccion_envio,
  id_producto,
  cantidad,
  precio_unitario,
  total,
  estado,
  comentario
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'juan.perez@example.com'),
  (SELECT d.id_direccion
     FROM direcciones d
     JOIN usuarios u ON u.id_usuario = d.id_usuario
    WHERE u.email = 'juan.perez@example.com'
      AND d.es_principal = TRUE
    LIMIT 1),
  (SELECT id_producto FROM productos WHERE nombre = 'Patines Urban Flow'),
  1,
  129990.00,
  129990.00,
  'pagada',
  'Compra inicial de patines urbanos.'
);

-- 2) María compra Patines Freestyle Pro
INSERT INTO ordenes (
  id_usuario,
  id_direccion_envio,
  id_producto,
  cantidad,
  precio_unitario,
  total,
  estado,
  comentario
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'maria.gonzalez@example.com'),
  (SELECT d.id_direccion
     FROM direcciones d
     JOIN usuarios u ON u.id_usuario = d.id_usuario
    WHERE u.email = 'maria.gonzalez@example.com'
      AND d.es_principal = TRUE
    LIMIT 1),
  (SELECT id_producto FROM productos WHERE nombre = 'Patines Freestyle Pro'),
  1,
  159990.00,
  159990.00,
  'pagada',
  'Regalo de cumpleaños.'
);

-- 3) Carlos compra 2 packs de Ruedas Street 80mm
INSERT INTO ordenes (
  id_usuario,
  id_direccion_envio,
  id_producto,
  cantidad,
  precio_unitario,
  total,
  estado,
  comentario
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'carlos.rojas@example.com'),
  (SELECT d.id_direccion
     FROM direcciones d
     JOIN usuarios u ON u.id_usuario = d.id_usuario
    WHERE u.email = 'carlos.rojas@example.com'
      AND d.es_principal = TRUE
    LIMIT 1),
  (SELECT id_producto FROM productos WHERE nombre = 'Ruedas Street 80mm'),
  2,
  39990.00,
  79980.00,
  'pagada',
  'Reemplazo de ruedas desgastadas.'
);

-- 4) Ana compra un Kit Protecciones Completo
INSERT INTO ordenes (
  id_usuario,
  id_direccion_envio,
  id_producto,
  cantidad,
  precio_unitario,
  total,
  estado,
  comentario
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'ana.fuentes@example.com'),
  (SELECT d.id_direccion
     FROM direcciones d
     JOIN usuarios u ON u.id_usuario = d.id_usuario
    WHERE u.email = 'ana.fuentes@example.com'
      AND d.es_principal = TRUE
    LIMIT 1),
  (SELECT id_producto FROM productos WHERE nombre = 'Kit Protecciones Completo'),
  1,
  29990.00,
  29990.00,
  'pagada',
  'Protecciones para uso diario.'
);

-- 5) Sofía compra Patines Fitness Speed
INSERT INTO ordenes (
  id_usuario,
  id_direccion_envio,
  id_producto,
  cantidad,
  precio_unitario,
  total,
  estado,
  comentario
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'sofia.martinez@example.com'),
  (SELECT d.id_direccion
     FROM direcciones d
     JOIN usuarios u ON u.id_usuario = d.id_usuario
    WHERE u.email = 'sofia.martinez@example.com'
      AND d.es_principal = TRUE
    LIMIT 1),
  (SELECT id_producto FROM productos WHERE nombre = 'Patines Fitness Speed'),
  1,
  139990.00,
  139990.00,
  'pagada',
  'Inicio de entrenamiento fitness.'
);

-- =============== MENSAJES_CONTACTOS =================

-- 1) Mensaje de Juan (usuario registrado)
INSERT INTO mensajes_contacto (
  id_usuario,
  nombre,
  email,
  motivo,
  mensaje,
  acepta_privacidad
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'juan.perez@example.com'),
  'Juan Pérez',
  'juan.perez@example.com',
  'productos',
  'Hola, quisiera saber si los Patines Urban Flow están disponibles en talla 42.',
  TRUE
);

-- 2) Mensaje de María (usuario registrada)
INSERT INTO mensajes_contacto (
  id_usuario,
  nombre,
  email,
  motivo,
  mensaje,
  acepta_privacidad
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'maria.gonzalez@example.com'),
  'María González',
  'maria.gonzalez@example.com',
  'servicios',
  '¿Realizan mantenimiento de patines en Valparaíso los fines de semana?',
  TRUE
);

-- 3) Mensaje de Luis (sin cuenta asociada)
INSERT INTO mensajes_contacto (
  id_usuario,
  nombre,
  email,
  motivo,
  mensaje,
  acepta_privacidad
)
VALUES (
  NULL,
  'Luis Torres',
  'luis.torres@example.com',
  'consulta',
  'Estoy empezando a patinar, ¿qué modelo recomiendan para principiantes?',
  TRUE
);

-- 4) Mensaje de Carlos (usuario registrado)
INSERT INTO mensajes_contacto (
  id_usuario,
  nombre,
  email,
  motivo,
  mensaje,
  acepta_privacidad
)
VALUES (
  (SELECT id_usuario FROM usuarios WHERE email = 'carlos.rojas@example.com'),
  'Carlos Rojas',
  'carlos.rojas@example.com',
  'sugerencia',
  'Sería genial que agregaran más colores al modelo Freestyle Pro.',
  TRUE
);

-- 5) Mensaje de Paula (sin cuenta y sin aceptar privacidad)
INSERT INTO mensajes_contacto (
  id_usuario,
  nombre,
  email,
  motivo,
  mensaje,
  acepta_privacidad
)
VALUES (
  NULL,
  'Paula Díaz',
  'paula.diaz@example.com',
  'otro',
  '¿Tienen algún convenio para academias de patinaje?',
  FALSE
);
```




