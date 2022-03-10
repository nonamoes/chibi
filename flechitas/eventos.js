//json
var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

console.log(teclas);
document.addEventListener("keyup", dibujarTeclado); //cuenta cada que suelto la tecla
//document.addEventListener("keydown", dibujarTeclado); 

// function dibujarTeclado(evento) {
//     //console.log("Tecla oplimida"); //Aqui me da numeros de veces que oprimi
//     //console.log(evento); //me da informacion de la tecla
//     console.log(evento.keyCode); //aqui me da el keycode en numero de tecla oprimida.
//     if (evento.keyCode == teclas.UP){
//         console.log("vamos pa' up");
//     }
//     if (evento.keyCode == teclas.DOWN){
//         console.log("vamos pa' DOWN");
//     }
//     if (evento.keyCode == teclas.LEFT){
//         console.log("vamos pa' Left");
//     }
//     if (evento.keyCode == teclas.RIGHT){
//         console.log("vamos pa' Right");
//     }
// }

var cuadrito = document.getElementById("area_de_dibujo"); //Identificamos como areaDibujo al canvas o lienzo de HTML.
var papel = cuadrito.getContext("2d"); //Defino el context.
var x = 100;
var y = 100;
dibujarLinea("pink", x-1, y-1, x+1,y+1, papel);  // es una linea pero se visualiza como un puntito


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}



//Haciendolo con un SWITCH:
function dibujarTeclado(evento) {
    var colorshito="purple";
    var movimiento = 10; //se puede hacer mas corto por ejemplo 5

    switch (evento.keyCode) {
        case teclas.DOWN:
            dibujarLinea(colorshito, x, y, x, y+movimiento, papel);
            y= y+movimiento;
            console.log("vamos pa' DOWN");
            break;

        case teclas.UP:
            dibujarLinea(colorshito, x, y, x, y-movimiento,papel);
            y= y-movimiento;
            console.log("vamos pa' UP");
            break;

        case teclas.LEFT:
            dibujarLinea(colorshito, x, y, x-movimiento, y,papel);
            x= x-movimiento;
            console.log("vamos pa' LEFT");
            break;

        case teclas.RIGHT:
            dibujarLinea(colorshito, x, y, x+movimiento, y,papel);
            x= x+movimiento;
            console.log("vamos pa' RIGHT");
            break;
        default:
            console.log("otra tecla mijo");
            break;

    }
}