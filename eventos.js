/*EVENTOS: aquello que hace que el usuario interactue como 
mouse: dar un click, doble click, mover sobre los ejes
teclado: keyup, key down*/
function saludar(){

alert("HOLIWIS")
}


boton3.onclick=function(){
    alert("hello!!!!!")
}

boton3.onclick=function(event){
    console.log(event);
    console.log(event.currentTarget); //HTML

    console.log(event.clientx);//cooordenadas en eje x
    console.log(event.clientY);//cooordenadas en eje y

    console.log(event.type);//tipo CLICK
}

//Dom
//usar event handler and addEventListener
let boton4=document.getElementById("boton4");
boton4.addEventListener("click",function(){
    alert("SENA");
})
boton4.addEventListener("click",function(){
    alert("ADSO");
})

//fecha actual
let botonFecha=document.getElementById("botonFecha");
let fecha=document.getElementById("fecha");

botonFecha.addEventListener("click", function(){
    fecha.innerText=Date();
})

//mouseover and mouseout

let box=document.getElementById("box");
box.addEventListener("mouseover", function(){
    box.innerText="MOUSE ENCIMA";
    box.style.backgroundColor="green";
})

box.addEventListener("mouseout", function(){
    box.innerText="MOUSE AFUERA";
    box.style.backgroundColor="orange";
})

box.addEventListener("mousemove", function(){
    
})

//move on

let cursor=document.getElementById("cursor");

document.addEventListener("mousemove",function(event){
    cursor.innerText="coordenada X:" + event.clientX + "coordenada  Y:" + event.clientY
});

//eventos de teclado
let tecla=document.getElementById("tecla");
let mostrarTecla=document.getElementById("mostrarTecla");

tecla.addEventListener("keydown",function (event){
    mostrarTecla.innerText="TU PRESIONASTE LA TECLA:" + event.key;

});


function cargarPagina(){
    alert("Se ha cargado la pagina completa")
}
