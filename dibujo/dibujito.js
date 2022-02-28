var d= document.getElementById("dibujito");
var lienzo = d.getContext("2d");  //Objeto canvas y se hara en 2 D
console.log(lienzo);

/* lienzo.beginPath(); //Arrancar un trazo en js
lienzo.strokeStyle="pink";  //atributo, propiedad o variable.
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath(); //fin dibujo
*/


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); 
    lienzo.strokeStyle=color;  
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); 
}

dibujarLinea("pink",10,300,220,10);
dibujarLinea("purple",10,300,220,200);