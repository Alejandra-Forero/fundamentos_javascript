function validarContrasena(){
 let contra1=document.getElementById("contra1");
 let contra2=document.getElementById("contra2");

    if (contra1.value !="" && contra2.value !=""){
        if(contra1.value == contra2.value){
            alert("REGISTRO EXITOSO!!!!!")
            return true;
        }else{
            alert("LAS CONTRASEN1AS NO COINCIDEN!!!!")
        }

    }else{
        alert("espacios no completos")
             return false;

    }
}