// EVITAR EL RECARGO DE DATOS POR DEFECTO (SUBMIT) DEL FORMULARIO
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
}

let Nombres = [];
let Apellidos = [];
let Usuarios = [];
let Correos = [];
let ConfirmarCorreos = [];
let Contras = [];
let ConfirmarContras = [];
let Direcciones = [];
let Provincias = [];
let Ciudades = [];
let CodigoPostales = [];

let elementoBotonRegistrar = document.querySelector('#iRegistrar');

elementoBotonRegistrar.addEventListener('click', registrarUsuario);


function registrarUsuario() {

    let iNombre = document.querySelector('#iNombre').value;
    let iApellido = document.querySelector('#iApellido').value;
    let iUsuario = document.querySelector('#iUsuario').value;
    let iCorreo = document.querySelector('#iCorreo').value;
    let iConfirmarCorreo = document.querySelector('#iConfirmarCorreo').value;
    let iContra = document.querySelector('#iContra').value;
    let iConfirmarContra = document.querySelector('#iConfirmarContra').value;
    let iDireccion = document.querySelector('#iDireccion').value;
    let iProvincia = document.querySelector('#iProvincia').value;
    let iCiudad = document.querySelector('#iCiudad').value;
    let iCodigoPostal = document.querySelector('#iCodigoPostal').value;

    if (iContra == iConfirmarContra && iCorreo == iConfirmarCorreo) {
        Nombres.push(iNombre);
        Apellidos.push(iApellido);
        Usuarios.push(iUsuario);
        Correos.push(iCorreo);
        ConfirmarCorreos.push(iConfirmarCorreo);
        Contras.push(iContra);
        ConfirmarContras.push(iConfirmarContra);
        Direcciones.push(iDireccion);
        Provincias.push(iProvincia);
        Ciudades.push(iCiudad);
        CodigoPostales.push(iCodigoPostal);

        localStorage.setItem('Nombre', JSON.stringify(Nombres));
        localStorage.setItem('Apellido', JSON.stringify(Apellidos));
        localStorage.setItem('Usuario', JSON.stringify(Usuarios));
        localStorage.setItem('Correo', JSON.stringify(Correos));
        localStorage.setItem('Contra', JSON.stringify(Contras));
        localStorage.setItem('ConfirmarCorreos', JSON.stringify(ConfirmarCorreos));
        localStorage.setItem('ConfirmarContra', JSON.stringify(ConfirmarContras));
        localStorage.setItem('Provincia', JSON.stringify(Provincias));
        localStorage.setItem('Ciudad', JSON.stringify(Ciudades));
        localStorage.setItem('Direccion', JSON.stringify(Direcciones));
        localStorage.setItem('CodigoPostal', JSON.stringify(CodigoPostales));
        mostrarUsuario();
        navUsuario();
    } else { alertaUsuario(); }
}


const mostrarUsuario = () => {
    const usuarioNodo = document.getElementById("formulario");
    let usuarioHTML = `
    <div class="m-4">
        <dl class="row">
            <dt class="col-sm-3">Nombre:</dt>
            <dd class="col-sm-9">${JSON.parse(localStorage.getItem("Nombre"))}</dd>
            <dt class="col-sm-3">Apellido:</dt>
            <dd class="col-sm-9">${JSON.parse(localStorage.getItem("Apellido"))}</dd>
            <dt class="col-sm-3">Usuario:</dt>
            <dd class="col-sm-9">${JSON.parse(localStorage.getItem("Usuario"))}</dd>
            <dt class="col-sm-3">Correo:</dt>
            <dd class="col-sm-9">${JSON.parse(localStorage.getItem("Correo"))}</dd>
            <dt class="col-sm-3">Direccion:</dt>
            <dd class="col-sm-9">${JSON.parse(localStorage.getItem("Direccion"))}</dd>
            <dt class="col-sm-3">Ciudad:</dt>
            <dd class="col-sm-9">${JSON.parse(localStorage.getItem("Ciudad"))}</dd>
            <dt class="col-sm-3">Provincia:</dt>
            <dd class="col-sm-9">${JSON.parse(localStorage.getItem("Provincia"))}</dd>
            
        </dl>
    </div>`
        ;
    usuarioNodo.innerHTML = usuarioHTML;

};

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
    icon: 'warning',
    title: 'Revisa tus datos!',
    text: 'El Correo y la contraseña deben ser iguales',
  })
};

const alertaSesion = () => { 
    Swal.fire({
    icon: 'success',
    title: 'Cerraste tu sesion con exito',
    text: 'Hasta la proxima!',

  })
};


const usuarioParse = JSON.parse(localStorage.getItem("Usuario"));

if (usuarioParse != null) {
    navUsuario();
    mostrarUsuario();
 }

 const botonCerrar = document.getElementById("cerrarSesion");

 botonCerrar.addEventListener("click", () => {
     localStorage.clear();
     alertaSesion();
     setTimeout(function(){
         location.href='productos.html';
     },1000 * 3);
 });
