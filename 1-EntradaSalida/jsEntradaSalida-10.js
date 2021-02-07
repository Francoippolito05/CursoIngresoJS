/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let importeFinal;
	let descuento;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento= importe * 0.25;
	//descuento = importe * 25 /100;

	importeFinal= importe - descuento;
	//importefinal= importe * 0.75;
	//importefinal= importe - (importe * 0.25);

  document.getElementById("txtIdResultado").value = importeFinal;





}
