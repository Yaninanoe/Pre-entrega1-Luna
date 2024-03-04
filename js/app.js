alert ()
console.log ("Hola mundo");

/*let inicio = prompt("Ingrese su nombre")
resultado = inicio == "Yanina";
console.log(inicio)*/
function saludar() {
    console.log("Bienvenidos estudiantes")
}
saludar();


let inicio = prompt("Ingrese su apellido y nombre");
console.log (inicio)
let nota
let promedio
let sumar = 0;
let notas = parseInt(prompt("ingrese cantidad de notas a promediar"))


for(i=0; i < notas; i++){

    let nota = parseInt(prompt("Ingrese la nota" + i));

    
sumar = sumar + nota;
      

}
promedio = sumar / notas;



if(promedio == 10){
    console.log("Aprobado, Excelente promedio")
}else if (promedio < 4){
    console.log("Desaprobado")
}else {
    console.log("Aprobado")
}


/*let resultado = 0;
function promedio(primeraNota, segundaNota) {
resultado = primeraNota + segundaNota / 2;
}
promedio()
console.log (resultado)

/*let resultado = (nota1 + nota2)
console.log (resultado)
let promedio*/
