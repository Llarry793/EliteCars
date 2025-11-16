class Cabecera extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark" style="position: fixed; width:100%; top:0;"> <!--La etiqueta md es la que hace que al estrechar la página se colapsen los items -->
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><strong>EliteCars</strong></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExampleDefault">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarExampleDefault">
                <div class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="/Practica1/Admin/Ficheros_HTML/ADM_Usuario.html">Usuario</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/Practica1/Admin/Ficheros_HTML/ADM_Pedidos.html">Pedidos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/Practica1/Admin/Ficheros_HTML/ADM_Productos.html">Productos</a>
                    </li>
                </div>
            </div>
        </div>
    </nav>
        </header>      
        `
    }
}
window.customElements.define('mi-cabecera', Cabecera);