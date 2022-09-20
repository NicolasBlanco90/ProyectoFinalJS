// VARIABLES A TENER EN CUENTA
// SE APLICA OPERADOR TERNARIO / OR
//USO DE LIBRERIA

const alertaCarrito = () => { 
    Swal.fire({
    icon: 'info',
    title: 'Oops...',
    text: 'El Carrito esta vacio!',
  })
};

const carritoFinal = JSON.parse(localStorage.getItem('carrito')) || [];
carritoFinal != "" ? console.log(carritoFinal) : alertaCarrito();


//HTML PARA MOSTRAR EN EL RESUMEN DEL CARRITO
const productoCarritoHTML = (producto) => {
    return `
    <div class = "row">
        <div>
            <img src="${producto.imagen}"
                style="width: 25%;" alt="...">
                <div class="card-body">
                    <h6 class="card-title">${producto.nombre}</h6>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button href="#" id="boton-carrito-${producto.idCompra}" class="btn-1 btn-comprar">Quitar</button>
                </div>
        </div>
    </div>
    `;
};

// MOSTRAR ELEMENTOS DEL CARRITO
const mostrarCarrito = () => {
    const carritoNodo = document.getElementById("carrito");
    const precioNodo = document.getElementById("precioTotal");
    let carritoHTML = "";
    let precio = 0;

    for (const producto of carritoFinal) {
        carritoHTML += productoCarritoHTML(producto);
        precio += producto.precio;
    }
    precioNodo.innerHTML = `<h6> Total $${precio} </h6>`;
    carritoNodo.innerHTML = carritoHTML;
    botonesCarrito();
};

//QUITAR ELEMENTOS DEL CARRITO
const botonesCarrito = () => {
    for (const producto of carritoFinal) {
        const botonId = `boton-carrito-${producto.idCompra}`;
        const botonNodo = document.getElementById(botonId);

        botonNodo.addEventListener("click", () => {
            const index = carritoFinal.findIndex((p) => p.idCompra == producto.idCompra);
            carritoFinal.splice(index, 1);
            mostrarCarrito();
        })
    }
};

// BOTON FINALIZAR DONDE SE PASARIA A NUEVO HTML DE PAGO O A LA SECCION DE CATALOGO
const finalizar = document.getElementById("finalizar");
finalizar.addEventListener("click", () => {
    localStorage.removeItem("carrito");
    let precio = 0;
    for (const producto of carritoFinal) {
        precio += producto.precio;
    }
    
    const carritoNodo = document.getElementById("carrito");
    carritoNodo.innerHTML = `
    <div class="form-group"> 
        <h6> Total de su compra $${precio} </h6>
        <label class="control-label">Como desea Abonar? Seleccione la opcion que desee:</label>
        <select class="form-control" id="state_id">
            <option value="ef">Pago Efectivo cuando recibo los productos Total $${precio} </option>
            <option value="3c">3 cuotas s/interes de $${precio/3}</option>
            <option value="6c">6 cuotas de $${precio *0.5}</option>
            <option value="12c">12 cuotas s/interes de $${precio/12}</option>
        </select>
        <a class="btn-1 btn-comprar" href="https://www.mercadopago.com.ar"> PAGAR</a>
        <a class="btn-1 btn-comprar" href="./productos.html"> Volver a productos</a>                    
    </div>
    `
    const precioNodo = document.getElementById("precioTotal");
    precioNodo.innerHTML = ``;
    
    const finalizarNodo = document.getElementById("finalizar");
    finalizarNodo.innerHTML = `
    
    `;

});


mostrarCarrito();

