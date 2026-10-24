//DOCUMENT OBJECT MODEL
//-----------------------SELECCIONAR ELEMENTOS------------------------------

//seleccionar un elemento por su id

let tituloHeader= document.getElementById("tituloHeader");
console.log(tituloHeader);
console.log(typeof tituloHeader);

//seleciona elementos por eqtiqueta
let parrafos= document.getElementsByTagName("p");
console.log(parrafos);
console.log(typeof parrafos);

//selecciona elementos por su clase
let descripcionParrafos=document.getElementsByClassName("descripcion");
console.log(descripcionParrafos);
console.log(typeof descripcionParrafos);

//seleccionar un elementyo por su selectopr css

let parrafoSelector=document.querySelector(".descripcion");//class
let tituloSENA=document.querySelector("#tituloSENA");//ID
console.log([parrafoSelector]);
console.log(tituloSENA);

console.log(typeof parrafoSelector);
console.log(typeof tituloSENA);

//selecionaer un elemento con un queryselectorall

let allParrafos=document.querySelectorAll(".descripcion");
console.log(allParrafos);

//-----------------------MODIFICAR ELEMENTOS------------------------------

//cambiar texto de un elemento
let subtituloSENA=document.getElementById("subtituloSENA");
subtituloSENA.textContent="ADSO";

//cambiar el estilo de un elemento

tituloHeader.style.color ="green";
tituloHeader.style.fontSize="50px";
tituloHeader.style.fontFamily="Helvetica";

parrafos[0].style.color="orange";


//agregar clase de css a un html mediante js
let contactanos=document.getElementById("contactanos");
contactanos.classList.add("destacado");


//CAMBIAR EL ATRIUBUTO SRC DE UJNA IMAGEN EN HTML

let  logoSena=document.getElementById("myimg");
logoSena.src="senaSpeak.png";

//cambiar la propiedad href de un enlace
let mylink=document.getElementById("mylink");
mylink.href="https://caprendizaje.sena.edu.co/sgva/SGVA_Diseno/pag/login.aspx";

//crear un elemento de lista y agregarlo al dom desde js
let lista=document.getElementById("lista");
let nuevoElementoLi=document.createElement("li");//creamos el elemento hijo
nuevoElementoLi.innerText="JavaScript";

lista.appendChild(nuevoElementoLi); //agregamos el elemento hijo al padre

//insertar nuevas etiquetas html

let nuevoDiv=document.createElement("div");
nuevoDiv.innerHTML= `
    <h1> Nuevo titulo desde javascript </h1>
    <p> nuevo parrafo con javascript </p>
    <img src="sena.png"></img>`

    document.body.appendChild(nuevoDiv);

//eliminar un elemento  Del HTML
let divPadre=document.getElementById("divPadre");
let tituloHijo=document.getElementById("tituloHijo");

divPadre.removeChild(tituloHijo);

//reemplaza un elemento en HTML

let nuevoTitulo=document.createElement("h1");
nuevoTitulo.innerText="Este Es Un Titulo nuevo que remplaza al viejo ";
let tituloHijo2=document.getElementById("tituloHijo2");
divPadre.replaceChild(nuevoTitulo,tituloHijo2);


