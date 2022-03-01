var d= document.getElementById("dibujito");
var lienzo = d.getContext("2d");  //Objeto canvas y se hara en 2 D
console.log(lienzo);

var color1 ="gray";
var color2 = "pink";

//borde
//dibujarLinea(color1, 1, 1, 1, 299);  
dibujarLinea(color1, 1, 299, 299, 299);


// borde superior dibujarLinea(color2, 0, 0, 90, 0);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); 
    lienzo.strokeStyle=color;  
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); 
}

//Axolotlito :3
//dibujarLinea(xi, yi, xf, yf)

// lado izquierdo:
dibujarLinea(color2, 30, 20, 110, 20);
dibujarLinea(color2, 30, 20, 30, 80);
dibujarLinea(color2, 30, 80, 60, 110);
dibujarLinea(color2, 60, 110, 0, 110);
dibujarLinea(color2, 0, 110, 0, 200);
dibujarLinea(color2, 0, 200, 50, 200);
dibujarLinea(color2, 50, 200, 20, 230);
dibujarLinea(color2, 20, 230, 20, 280);
dibujarLinea(color2, 20, 280, 90, 280);
dibujarLinea(color2, 90, 280, 140, 230 );




