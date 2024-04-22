

const carrito = document.querySelector(".carrito-compras")
const contadorProducto = document.querySelector(".contador-product")


carrito.addEventListener ("click",()=>{
    contadorProducto.classList.toggle("contador-product-car")
})

const carProduct = document.querySelector(".car-product")
const contadorProductosCarrito = document.querySelector('.contador-productos-carrito')



const padreFotos = document.querySelector (".padre-fotos")

let allProducto = []

const totalPagar = document.querySelector('.total-pagar')
const contadorPts = document.querySelector('#contador')




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


Toastify({

    text: "Se agregó al carrito",
    
    duration: 3000
    
    }).showToast();
    
        mostrarHTML();
    }
})



contadorProductosCarrito.addEventListener('click', (e)=>{
    if(e.target.classList.contains('icon')){
        const productoSec = e.target.parentElement
        const titulo = productoSec.querySelector('p').textContent;
        allProducto = allProducto.filter(
            productoSec => productoSec.titulo !== titulo
        );
        
        mostrarHTML()
    }
})


const mostrarHTML = () => {

    contadorProductosCarrito.innerHTML = '';

    let total = 0;
    let totalcompra = 0;

    allProducto.forEach(productoSec => {
        const contenedorProducto = document.createElement('div')
        contenedorProducto.classList.add('car-product')

        const precioNumerico = parseInt(productoSec.precio.slice(1)); // Convierte el precio a número

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
        
                          total = total + (productoSec.quantity * precioNumerico); //suma el precio calculado

        //total = total + parseInt(productoSec.quantity * productoSec.precio.slice(1))
        totalcompra = totalcompra + productoSec.quantity;
    });

    totalPagar.innerText = `$ ${total}`;
    contadorPts.innerText = totalcompra;
    console.log(totalPagar)
    sincronizarStorageCar()
};


function sincronizarStorageCar(){
    localStorage.setItem('allProducto', JSON.stringify(allProducto))
}

function dibujarProductos (productos){
    const info = document.querySelector("#lista-productos");
    let html = "";
    productos.forEach(({img, nombre, precio})=>{
        html += `
        <div class="celulares">
            <img src="img/${img}" alt="Celular">
                <p>${nombre}</p>
                <h3>Precio: ${precio}</h3>
                <button class="btn-car">AGREGAR AL CARRITO</button>
            </div>

        `
    })
    info.innerHTML = html
}


document.addEventListener('DOMContentLoaded', ()=>{

    fetch ('data/productos.json')
    .then(respuesta => {
        return respuesta.json()
    })
    .then(data => {
        dibujarProductos(data)
    })
    .catch((error)=>{
        //Swal.fire("error");
        //console.log(error)
        alert("error")
    })

allProducto = JSON.parse(localStorage.getItem('allProducto')) || []

})



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

function sincronizarStorage(){
    localStorage.setItem('comentarios', JSON.stringify(comentarios))
}

mensajeContacto.addEventListener("submit", agregarComentario);


document.addEventListener('DOMContentLoaded', ()=>{

comentarios = JSON.parse(localStorage.getItem('comentarios')) || []
mostrarComentarioHTML()
})





















