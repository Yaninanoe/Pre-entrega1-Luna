
function mostrarAlerta (mensaje) {
    alert(mensaje);
}
mostrarAlerta ("Bienvenido a CellphoneArgentina")


let marca = prompt ("Ingrese la Marca que desee buscar")
//let electro = prompt ("Ingrese el producto")

//if para ingreso de marca del producto

if (!marca) {
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




function verItems (modelo) {
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

verElectro(electro)








