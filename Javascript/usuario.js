//NAV MODIFICADO CON EL NOMBRE DE USUARIO Y OPCION CERRAR SESION
const navUsuario = () => {
    const navNodo = document.getElementById("nav");
    let navHTML = `
        <div class="navbar-nav">
            <a class="nav-link" href="../index.html">Inicio</a>
            <a class="nav-link" href="../pages/productos.html">Productos</a>
            <a class="nav-link" href="../pages/carrito.html">Carrito</a>
            <a class="nav-link" href="../pages/contacto.html">Contacto</a>
            <a class="nav-link" href="../pages/ayuda.html">Ayuda</a>
            <a class="nav-link" href="../pages/registro.html"><strong>${JSON.parse(localStorage.getItem("Usuario"))}<strong></a>
            <a class="nav-link" id="cerrarSesion"><strong>Cerrar Sesion<strong></a>
        </div>`
        ;
    navNodo.innerHTML = navHTML;

}

const alertaUsuario = () => {
    Swal.fire({
        icon: 'success',
        title: 'Cerraste tu sesion con exito',
        text: 'Hasta la proxima!',
    })
};

const alertaNovedad = () => {
    Swal.fire({
        icon: 'success',
        title: 'Gracias!',
        text: 'Te enviaremos nuestras novedades en breve!',
    })
};

const usuarioParse = JSON.parse(localStorage.getItem("Usuario"));

if (usuarioParse != null) {
    navUsuario()
};

const botonCerrar = document.getElementById("cerrarSesion");

botonCerrar.addEventListener("click", () => {
    localStorage.clear();
    alertaUsuario();
    setTimeout(function () {
        location.href = 'productos.html';
    }, 1000 * 2);
});

const novedades = document.getElementById("novedades");

novedades.addEventListener("click", () => {
    alertaNovedad();
});