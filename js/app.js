
// FUNCIONES PARA EL CARRITO

const carrito = document.querySelector(".carrito-compras")
const contadorProducto = document.querySelector(".contador-product")


carrito.addEventListener ("click",()=>{
    contadorProducto.classList.toggle("contador-product-car")
})
/*-----------------------------*/

const carProduct = document.querySelector(".car-product")
const carritoCompras = document.querySelector(".carrito-compras")


/*Lista de los detalles de los productos*/ 

const contadorProductosCarrito = document.querySelector('.contador-productos-carrito')

//const padreFotos = document.querySelector (".padre-fotos")

/*Variables de arreglo para productos */

let allProducto = []






const cellphone = document.querySelector(".padre-fotos")
//const btn = document.querySelector ('.btn-car')


cellphone.addEventListener ('click', e=> {
    if(e.target.classList.contains('btn-car')){
        const productoSec = e.target.parentElement
        const infoProductos = {
            quantity: 1,
            titulo: productoSec.querySelector('p').textContent,
            precio: productoSec.querySelector('h3').textContent,
        }
        allProducto = [...allProducto, infoProductos]
        //llamamos la funcion mostrarHTML
        mostrarHTML();
    }
    

    //document.querySelector (".celulares")
    //console.log("producto")
})

/*Funcion para mostrar en HTML*/

const mostrarHTML = () => {

    contadorProductosCarrito.innerHTML = '';

    allProducto.forEach(producto => {
        const contenedorProducto = document.createElement('div')
        contenedorProducto.classList.add('car-product')
        contenedorProducto.innerHTML =`
        <div class="info-car-product">
                            <span> ${producto.quantity} </span>
                            <p class="info-car-titulo">${producto.titulo}</p>
                            <span>${producto.precio}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>`
                          contadorProductosCarrito.appened(contenedorProducto);
    })
    
}

//cellphone.addEventListener("click", e=>{
//console.log()
//})




//FUNCIONES PARA FORMULARIO
const mensajeContacto = document.querySelector(".contacto")
const listaComentario = document.querySelector("#lista-comentarios");
let comentarios = [];

function mostrarAlerta(msj){
const mensajeAlerta = document.createElement('p')
mensajeAlerta.textContent = msj
mensajeAlerta.classList.add('alerta')
const modal = document.querySelector ('#contenidoComentario')
modal.appendChild(mensajeAlerta);



setTimeout(()=>{
mensajeAlerta.remove();
},3000)
}


function agregarComentario(e){
e.preventDefault()
//console.log("Agregaste comentario")
const comentario = document.querySelector("#mensaje").value;

comentario === '' && mostrarAlerta("Debe ingresar el mensaje")

const objComentario = {
    id:Date.now(),
    texto: comentario
}
console.log("objComentario");
comentarios.push(objComentario);
mensajeContacto.reset()
console.log(comentarios)

mostrarComentarioHTML();
}


function mostrarComentarioHTML(){
    limpiarComentarios();
comentarios.forEach(item =>{
    const li = document.createElement('li');
    li.textContent = item.texto;
    li.setAttribute('id', item.id)
    listaComentario.appendChild(li)
})
function limpiarComentarios(){
    while(listaComentario.firstChild){
        listaComentario.removeChild(listaComentario.firstChild)
    }
}
sincronizarStorage()

}
// FUNCION PARA QUE SE GUARDEN LOS COMENTARIOS EN EL STORAGE
function sincronizarStorage(){
    localStorage.setItem('comentarios', JSON.stringify(comentarios))
}

mensajeContacto.addEventListener("submit", agregarComentario);


// DOM LOCAL STORAGE

document.addEventListener('DOMContentLoaded', ()=>{
/*if (JSON.parse(localStorage.getItem ("comentarios"))){
    comentarios = JSON.parse(localStorage.getItem('comentarios'))
}else {
    comentarios = [];
}*/
comentarios = JSON.parse(localStorage.getItem('comentarios')) || []
mostrarComentarioHTML()
})













/*function mostrarAlerta (mensaje) {
    alert(mensaje);
}
mostrarAlerta ("Bienvenido a CellphoneArgentina")*/


//let marca = prompt ("Ingrese la Marca que desee buscar")
//let electro = prompt ("Ingrese el producto")

//if para ingreso de marca del producto

/*if (!marca) {
    mostrarAlerta ("Por favor, ingrese la marca del producto")
    
} else {
    mostrarAlerta ("Ingresaste la marca " + marca)
}

const datosBusqueda = {
    marca: marca.trim().toLowerCase()
};
// if para tipo de producto

/*if (!electro) {
    mostrarAlerta ("Por favor, ingrese el producto")
    
} else {
    mostrarAlerta ("Ingresaste " + electro)
}

const datosBusqueda = {
    electro: electro.trim().toLowerCase()
};*/




/*function verItems (modelo) {
    modelo.forEach(item => {
        console.log(item.marca + " - " + item.nombre + " - " + item.precio + " - " + item.color)
    });
    ;
}

verItems (items)

function filtrarMarca (item){
if (datosBusqueda.marca){
    return item.marca.trim().toLowerCase() === datosBusqueda.marca;
}
return true
}

function filtrarItems () {
    const resultado = items.filter(filtrarMarca);
    if(resultado.length>0) {
        mostrarItems(resultado)
    }
    else {
        console.error("No se encontraron resultados")
        mostrarAlerta("Lo sentimos, no se encontró la marca ingresada")
    }
}

filtrarItems ()

function mostrarItems (items) {
    console.log ("Resultado de la búsqueda: ");
    verItems(items);
}

function verElectro (productos) {
    productos.forEach(producto => {
        console.log(producto.marca + " - " + producto.nombre + " - " + producto.precio + " - " + producto.color)
    });
}

verElectro(electro)*/








