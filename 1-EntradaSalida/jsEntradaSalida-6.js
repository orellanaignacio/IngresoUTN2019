/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;
    var numeroDos;
    var resultado
   numeroUno=parseInt(document.getElementById("numeroUno").value);
   numeroDos=parseInt(document.getElementById("numeroDos").value);
   resultado=(numeroUno+numeroDos);
   alert("La suma es "+ resultado);

}

