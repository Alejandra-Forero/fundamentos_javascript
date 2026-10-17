//IF
if (true){
    //bloque de código
}

//ejemplo if
 
let evidencia =2.0
if (evidencia >= 3.5){
    console.log("El esultado es APROBADO");
} 
else {
    console.log("El resultado es NO APROBADO")
}

//if - else if
let edad = 20;

if (edad<=13){
    console.log("Eres un niño");
}
else if (edad<=18){
    console.log("Eres un adolescente");
}
else if (edad<=60){
    console.log("Eres un adulto");
}
else {
    console.log("Eres un adulto mayor");
}



//if anidado

let edadActual= 65;
let semanas_cotizadas = 1300;
let genero = "Femenino";

if (genero == "Femenino"){
    if (edadActual >= 57){
        if (semanas_cotizadas >= 1250){
            console.log("Felicidades, puedes pensionarte");
        }
}else {
            console.log("lo siento, no cumples con los requisitos para pensionarte");
        }
    }
else if (genero == "Masculino"){
    if (edadActual >= 65 ){
        if (semanas_cotizadas >= 1300){
            console.log("Felicidades, eres hombre y puedes pensionarte");
        }
}else {
            console.log("lo siento, no cumples con los requisitos para pensionarte");
        }
    }

else {
    console.log("lo siento, no puedo hayar la pension para ese parametro");
}


//condicional con operadores logicos

let correo= "sena@gmail.com";
let contrasena= "123456";

if (correo == "sena@gmail.com" && contrasena == "123456"){
    console.log("Bienvenido al sistema");
    }
else {
    console.log("Correo o contraseña incorrectos");
}   

//condicional con operador logico OR

let etapa_lectiva=false;
let etapa_practica= false;

if (etapa_lectiva || etapa_practica){
    console.log("El aprendiz puede presentar la certificación");
}
else {
    console.log("El aprendiz no puede presentar la certificación");
}

//operador ternario


let nota= 3.6;
let resultado = (nota >= 3.5) ? "APROBADO" : "NO APROBADO";
console.log(resultado);



//switch
let dia = 3;
switch (dia)    {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;  
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
    console.log("El día no es válido");
}


//calculadora con switch

let numero1=Number(prompt("digita el numero1") );
let numero2=Number(prompt("digita el numero 2"));
let operacion= Number(prompt(" digita el numero de la opcion que corresponda 1 sumar, 2 resta, 3 multiploicacion, 4 divide"))  

switch(operacion){
    case 1:
        console.log(`la suma entre ${numero1} y ${numero2} es igual a ${(numero1) + (numero2)}`);
    
        break;
    case 2:
          console.log(`la resta entre ${numero1} y ${numero2} es igual a ${(numero1) - (numero2)}`);
        break;
    case 3:
          console.log(`la multiplicacion entre ${numero1} y ${numero2} es igual a ${(numero1) * (numero2)}`);
        break;
    case 4:
          console.log(`la division  entre ${numero1} y ${numero2} es igual a ${(numero1) / (numero2)}`); 
}
