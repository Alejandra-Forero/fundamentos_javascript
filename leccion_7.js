/** */
let aprendices = [
  { nombre: "Ana", nota: 4.5 },
  { nombre: "Carlos", nota: 2.8 },
  { nombre: "Laura", nota: 3.7 },
  { nombre: "Pedro", nota: 2.5 },
  { nombre: "Sofía", nota: 4.0 }
];

// 2. forEach: mostrar cada aprendiz
console.log("Listado de aprendices:");
aprendices.forEach(a => {
  console.log(`${a.nombre}: ${a.nota}`);
});

// 3. filter: aprobados (nota >= 3.0)
let  aprobados = aprendices.filter(a => a.nota >= 3.0);
console.log("Aprobados:", aprobados);

// 4. map: nombres en mayúscula
let  nombresMayuscula = aprendices.map(a => a.nombre.toUpperCase());
console.log("Nombres en mayúscula:", nombresMayuscula);

// 5. for...of: promedio general
function calcularPromedio(lista) {
  let suma = 0;
  for (let  a of lista) {
    suma += a.nota;
  }
  return suma / lista.length;
}
console.log("Promedio antes:", calcularPromedio(aprendices).toFixed(1));

// 6. push: agregar sexto aprendiz y recalcular
aprendices.push({ nombre: "Marta", nota: 5.0 });
console.log("Promedio después:", calcularPromedio(aprendices).toFixed(1));

// Reto adicional: aprendiz con la nota más alta
let mejor = aprendices[0];
for (let  a of aprendices) {
  if (a.nota > mejor.nota) {
    mejor = a;
  }
}
console.log(`Nota más alta: ${mejor.nombre} (${mejor.nota})`);