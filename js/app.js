
// FUNCIONES PARA EL CARRITO

const carrito = document.querySelector(".carrito-compras")
const contadorProducto = document.querySelector(".contador-product")


carrito.addEventListener ("click",()=>{
    contadorProducto.classList.toggle("contador-product-car")
})
/*-----------------------------*/

const carProduct = document.querySelector(".car-product")
const contadorProductosCarrito = document.querySelector('.contador-productos-carrito')




/*Lista de todos los productos*/ 


const padreFotos = document.querySelector (".padre-fotos")

/*Variables de arreglo para productos */

let allProducto = []

const totalPagar = document.querySelector('.total-pagar')
const contadorPts = document.querySelector('#contador')



// UTILIZAR ID EN LUGAR DE TÍTULOS REALIZAR EL CAMBIO EN LOS EVENTOS
padreFotos.addEventListener ('click', e=> {
    if(e.target.classList.contains('btn-car')){
        const productoSec = e.target.parentElement
        const infoProductos = {
            quantity: 1,
            titulo: productoSec.querySelector('p').textContent,
            precio: productoSec.querySelector('h3').textContent,
        };

        const existProduct = allProducto.some(productoSec => productoSec.titulo === infoProductos.titulo)
        
if (existProduct){
    const products = allProducto.map(productoSec=>{
        if(productoSec.titulo === infoProductos.titulo){
            productoSec.quantity++;
            return productoSec
        }else {
            return productoSec
        }
    })
    allProducto = [...products]
} else {
    allProducto = [...allProducto, infoProductos];
}

     
        //llamamos la funcion mostrarHTML
        mostrarHTML();
    }
})

//UTILIZAR ID PARA LOS EVENTOS CAMBIAR EN LUGAR DE TÍTULO

contadorProductosCarrito.addEventListener('click', (e)=>{
    if(e.target.classList.contains('icon')){
        const productoSec = e.target.parentElement
        const titulo = productoSec.querySelector('p').textContent;
        allProducto = allProducto.filter(
            productoSec => productoSec.titulo !== titulo
        );
        console.log(allProducto)
        mostrarHTML()
    }
})
/*Funcion para mostrar en HTML*/

const mostrarHTML = () => {

    contadorProductosCarrito.innerHTML = '';

    let total = 0;
    let totalcompra = 0;

    allProducto.forEach(productoSec => {
        const contenedorProducto = document.createElement('div')
        contenedorProducto.classList.add('car-product')
        contenedorProducto.innerHTML =`
        <div class="info-car-product">
                            <span> ${productoSec.quantity} </span>
                            <p class="info-car-titulo">${productoSec.titulo}</p>
                            <span>${productoSec.precio}</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>`
                          contadorProductosCarrito.append(contenedorProducto);

        total = total + parseInt(productoSec.quantity * productoSec.precio.slice(1))
        totalcompra = totalcompra + productoSec.quantity;
    });

    totalPagar.innerText = `$ ${total}`;
    contadorPts.innerText = totalcompra;
    console.log(totalPagar)
    sincronizarStorageCar()
};

//LOCAL STORAGE

function sincronizarStorageCar(){
    localStorage.setItem('allProducto', JSON.stringify(allProducto))
}

// DOM LOCAL STORAGE

document.addEventListener('DOMContentLoaded', ()=>{

allProducto = JSON.parse(localStorage.getItem('allProducto')) || []

})


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
})}



function limpiarComentarios(){
 while(listaComentario.firstChild){
       listaComentario.removeChild(listaComentario.firstChild)
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

comentarios = JSON.parse(localStorage.getItem('comentarios')) || []
mostrarComentarioHTML()
})





















