var cuadro = document.getElementById("areaDibujo"); //Identificamos como areaDibujo al canvas o lienzo de HTML.
var papel = cuadro.getContext("2d"); //Defino el context.

cuadro.addEventListener("mousedown", lineaInicial); //Cuadro escucha el evento del clic abajo del mouse y ejecuta la función lineaInicial
cuadro.addEventListener("mouseup", finLinea); //Cuadro escucha el evento clic arriba -soltar- y ejecuta finLinea
cuadro.addEventListener("mousemove", lineaMovimiento); //cuadro escucha el mov del mouse y ejecutas lineaMovimiento.

var colorPincel = "pink"; //El color de la linea.
let mouse = false; // La variable mouse por defecto será false porque así lo definí

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) { //Esta es la función base del dibujo.
    lienzo.beginPath();
    lienzo.strokeStyle = colorPincel; //Cambié esta variable por otro nombre
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function lineaInicial() { //Linea inicial me cambia el false por defecto a true.
    mouse = true;
}

function finLinea() { //Esta función me vuelve a poner al mouse como nulo, es decir false.
    mouse = false;
}

function lineaMovimiento(event) { //Esta función dice 
    if (mouse == true) { //Si mouse es true -es decir si está siendo mousedown, va a dibujar.
        dibujarLinea("colorPincel", event.layerX - 1, event.layerY - 1, event.layerX + 1, event.layerY + 1, papel);
    } //Como dibujar
}