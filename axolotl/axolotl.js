var d= document.getElementById("dibujito");
var lienzo = d.getContext("2d");  //Objeto canvas y se hara en 2 D
console.log(lienzo);


lienzo.beginPath(); //Arrancar un trazo en js
lienzo.strokeStyle="pink";  //atributo, propiedad o variable.
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();

