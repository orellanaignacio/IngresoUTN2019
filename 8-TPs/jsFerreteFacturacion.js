/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    precioUno=parseFloat(document.getElementById("PrecioUno").value);
    precioDos=parseFloat(document.getElementById("PrecioDos").value);
    precioTres=parseFloat(document.getElementById("PrecioTres").value);
    resultado=(precioUno+precioDos+precioTres);
    alert("La suma es "+resultado);



}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var promedio;
    precioUno=parseFloat(document.getElementById("PrecioUno").value);
    precioDos=parseFloat(document.getElementById("PrecioDos").value);
    precioTres=parseFloat(document.getElementById("PrecioTres").value);
    promedio=(precioUno+precioDos+precioTres)/3;
    alert("El promedio es "+promedio);
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma
    var precioFinal;
    var iva
    precioUno=parseFloat(document.getElementById("PrecioUno").value);
    precioDos=parseFloat(document.getElementById("PrecioDos").value);
    precioTres=parseFloat(document.getElementById("PrecioTres").value);
    suma=(precioUno+precioDos+precioTres);
    iva=suma*21/100;
    precioFinal= iva+suma
    alert("El precio final es "+precioFinal);
	
}