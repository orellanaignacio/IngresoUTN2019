/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
	var nombre
    var edad
   nombre=document.getelementbyID("elNombre").value;
    edad=document.getelementbyID("laEdad").value;
    alert("Usted se llama" nombre "y tiene" + edad );



}

