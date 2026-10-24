//cambiuo del titulo
let tituloNuevo=document.getElementById("titulo");
tituloNuevo.textContent="Analisis y desarrollo de software";

//Cambia el color del párrafo y su tamaño de fuente con style.
let estiloparrafo=document.getElementById("mensaje");
estiloparrafo.style.color ="green";
estiloparrafo.style.fontSize="50px";

//Crea una clase .destacado en un archivo CSS y aplícala al título con classList.add.

tituloNuevo.classList.add("destacado");

//Con un arreglo de cinco competencias, genera en la lista un <li> por cada una usando createElement y appendChild.


let competencias = ["comunicacion", "sst ", "etica", "JAVA", "PYTHON"];
let lista = document.getElementById("lista");

for (let competencia of competencias) 
  let li = document.createElement("li");
  li.innerText = competencia;
  lista.appendChild(li);

