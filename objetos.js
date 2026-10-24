//declarar objetos

let aprendiz={
    nombre:"Alejandra",
    apellido:"Forero",
    correo:"alejandraforero09@gmail.com",
    programa:{
    nombrePrograma:"ADSO",
    duracionPrograma:21,
    codigoPrograma:32331,
    ficha:3233140
    },
  saludar:function(){
    console.log("holii world!!!")
  }
}
console.log(aprendiz);
console.log(aprendiz.programa);
console.log(aprendiz.programa.ficha);
console.log(aprendiz.saludar());

//constructores de funciones con objetos
//modelo objeto constructor
function aprendizSENA(nombre,apellido,correo,programa){
    this.nombre=nombre;
    this.apellido=apellido;
    this.correo=correo;
    this.programa=programa;
    this.saludar=function(nombre){
      return console.log("hola"+ nombre )
    }

}
//instanciar modelo

let aprendiz1=new aprendizSENA("Camila","Avellaneda","camilaavellaned@gmail.com","ADSO");
console.log(aprendiz1);
console.log(typeof aprendiz1);

let aprendiz2=new aprendizSENA("Samuel","Cardenas","samuel123@gmail.com","electronica");
console.log(aprendiz2);
console.log(aprendiz2.nombre);

aprendiz.saludar();

//modificar las propiedaqdes de un objeto

aprendiz.correo="valentinaaa@gmail.com";
console.log(aprendiz.correo);

aprendiz.programa="salud y seguridad en el trabajo";
console.log(aprendiz.programa);

//agregar una propiedad

aprendiz.telefono=3213782510;
console.log(aprendiz);

aprendiz.titulos="tecnico en sistemas";
console.log(aprendiz.titulos);

// eliminar una propiedad en un objeto
delete aprendiz.titulos;
console.log(aprendiz)

//iteracion recorrer cada propiedad del elemento FOR-IN
for(let propiedad in aprendiz){
//imprime un solo valor 
console.log("este es el name"+ aprendiz["nombre"])

  console.log(propiedad);//imprime claves
console.log(aprendiz[propiedad])
}