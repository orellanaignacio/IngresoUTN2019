/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
    var centigrados
    farenheit=parseFloat(document.getElementById("Temperatura").value);
    centigrados=(farenheit-32)*5/9;
    alert(farenheit+"º Farenheit corresponden a "+ centigrados.toFixed(2)+ "º Centigrados")

}

function CentigradosFahrenheit () 
{
var farenheit;
var centigrados;
centigrados=parseFloat(document.getElementById("Temperatura").value);
farenheit=centigrados*9/3+32
alert(centigrados+"º Centígrados corresponden a "+farenheit+ "º Farenheit")

}
