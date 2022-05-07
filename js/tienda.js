const productos = [ 
                    { id:1, nombre: "Attack On Titan", tomo: 1, imagen: "aot1.jpg", precio: 900, autor: "Hajime Isayama", cantidad: 0 },
                    { id:2, nombre: "Attack On Titan", tomo: 2, imagen: "aot2.jpg", precio: 850, autor: "Hajime Isayama", cantidad: 0 },
                    { id:3, nombre: "Attack On Titan", tomo: 3, imagen: "aot3.jpg", precio: 850, autor: "Hajime Isayama", cantidad: 0 },
                    { id:4, nombre: "Attack On Titan", tomo: 4, imagen: "aot4.jpg", precio: 850, autor: "Hajime Isayama", cantidad: 0 },
                    { id:5, nombre: "Attack On Titan", tomo: 5, imagen: "aot5.jpg", precio: 700, autor: "Hajime Isayama", cantidad: 0 },
                    { id:6, nombre: "Dragon Ball", tomo: 1, imagen: "db1.jpg", precio: 1050, autor:"Akira Toriyama", cantidad: 0 },
                    { id:7, nombre: "Dragon Ball", tomo: 2, imagen: "db2.jpg", precio: 1100, autor:"Akira Toriyama", cantidad: 0 },
                    { id:8, nombre: "Dragon Ball", tomo: 3, imagen: "db3.jpg", precio: 1100, autor:"Akira Toriyama", cantidad: 0 },
                    { id:9, nombre: "Dragon Ball", tomo: 4, imagen: "db4.jpg", precio: 1300, autor:"Akira Toriyama", cantidad: 0 },
                    { id:10, nombre: "Dragon Ball", tomo: 5, imagen: "db5.jpg", precio: 1000, autor:"Akira Toriyama", cantidad: 0 },
                    { id:11, nombre: "Death Note", tomo: 1, imagen: "deathnote1.jpg", precio: 900, autor:"Tsugumi Ōba", cantidad: 0 },
                    { id:12, nombre: "Death Note", tomo: 2, imagen: "deathnote2.jpg", precio: 900, autor:"Tsugumi Ōba", cantidad: 0 },
                    { id:13, nombre: "Death Note", tomo: 3, imagen: "deathnote3.jpg", precio: 950, autor:"Tsugumi Ōba", cantidad: 0 },
                    { id:14, nombre: "Death Note", tomo: 4, imagen: "deathnote4.jpg", precio: 900, autor:"Tsugumi Ōba", cantidad: 0 },
                    { id:15, nombre: "Death Note", tomo: 5, imagen: "deathnote5.jpg", precio: 900, autor:"Tsugumi Ōba", cantidad: 0 },
                    { id:16, nombre: "Dr. Stone", tomo: 1, imagen: "drstone1.jpg", precio: 1300, autor:"Riichiro Inagaki", cantidad: 0 },
                    { id:17, nombre: "Dr. Stone", tomo: 2, imagen: "drstone2.jpg", precio: 1300, autor:"Riichiro Inagaki", cantidad: 0 },
                    { id:18, nombre: "Dr. Stone", tomo: 3, imagen: "drstone3.jpg", precio: 1300, autor:"Riichiro Inagaki", cantidad: 0 },
                    { id:19, nombre: "Dr. Stone", tomo: 4, imagen: "drstone4.jpg", precio: 1400, autor:"Riichiro Inagaki", cantidad: 0 },
                    { id:20, nombre: "Dr. Stone", tomo: 5, imagen: "drstone5.jpg", precio: 1450, autor:"Riichiro Inagaki", cantidad: 0 },
                    { id:21, nombre: "Dr. Stone", tomo: 6, imagen: "drstone6.png", precio: 1400, autor:"Riichiro Inagaki", cantidad: 0 },
                    { id:22, nombre: "Evangelion", tomo: 1, imagen: "evangelion1.jpg", precio: 800, autor: "Yoshiyuki Sadamoto", cantidad: 0 },
                    { id:23, nombre: "Evangelion", tomo: 2, imagen: "evangelion2.jpg", precio: 850, autor: "Yoshiyuki Sadamoto", cantidad: 0 },
                    { id:24, nombre: "Evangelion", tomo: 3, imagen: "evangelion3.jpg", precio: 900, autor: "Yoshiyuki Sadamoto", cantidad: 0 },
                    { id:25, nombre: "Evangelion", tomo: 4, imagen: "evangelion4.jpg", precio: 600, autor: "Yoshiyuki Sadamoto", cantidad: 0 },
                    { id:26, nombre: "Full Metal Alchemist", tomo: 1, imagen: "fma1.jpg", precio: 900, autor:"Yoshiyuki Sadamoto", cantidad: 0 },
                    { id:27, nombre: "Full Metal Alchemist", tomo: 2, imagen: "fma2.jpg", precio: 800, autor:"Yoshiyuki Sadamoto", cantidad: 0 },
                    { id:27, nombre: "Full Metal Alchemist", tomo: 3, imagen: "fma3.jpg", precio: 1000, autor:"Yoshiyuki Sadamoto", cantidad: 0 },
                    { id:29, nombre: "Jujutsu Kaisen", tomo: 9, imagen: "jujutsukaisen9.jpg",precio: 1200, autor:"Gege Akutami", cantidad: 0 },
                    { id:30, nombre: "Jujutsu Kaisen", tomo: 10, imagen: "jujutsukaisen10.jpg",precio: 1100, autor:"Gege Akutami", cantidad: 0 },
                    { id:31, nombre: "One Piece", tomo: 1, imagen: "op1.jpg",precio: 600, autor:"Eiichirō Oda", cantidad: 0 },
                    { id:32, nombre: "One Piece", tomo: 2, imagen: "op2.jpg",precio: 700, autor:"Eiichirō Oda", cantidad: 0 },
                    { id:33, nombre: "One Piece", tomo: 3, imagen: "op3.jpg",precio: 650, autor:"Eiichirō Oda", cantidad: 0 },
                    { id:34, nombre: "Sakura", tomo: 1, imagen: "sakura1.jpg",precio: 500, autor:"CLAMP", cantidad: 0 },
                    { id:35, nombre: "Sakura", tomo: 2, imagen: "sakura2.jpg",precio: 550, autor:"CLAMP", cantidad: 0 },
                    { id:36, nombre: "Sakura", tomo: 3, imagen: "sakura3.jpg",precio: 400, autor:"CLAMP", cantidad: 0 }];
// llamamos a la etiqueta con el id tienda
let tienda = document.getElementById("tienda");
//creamos un div con las clases de bs "tienda__catalogo container-fluid"
let contenedorTienda = document.createElement("div");
contenedorTienda.className = "tienda__catalogo container-fluid";
// ubicamos el div creado dentro de la etiqueta con el id tienda
tienda.append(contenedorTienda);

//creamos un div con la clase de bs "row"
let contenedorTiendaRow = document.createElement("div");
contenedorTiendaRow.className = "row"
// ubicamos el div creado dentro de la etiqueta con la clase "container"
contenedorTienda.append(contenedorTiendaRow);

for (const producto of productos) {
    // por cada iteracion de producto se crea un div con la class col
    let card = document.createElement("div");
    card.className = "col col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center";
    
    card.innerHTML = `
            <div class="catalogoProducto">
                <h3 class="productoTitulo">
                    ${producto.nombre}
                </h3>
                <div class="productoPortada">
                    <img src="src/img/mangas/${producto.imagen}" alt="${producto.nombre} ${producto.tomo}">
                </div>
                <div class="productoInfo">
                    <h4>
                        ${producto.autor}
                    </h4>
                    <p>
                        $${producto.precio}
                    </p>
                </div>
                <div class="productoComprar">
                    <button class="comprarAgregar botonAgregarAlCarrito">
                        Agregar al carrito
                    </button>
                </div>
            </div>`;
    // ubicamos el ultimo div dentro del row    
    contenedorTiendaRow.appendChild(card)
}

