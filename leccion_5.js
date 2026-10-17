//Pasos:1. Con for, muestra la tabla de multiplicar de un número ingresado por prompt.
let tabla=Number(prompt("digita el numero de la tabla a multiplicar"));

for (let i=1; i<=10 ; i++){
        console.log( ` la multi[plicacion de ${tabla} x ${i} es igual a ${tabla*i}`)
}

//2. Con while, pide notas al usuario hasta que escriba 0; acumula la suma y cuántas notas ingresó.
let suma = 0;       
let contador = 0;   
let nota=Number(prompt("digita  una nota"));

while (nota !== 0) {
  suma = suma + nota;
  contador = contador + 1;
  nota=Number(prompt("digita otra nota"));
} 
// 3. Al terminar el while, muestra el promedio de las notas ingresadas.
  console.log(`la cantidad de notas ingresadas es ${contador}  la suma de las notas es igual a  ${suma} y el Promedio obtenido es ${suma/contador}`);


//4. Con for...of, recorre un arreglo con cinco fichas y muestra cada una numerada.

const fichas = ["3233140", "1234567", "9876543", "1357903"];

let conteo= 1;
for (const ficha of fichas) {
  console.log(`${conteo}. Ficha ${ficha}`);
  conteo++;
}
//5. Usa continue para omitir una ficha específica y comprueba el resultado.
console.log("Omite la ficha digitada ");
conteo = 1;
for (let ficha of fichas) {
  if (ficha === "3233140") {
    continue; 
  }
  console.log(`${conteo}. Ficha ${ficha}`);
  conteo++;
}
//Reto adicional: Muestra solo los números pares del 1 al 50 usando un for que avance de dosen dos.
console.log("Números pares del 1 al 50:");
for (let numero = 2; numero <= 50; numero += 2) {
  console.log(numero);
}