/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ancho;
    let largo;
    let alambre;
    let perimetro;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);
    
    perimetro= (ancho + largo) * 2;

    alambre= perimetro * 3;


    alert("se necesitan comprar " + alambre + " de alambre ");





}
function Circulo () 
{
	let perimetro;
	let redio;
	let alambre;
    const PI= 3.14; 
     
    radio=document.getElementById("txtIdRadio").value;
    radio=parseInt(radio);

     perimetro= 2 * PI * radio;

     alambre= perimetro * 3 ;

     alert(" se necesitan comprar " + alambre + " metros de alambre");


}

function Materiales () 
{
	let ancho;
    let largo;
    let cemento;
    let cal;
    let area;

    largo = document.getElementById("txtIdLargo").value;
    largo= parseInt(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho= parseInt(ancho);
    area = largo * ancho;

    cemento = area * 2;
    cal = area * 3;

    alert("para un contra piso de: " + area + " necesito: " + cemento + " bolsas de cemento " + " y " + cal + "bolsas de cal");


}

