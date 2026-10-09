//OPERADORES LOGICOS
    //AND && devukve el true si todas las condiciones son verdaderas
        console.log(true && true); //true
        console.log(true && false); //false
        console.log(false && true); //false
        console.log(false && false); //false
        
        let edad =60
        semanasCotizadas=1300;
        console.log(edad >= 62 && semanasCotizadas >= 1300); //false
        
    //OR || devuelve el true si alguna de las condiciones es verdadera 

        console.log(true || true); //true                                          
        console.log(true || false); //true
        console.log(false || true);//true
        console.log(false || false); //false

        let calificacion = 90;
        let asistencia = 0;
        console.log(calificacion >= 70 || asistencia >= 3); //true

    //NOT ! devuelve el valor contrario
        console.log(!true); //false
        console.log(!false); //true
        