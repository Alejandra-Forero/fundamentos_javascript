/*ARREGLOS EN JS
Manera antigua 
let nombreArray=newArray(e1)

Manera nueva
let nombreArray=[e1,e2,e3,e4..]*/

//manera antigua//

//Manera antigua 
let programas= new Array("ADSO","SST","TOPOGRAFIA","MINERIA")
console.log(typeof programas);


//manera nueva 
let programaSENA= ["ADSO",3233140,true];
console.log(programaSENA);
console.log(typeof programaSENA)

//arreglo de lengiajes de programacion 
let lenguajes=["python","javaScript","HTML","CSS"];
 console.log(lenguajes[0]);
 console.log(lenguajes[5]);
 console.log(lenguajes[3]);

 //agregar elementos a un arreglon con push
 lenguajes.push("java" )
 console.log(lenguajes);

 //modificar elementos de un arreglo 
 lenguajes[1]="js"
 console.log(lenguajes)

 //Eliminar un elemento de un arreglo (elimina el ultimo elemento)
 lenguajes.pop();
 console.log(lenguajes);

//cantidad de elementos
console.log(lenguajes.length);

//busqueda de un elemento dentro del arreglo
console.log(lenguajes.includes("c++")); 
console.log(lenguajes.includes("python")); 

//concatenar 2 ARRAYS

let lenguajesFrontend=("html","css","javascript");
let lenguajesBackend=("python","php","java","java","c#");

let lenguajesProgramacion=lenguajesFrontend.concat(lenguajesBackend);
console.log(lenguajesProgramacion);