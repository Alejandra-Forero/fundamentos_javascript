//ACTIVIDAD PRÁCTICA 4: Clasificador de desempeño y menú

//Pasos:
//1. Pide una nota con prompt y conviértela a número.
//2. Con if / else if / else muestra la clasificación: excelente (4.5 o más), bueno (3.5 o más), aceptable (3.0 o más) o debe reforzar.
//3. Valida que la nota esté entre 0 y 5; si no, muestra «Nota no válida» y no clasifiques.
//4. Crea un menú con prompt (1. Ver horario, 2. Consultar notas, 3. Salir) y respóndelo con switch.
//5. Prueba todos los caminos posibles, incluida la opción no válida.
//Resultado esperado: Cada nota ingresada produce la clasificación correcta y cada opción del
//menú muestra su mensaje.
//Reto adicional: Usa el operador && para validar el rango de la nota en una sola condición.

let nota=Number(prompt("digita una nota"))
     if (nota>=0 && nota <=5)
    console.log("nota invalida")

    else if (nota>= 4.5){
        console.log("Excelente");
    }
    else if (nota>=3.5){
        console.log("Bueno");
    }
    else if (nota>=3.0){
        console.log("aceptable");
    }
   
else  {
    console.log("Debes reforzar");
}

let opcion= Number(prompt("escoge segun lo que deseas ver, 1 Ver horario. 2. Consultar notas. 3 Salir"));

switch(menu) {
  case 1:
    console.log("Horario: lunes a viernes, 8:00 a.m. - 12:00 m.");
    break;
  case 2:
    console.log("Tu nota es " + nota);
    break;
  case 3:
    console.log("Hasta pronto");
    break;
  default:
    console.log("Opción no válida");
}
