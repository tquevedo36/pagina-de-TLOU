/*let nombre = "THE LAST OS US PARTE I";
let costo   = 10.00;


const juego1 =  nombre ("THE LAST OF US PARTE I", 10.00)

const theLastOfUs = {
    parte:"1",
    version:"remasted",
    plataforma:"PS4",
    precio:"10",
}

console.log(theLastOfUs);
console.log("The last of us-" +parte+version);

console.log("se encuentra disponible para"+plataforma);
console.log("The last of us-" +parte+version);
console.log("con un costo de:"+precio);

const theLastOfUs = {
    parte:"1",
    version:"remasted",
    plataforma:"PS4",
    precio: "usd 10", 
}

console.log(theLastOfUs);
console.log("la version es:" + theLastOfUs.version);
console.log("el precio es:" +theLastOfUs["precio"]);


//funcion constructora
function thelastofusparte(parte,version,plataforma,precio){
    this.parte = parte;
    this.version = version;
    this.plataforma = plataforma;
    this.precio = precio;
}


const contenedor = document.getElementById("divContenedor");
divContenedor.innerHTML = `<div>
 <p>Nombre</p>
 <p>Parte</p>
 <p>Version</p>
 <p>Plataforma</p>
 <p>Precio</p>
 <button>Agregar AL Carrito </button>
 </div>`


class Producto {
    constructor(parte, version, plataforma, precio) {
        this.nombre = nombre;
        this.parte = parte;
        this.version = version;
        this.plataforma = plataforma;
        this.precio = precio;
    }
}

const theLastOfUsP1 = new Producto("the last of us", "1", "remaster", "ps4", "usd 10");
const theLastOfUsP2 = new Producto("the last of us", "2", "original", "ps4", "usd 39.99");
const theLastOfUsP1R = new Producto("the last of us", "1", "remake", "ps5", "usd 69.99");


const arrayProductos = [theLastOfUsP1, theLastOfUsP2, theLastOfUsP1R];

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = `<p>Nombre: ${producto.nombre} </p>
    <p>Parte: ${producto.parte} </p>
    <p>Version: ${producto.version} </p>
    <p>Plataforma: ${producto.plataforma} </p>
    <p>Precio: ${producto.precio} </p>
    <button>Agregar AL Carrito </button>`;
    contenedorProductos.appendChild(div);
})
*/

/*  intento de formulario 
class cliente {
    constructor( nombre , apellido ) {
        this.nombre = nombre ;
        this.apellido = apellido ;
    }
}

const arrayCliente = [] ;
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit" , (e)=>{
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const cliente = new Cliente(nombre.value , apellido.value);
    arrayCliente.oush(cliente);

    console.log(arrayCliente);
}) 


//carrito de compras de la clase 11 


class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1 ;

        
    }
}

const arroz = new Producto ( 1, "arroz", 100, "../img/luciernaga2.jpg");
const azucar =  Producto ( 2, "azucar", 50, "../img/luciernaga2.jpg");
const sal =  Producto ( 3, "sal", 600, "../img/luciernaga2.jpg");
const mermelada =  Producto ( 4, "mermelada", 40, "../img/luciernaga2.jpg")
const azuc =  Producto ( 5, "azuc", 50, "../img/luciernaga2.jpg");
const azuca =  Producto ( 6, "azuca", 50, "../img/luciernaga2.jpg");
const azcar =  Producto ( 7, "azcar", 50, "../img/luciernaga2.jpg");
const zucar =  Producto ( 8, "zucar", 50, "../img/luciernaga2.jpg");
const productos = [arroz, azucar, sal, mermelada, azuc, azuca, azcar, zucar, ];
let carrito = []

const contenedorProductos = document.getElementById("contenedorProductos");

const mostrarProductos = () => {
    productos.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                    <div class= "card-body">
                        <h5>${producto.nombre}</h5>
                        <p> ${producto.precio} </p>
                        <button class="btn colorBoton"> Agregar al Carrito </button>
                    </div>
                </div>
                        `
        contenedorProductos.appendChild(card);
    })
}

mostrarProducto ();
*/

let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');


let buyThings = [];
let totalCard = 0;
let countProduct = 0;

//functions
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        
        countProduct--;
    }
    //FIX: El contador se quedaba con "1" aunque ubiera 0 productos
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    loadHtml();
}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
    //console.log(infoProduct);
}

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}$</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}
 function clearHtml(){
    containerBuyCart.innerHTML = '';
 }