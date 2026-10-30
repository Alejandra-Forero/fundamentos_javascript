//crear una variable para llamar o almacenar los id del html
let entrada = document.getElementById("entrada");
let boton = document.getElementById("btnAgregar");
let lista = document.getElementById("lista");
let contador = document.getElementById("contador");
let caracteres = document.getElementById("caracteres");
let nombres = 0; //se guardan los nombres
//contador de caracters
entrada.addEventListener("input", function () {
  caracteres.textContent = "Caracteres: " + entrada.value.length;
});

boton.addEventListener("click", function () {
  const nombre = entrada.value.trim();  // trim quita espacios sobrantes

  // si esta vacio el input alert.
  if (nombre == "") {
    alert("Escriba un nombre");
    return;
  }
  //  evitar repetidos 
   else if (nombres.includes(nombre.toLowerCase())) {
    alert("El aprendiz " + nombre + "  ya está en la lista");
    entrada.focus();
    return;
  } else{ 
     nombres.push(nombre.toLowerCase());
}
//crea un li por cada nombre ingresado
  const li = document.createElement("li");
  li.textContent = nombre;

  // Paso 2: alternar la clase tachado al hacer clic
  li.addEventListener("click", function () {
    li.classList.toggle("tachado");
  });

  lista.appendChild(li);
  contador.textContent = "Aprendices: " + nombres.length;

 entrada.value = "";
caracteres.textContent = "Caracteres: 0";
});




