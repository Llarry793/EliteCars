# Elite Cars 🚗
![Elite Cars Logo](https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/29f384e9-cd60-4a82-960b-8e2f6a4092a5)

**Sitio web de venta de coches de alta gama desarrollado con HTML, CSS, JavaScript y Bootstrap 5.**

***
## Descripción
Elite Cars es una tienda online de automóviles de lujo y alto rendimiento. El catálogo incluye vehículos como el Lamborghini Urus Mansory, Porsche 911 GT3 RS, Mercedes-AMG Clase A, Mercedes G Brabus, MINI John Cooper Works y Volkswagen Golf GTI Clubsport. El proyecto está estructurado como una SPA estática con múltiples páginas HTML y componentes web personalizados.

***
## Capturas de pantalla

### Pantallas de la aplicación
| Página de inicio | Catálogo de productos |
|:----------------:|:--------------------:|
| ![Página de inicio](https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/61e82fb4-2a36-4530-8fc3-7b1287c08b2a) | ![Catálogo de productos](https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/0e4c2cc7-e92d-478a-ab22-a8ed62f71cdb) |

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
## Características principales
- 🏎️ **Catálogo de vehículos**: listado de coches de alta gama con imágenes, nombre y precio.
- 🛒 **Carrito de compra**: los usuarios pueden añadir vehículos al carrito antes de finalizar el pedido.
- 👤 **Gestión de usuario**: formulario de inicio de sesión con campos de usuario y contraseña y enlace a registro de nueva cuenta.
- 📋 **Panel de usuario registrado**: muestra datos personales e historial de pedidos, todo editable inline.
- 🧩 **Componentes web reutilizables**: `<mi-cabecera>` y `<mi-pie>` como Custom Elements de la Web Components API.
- 📱 **Diseño responsive**: navbar que colapsa en móvil gracias a Bootstrap 5 (breakpoint `md`).
- 🔗 **Redes sociales**: footer con iconos de Twitter, Instagram y Facebook (Font Awesome 5).

***
## Estructura del proyecto
```
EliteCars/
├── FicherosHTML/
│   ├── InicioEliteCars.html
│   ├── EmpresaEliteCars.html
│   ├── ContactoEliteCars.html
│   ├── ProductosEliteCars.html
│   ├── CarritoEliteCars.html
│   ├── UsuarioEliteCars.html
│   ├── UsuarioIniciadoEliteCars.html
│   └── RegistrarUsuarioEliteCars.html
├── FicherosJS/
│   ├── Cabecera_EliteCars.js  # Custom Element <mi-cabecera>
│   └── PiePag_EliteCars.js    # Custom Element <mi-pie>
├── FicherosCSS/
│   └── InicioEliteCars.css
└── Imagenes/
```

***
## Tecnologías utilizadas
- **HTML5** — estructura semántica.
- **CSS3** — estilos personalizados complementarios a Bootstrap.
- **JavaScript (ES6+)** — lógica del cliente y Custom Elements.
- **Bootstrap 5.3.2** — grid responsive, navbar y componentes UI.
- **Web Components API** — Custom Elements para cabecera y footer reutilizables.
- **Font Awesome 5.15.1** — iconos vectoriales.

***
## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Llarry793/EliteCars.git
   ```
2. Abre `FicherosHTML/InicioEliteCars.html` en tu navegador o usa un servidor estático:
   ```bash
   python -m http.server 8080
   ```

***
## Autor
Desarrollado por **Óscar** (UV) — maquetación responsive con Bootstrap, Web Components nativos y organización modular HTML/JS/CSS.
