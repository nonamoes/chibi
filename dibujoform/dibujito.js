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

var lineas =30;
var l =0;
var yi, xf;

//Esto es con el ciclo WHILE
/*while(l<lineas)
{
    yi = 10 *l;
    xf= 10 * (l+1);

    dibujarLinea("pink", 0, yi, xf, 300);
    console.log("linea" + l);
    l++;

}*/

//Esto es con el ciclo FOR
for (l=0; l<lineas; l++)
{
    yi = 10 *l;
    xf= 10 * (l+1);

    dibujarLinea("pink", 0, yi, xf, 300);
    console.log("linea" + l);
    //l++; //si quiero quede mas espaciado

}

dibujarLinea("pink", 1, 1, 1, 299);  //un punto mas si inicia en 0 y un punto menos de los 300 
dibujarLinea("pink", 1, 299, 299, 299);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); 
    lienzo.strokeStyle=color;  
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); 
}


