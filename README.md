# Elite Cars 🚗
![Elite Cars Logo](https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/29f384e9-cd60-4a82-960b-8e2f6a4092a5)

**Sitio web de venta de coches de alta gama desarrollado con HTML, CSS, JavaScript y Bootstrap 5.** Elite Cars permite a los usuarios explorar un catálogo de vehículos exclusivos, gestionar su cuenta de usuario, añadir productos al carrito y consultar su historial de pedidos, todo en una interfaz responsive con componentes web reutilizables.

***
## Descripción
Elite Cars es una tienda online de automóviles de lujo y alto rendimiento. El catálogo incluye vehículos como el Lamborghini Urus Mansory, Porsche 911 GT3 RS, Mercedes-AMG Clase A, Mercedes G Brabus, MINI John Cooper Works y Volkswagen Golf GTI Clubsport. El proyecto está estructurado como una SPA (Single Page Application) estática con múltiples páginas HTML y componentes web personalizados para la cabecera y el pie de página.

***
## Características principales
- 🏎️ **Catálogo de vehículos**: listado de coches de alta gama con imágenes, nombre y precio.
- 🛒 **Carrito de compra**: los usuarios pueden añadir vehículos al carrito antes de finalizar el pedido.
- 👤 **Gestión de usuario**: formulario de inicio de sesión con campos de usuario y contraseña y enlace a registro de nueva cuenta.
- 📋 **Panel de usuario registrado**: muestra los datos personales del cliente (nombre, apellidos, email, teléfono) y el historial de pedidos con ID, nombre del vehículo, cantidad, extras y precio, todo editable inline.
- 🧩 **Componentes web reutilizables**: la cabecera (`<mi-cabecera>`) y el pie de página (`<mi-pie>`) están implementados como Custom Elements de la Web Components API, lo que permite incluirlos en cualquier página con una sola etiqueta HTML.
- 📱 **Diseño responsive**: la navbar colapsa en dispositivos móviles gracias a Bootstrap 5 (breakpoint `md`).
- 🔗 **Redes sociales**: el footer incluye enlaces a Twitter, Instagram y Facebook con iconos de Font Awesome 5.

***
## Capturas de pantalla
### Catálogo de vehículos
| Vehículo | Imagen |
|----------|--------|
| Lamborghini Urus Mansory | ![Lamborghini Urus](https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/c2f91522-affd-4f4a-b4d2-65fb891d7039) |
| Porsche 911 GT3 RS | ![Porsche GT3 RS](https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/c3e5d542-89f2-447a-bc4c-2881e1861f7a) |
| Mercedes G Brabus | ![Mercedes G Brabus](https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/c4d894da-d4b9-4ba3-88b9-d54b68a47785) |
| Mercedes-AMG Clase A | ![Mercedes AMG](https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/51704583-ee7f-4e46-b4a0-33f3a8749c9e) |
| MINI John Cooper Works | ![MINI JCW](https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/7a6400e5-fb21-46a1-9eb4-46ebdb4cf105) |
| Volkswagen Golf GTI Clubsport | ![VW Golf GTI](https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/4951723d-0c47-463d-b63c-dc9f8577daa7) |

***
## Estructura del proyecto
```
EliteCars/
├── FicherosHTML/
│   ├── InicioEliteCars.html          # Página de inicio
│   ├── EmpresaEliteCars.html         # Página "Sobre nosotros"
│   ├── ContactoEliteCars.html        # Página de contacto
│   ├── ProductosEliteCars.html       # Catálogo de vehículos
│   ├── CarritoEliteCars.html         # Carrito de compra
│   ├── UsuarioEliteCars.html         # Login / Registro
│   ├── UsuarioIniciadoEliteCars.html # Panel del usuario autenticado
│   └── RegistrarUsuarioEliteCars.html# Formulario de registro
│
├── FicherosJS/
│   ├── Cabecera_EliteCars.js         # Custom Element <mi-cabecera>
│   └── PiePag_EliteCars.js           # Custom Element <mi-pie>
│
├── FicherosCSS/
│   └── InicioEliteCars.css           # Estilos personalizados globales
│
└── Imagenes/
    ├── LogoEliteCars.jpeg
    ├── LamborghiniUrusMansory.jpg
    ├── PorscheGT3RS.jpg
    ├── MercedesGBrabus.jpg
    ├── MercedesClaseAAMG.jpg
    ├── MiniJohnCooperWorks.jpg
    └── VWGolfGTIClubsport.jpg
```

***
## Componentes web personalizados
### `<mi-cabecera>` — `Cabecera_EliteCars.js`
Custom Element que inyecta la barra de navegación fija en todas las páginas. Incluye:
- Marca **EliteCars** con enlace a inicio.
- Menú de navegación con los enlaces: Inicio, Empresa, Contacto, Productos.
- Iconos de Usuario y Carrito en el lado derecho.
- Botón hamburguesa para móvil (colapsa al breakpoint `md` de Bootstrap).
### `<mi-pie>` — `PiePag_EliteCars.js`
Custom Element que inyecta el pie de página fijo. Incluye:
- Copyright © 2024 EliteCars.
- Iconos de redes sociales (Twitter, Instagram, Facebook) con Font Awesome 5.

***
## Páginas principales
| Página | Archivo | Descripción |
|--------|---------|-------------|
| Inicio | `InicioEliteCars.html` | Portada del sitio |
| Empresa | `EmpresaEliteCars.html` | Información sobre la empresa |
| Contacto | `ContactoEliteCars.html` | Formulario de contacto |
| Productos | `ProductosEliteCars.html` | Catálogo de vehículos |
| Carrito | `CarritoEliteCars.html` | Cesta de la compra |
| Usuario (login) | `UsuarioEliteCars.html` | Formulario de inicio de sesión y enlace a registro |
| Panel de usuario | `UsuarioIniciadoEliteCars.html` | Datos del cliente y pedidos realizados |

***
## Tecnologías utilizadas
- **HTML5** — estructura semántica de todas las páginas.
- **CSS3** — estilos personalizados (`InicioEliteCars.css`) complementarios a Bootstrap.
- **JavaScript (ES6+)** — lógica del cliente y definición de Custom Elements.
- **Bootstrap 5.3.2** — grid responsive, navbar, botones y componentes UI.
- **Web Components API** — Custom Elements para `<mi-cabecera>` y `<mi-pie>`, lo que evita duplicar el HTML de la cabecera y el footer en cada página.
- **Font Awesome 5.15.1** — iconos vectoriales para redes sociales y navegación.

***
## Cómo ejecutar el proyecto
Al tratarse de un proyecto web estático no se necesita ningún servidor ni entorno especial:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/elite-cars.git
   ```
2. Abre el fichero `FicherosHTML/InicioEliteCars.html` directamente en tu navegador, **o bien** sirve la carpeta raíz con cualquier servidor estático:
   ```bash
   # Con Python (incluido en macOS/Linux)
   python -m http.server 8080
   # Con Node.js (npx)
   npx serve .
   ```
3. Accede a `http://localhost:8080/FicherosHTML/InicioEliteCars.html`.

***
## Posibles mejoras futuras
- Añadir un **backend** (Node.js + Express o similar) con base de datos para gestionar usuarios, pedidos y sesiones de forma real.
- Implementar **autenticación real** con JWT o sesiones de servidor en lugar del flujo estático actual.
- Migrar a un **framework moderno** (React, Vue o Svelte) para aprovechar el estado reactivo y el routing del lado del cliente.
- Añadir un **buscador y filtros** en el catálogo de vehículos por precio, marca o tipo.
- Integrar una **pasarela de pago** (Stripe, PayPal) para completar el flujo de compra.

***
## Autor
Desarrollado por **Óscar** (UV) como proyecto web con foco en maquetación responsive con Bootstrap, uso de Web Components nativos y organización modular de ficheros HTML/JS/CSS.
