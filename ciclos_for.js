//ciclos o bucles
    //FOR
        //for se saber cuantas veces se va a repeir, donde empieza y donde termina.
        //for (empieza el ciclo);condicion (cuantas veces se repite);incremento (cada cuanto incrementa)

//FOR INCREMENTO
for (let i=1; i <=10; i++){
    console.log(i)
}
//FOR DECREMENTO
for  (let x=5; x>=1; x--){
    console.log(x)
}
console.log("FELIZ NAVIDAD")

//TABLA DE MULTIPLICAR DEL 7
for(let t=1; t<=10; t++) {
    console.log(
        `multi[plicacion de 7 * ${t} es igual a ${7 * t}`)
}
//FOR OFF PARA REECORRER ARREGLOS 

let nombres =["Felipe","Alejandra","Valentina","Sebastian"];
//for (let i=0; 1<=nombres.length; i++){
// console.log(nombres[i]);}

for (let nombre of nombres){
    console.log(nombre)
}

let frutas= ["manzana","pera","fresa","guanabana","zapote", "guama","feijoba"]
for (let fruta of frutas) {
    console.log(fruta)
}