/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numeroUno;
    var numeroDos;
    var sumar;
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    numeroDos=parseInt(document.getElementById("numeroDos").value);
    sumar=(numeroUno+numeroDos);
    alert("Su resultado es "+ sumar);

}

function restar()
{
    var numeroUno;
    var numeroDos;
    var restar;
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    numeroDOs=parseInt(document.getElementById("numeroDOs").value);
    restar=(numeroUno-numeroDos);
    alert("Su resultado es " + restar);

	
}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var multiplicar;
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    numeroDOs=parseInt(document.getElementById("numeroDOs").value);
    multiplicar=(numeroUno*numeroDos);
    alert("Su resultado es " + multiplicar);
	
}

function dividir()
{
    var numeroUno;
    var numeroDos;
    var dividir;
    numeroUno=parseInt(document.getElementById("numeroUno").value);
    numeroDOs=parseInt(document.getElementById("numeroDOs").value);
    dividir=(numeroUno/numeroDos);
    alert("Su resultado es " + dividir);
	
}

