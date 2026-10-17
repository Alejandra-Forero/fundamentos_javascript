//CICLOS WHILE
    //while(condicion"mientras la condicion sea verdadera")

    let i=1;
    while (i<=10){
        console.log(i);
        i++;
    }
    //validacion de contrasena
    let contrasena_servidor="admin";
    let contrasena_usuario="admin";

    while(contrasena_usuario !== contrasena_servidor){
        console.log("clave incorrecta intenta de nuevo");
    }
    console.log("bienvenido al sistema");

    let edad=17;
    while (edad<=18) {
        console.log ("eres menor de edad, no puedes entrar");
        edad++;
    }
    console.log ("bienvenido al bar");

    //aspersores de agua


    let cantidad_agua=0;
    while(cantidad_agua <10){
        console.log("riego de plantas con" +cantidad_agua + "litros de agua");
        cantidad_agua++;
    }
    console.log("todas las planrtas han sido regadas");

    //ciclo do-while

    let numero=11;
    do{
        console.log(numero);
        numero++;
    }
    while(numero <=12);

    //sentencia break "permite cerrar un bucle antes de termine"


    for (let i=1; i<=10; i++){
        if (i ===7)
    {
        console.log("se ha alzando el nivel estabelcido, saliendo del bucle");
        break; //sale del bucle
    }
        console.log(i)
    }
    //APP BAR CON CLIENTE
    
    for  (let edad_cliente=19; i<=20; i++){
        if(edad_cliente<18){
            console.log("no puedes entrar al bar eres menor de edad");
            break;
        }else{
            console.log("bienvenidoi al bar");
        }
    }

    //sentencia continue:salta

    for(let i=1; i<=10; i++){
        if (i ===5){
            console.log("se salto el numero")
            continue;
        }
        console.log(i)
    }