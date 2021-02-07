/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let tempeF;
	let tempeC;

	tempeF = parseFloat(document.getElementById("txtIdTemperatura").value);
	tempeC = (tempeF - 32) /1.8;


	alert( tempeF + " grados Fahrenheit equivalen a " + tempeC.toFixed(2) + " grados centígrados ");


}

function CentigradosFahrenheit () 
{
	let tempeF;
	let tempeC;
	tempeC = parseFloat(document.getElementById("txtIdTemperatura").value);
	tempeF =  tempeC * 1.8 + 32;


	alert( tempeC + " grados centígrados equivalen a " + tempeF.toFixed(2) + " grados Fahrenheit ");



}
