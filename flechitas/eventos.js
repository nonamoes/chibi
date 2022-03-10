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

//Haciendolo con un SWITCH:
function dibujarTeclado(evento) {
    switch (evento.keyCode) {
        case teclas.DOWN:
            console.log("vamos pa' DOWN");
        break;

        case teclas.UP:
            console.log("vamos pa' UP");
        break;

        case teclas.LEFT:
            console.log("vamos pa' LEFT");
        break;

        case teclas.RIGHT:
            console.log("vamos pa' RIGHT");
        break;
    default:
        console.log("otra tecla mijo");
    break;

    }
}