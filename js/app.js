
let marca = prompt ("Ingrese la Marca")

const datosBusqueda = {
    marca: marca
};




function verItems (modelo) {
    modelo.forEach(item => {
        console.log(item.marca + " - " + item.nombre + " - " + item.precio + " - " + item.color)
    });
    ;
}

verItems (items)

function filtrarMarca (item){
if (datosBusqueda.marca){
    return item.marca === datosBusqueda.marca
}
return item;
}

function filtrarItems () {
    const resultado = items.filter(filtrarMarca);
    if(resultado.length>0) {
        mostrarItems(resultado)
    }
    else {
        console.error("No se encontraron resultados")
    }
}

filtrarItems ()










