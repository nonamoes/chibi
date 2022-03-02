var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);  //Estamos referenciando la funcion no ejecutandola por eso no se pone el ()/que en VB es el onClick


var d= document.getElementById("dibujito");
var lienzo = d.getContext("2d");  //Objeto canvas y se hara en 2 D
console.log(lienzo);
var ancho= d.width;  //aqui elegimos el ancho para sacar las lineas



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath(); 
    lienzo.strokeStyle=color;  
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); 
}



function dibujoPorClick()
{
    
    //alert("No me toques ahi");
    //var xxx= parseInt(texto.value);
    var lineas = parseInt(texto.value);
    var l =0;
    var yi, xf;
    var espacio= ancho/lineas;


    for (l=0; l<lineas; l++)
    {
        yi = espacio *l; 
        xf= espacio * (l+1);

        dibujarLinea("pink", 0, yi, xf, 300);
        console.log("linea" + l);
        //l++; //si quiero quede mas espaciado

    }

    dibujarLinea("pink", 1, 1, 1, 299);  //un punto mas si inicia en 0 y un punto menos de los 300 
    dibujarLinea("pink", 1, 299, 299, 299);

}