let botonCarrito = document.getElementById("botonCarrito");
let tuCarrito = document.getElementById("tuCarrito");
let botonCerrarCarrito = document.getElementById("botonCerrarCarrito");

botonCarrito.onclick = () => {
    openShoppingCart();
}

botonCerrarCarrito.onclick = () => {
    closeShoppingCart();
}
openShoppingCart = () => {
    if (tuCarrito.className === "carrito"){
        tuCarrito.className = "carrito carrito--displayBlock";
    }
}

closeShoppingCart = () => {
    if (tuCarrito.className === "carrito carrito--displayBlock"){
        tuCarrito.className = "carrito";
    }
}

let carrito = [];

let botonAgregarAlCarrito = document.getElementsByClassName("botonAgregarAlCarrito");
addToShoppingCart = (x) => {
    botonAgregarAlCarrito[x].onclick = () => {
        carrito.push(productos[x]);
        calculeTotal();
        console.log(`Agregaste: ${productos[x].nombre} (Tomo ${productos[x].tomo})`);
        let listaDeProductos = document.getElementById("listaDeProductos");
        let productoAgregado = document.createElement("li");
        productoAgregado.className = "productoItem";
        productoAgregado.innerHTML = `  <div class= "nombre">${productos[x].nombre}</div>
                                        <div class= "tomo">${productos[x].tomo}</div>
                                        <div class= "unidad"></div>
                                        <div class= "precio">$${productos[x].precio}</div>`;
        listaDeProductos.appendChild(productoAgregado);
    }
}

const calculeTotal = () => {
    let total = carrito.reduce((acc, elemento) => acc + elemento.precio, 0);
    let totalDelCarro = document.getElementById("totalDelCarro");
    totalDelCarro.innerText = `Total: $${total}`;

}  






for (let i = 0; i < 36; i++) {
    addToShoppingCart(i);
}
