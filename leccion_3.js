//Pide con prompt tres notas y conviértelas a número con Number().
let nota1 = Number(prompt("Ingresa la nota 1 "));
let nota2 = Number(prompt("Ingresa la nota 2 "));
let nota3 = Number(prompt("Ingresa la nota 3 "));

//Calcula el promedio y redondéalo a un decimal con toFixed(1).
let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(1);
//Crea la variable booleana aprobo con la comparación promedio >= 3.0.
let aprobo = Number(promedio) >= 3.0;

//Muestra con una plantilla de texto: «El aprendiz obtuvo un promedio de X. ¿Aprobó? true/false».
console.log(`El aprendiz obtuvo un promedio de "promedio}. ¿Aprobó? ${aprobo}`);


//reto adicional
const faltan = aprobo ? 0 : (3.0 - Number(promedio)).toFixed(1);
console.log(`te faltan ${faltan} puntos para aprobar`);

