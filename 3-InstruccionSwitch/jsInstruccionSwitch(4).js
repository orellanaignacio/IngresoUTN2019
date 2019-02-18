function Mostrar() {
    //tomo el mes 
    var mesDelAnio = document.getElementById('mes').value;
    switch (mesDelAnio) {
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("31 días");
            break;
        case "Febrero":
            alert("28 días");
            break;
        default:
            alert("30 días");
            break;


    }




}//FIN DE LA FUNCIÓN