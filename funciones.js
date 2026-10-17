/* FUNCIONES 
para funciones la palabra reservada es function nombreFuncion (recomendado este nombre descriptivo y en camel_case ) (parametros) {
*bloque de codigo a ejecutar *
}para llamarla se hace escribiendo el nombre que se le otorgo
*/

function saludar (){
    console.log("hola mundo");
}
saludar();

//cfuncion con parametros

function saludoPersonalizado (nombre,apellido){
    console.log (" hola " + nombre + apellido);
}
saludoPersonalizado(" Alejandra "," Forero ");
saludoPersonalizado("Jhon", " Bautista");
saludoPersonalizado("Felipe", " Sandoval");
saludoPersonalizado("Camila", " Forero");

//PARAMETROS POR DEFECTO

function bienvenidaSENA(nombre,programa="ADSO"){
    console.log(`hola ${nombre} del programa ${programa}`)
}
bienvenidaSENA("Alejandraa");
bienvenidaSENA("Cesar","Telecomunicaciones")

//FUNCION CON PARAMETROA DESORDENADOS

function calcularEdad(nombre, anioNacimiento){
    let edad=2026-anioNacimiento;
    console.log (`hola ${nombre}, tu edad es ${edad} años`)
}
calcularEdad ("Alejandra",2007);
calcularEdad ("Carlos",2000);
calcularEdad ("Andrea",1990);

//  FUNCION CON RETURN

function calculaPromedio(num1, num2, num3){
    let resultado=(num1+num2+num3)/3;
    return resultado;
}
let result=calculaPromedio(4,5,3);
console.log (`el resultado del promedio es ${result}`);



//calculadora
function sumar (num1, num2){
    return num1+num2;
}
function restar (num1, num2){
    return num1-num2;
}function multiplicar (num1, num2){
    return num1*num2;
}
function dividir (num1, num2){
    return num1/num2;
}
console.log(sumar(7,3));
console.log(restar(20, 10));
console.log(multiplicar(2,1));
console.log(dividir(16,2));


function calculadora(num1,num2,opcion){
    switch(opcion){
    case 1:
        return sumar(num1,num2);
    case 2:
        return restar(num1,num2);    
    case 3:
        return multiplicar(num1,num2);
    case 4:
        return dividir(num1,num2);
    default:
        "opcion no valida";
    }
}
console.log(calculadora(2,3,1));
console.log(calculadora(10,6,2));
console.log(calculadora(22,2,3));
console.log(calculadora(16,4,4));
