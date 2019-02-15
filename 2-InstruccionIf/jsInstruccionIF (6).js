function Mostrar() {
    //tomo la edad  
    var edad;
    edad = parseInt(document.getElementById("edad").value);
    if (edad >= 18) {
        alert("Es mayor de edad (adulto)");
    }

    else if (edad <= 13 && edad >= 17) {

        alert("Menor de edad (Adolescente)");
    }
    else {
        alert("Menor de edad (niño)")
    }


}//FIN DE LA FUNCIÓN
