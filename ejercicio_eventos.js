//seleccion de los elementos

let entrada = document.getElementById("entrada");
let btnAgregar = document.getElementById("btnAgregar");
let lista = document.getElementById("lista");
let contador = document.getElementById("contador");

let total = 0;

btnAgregar.addEventListener("click", function () { 
    let nombre = entrada.value.trim(); // trim quita espacios sobrantes
    if (nombre === "") {
    alert("Escribe un nombre");
    return;
}


let li = document.createElement("li");
    li.textContent = nombre;//se agrega el niombre digitado al li
    lista.appendChild(li);//se agrega al li 


total++;

contador.textContent = "Aprendices: " + total;

entrada.value = ""; // limpiar el campo y quede listo para udigitar nuevamente
entrada.focus(); // ubica el puntero en el input

});

//filtrado dinamico con javascript

let filterInput=document.getElementById("filterInput");
let listaFiltrada=document.getElementById("lista");

filterInput.addEventListener("keyup",function(){
    let term=filterInput.value.toLowerCase();//convierte texto en minusculas

    let items=listaFiltrada.getElementByTagName("li");

    Array.from(items).forEach(function(item){

        if(item.textContent.toLowerCase().indexOf(term) !== -1){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    
    })
});



//PROPAGACION DE EVENTOS

let miDiv= document.getElementById("miDiv");
let miP= document.getElementById("miP");


//escuchador receptor para el parrafp

miP.addEventListener("click", function(){
    alert("hiciste click en el parrafo");

},true); 

miDiv.addEventListener("click", function(){
    alert("hiciste click en el contenedor DIV");

},true);//del padre al hijo

//capturing.building