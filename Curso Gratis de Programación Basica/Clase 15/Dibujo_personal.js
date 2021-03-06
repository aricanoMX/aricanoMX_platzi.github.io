var texto = document.getElementById("txt_lineas");
var boton = document.getElementById("button_adarle");
boton = addEventListener("click", actionButton); //Cuando en el evento colocamos parentesis en la función queremos decirle al listener que ejecute la funcion, mientras que si la colocamos sin parentesis, solo estamos referenciando a dicha función, como lo estamos haciendo en el ejemplo.
var cb = document.getElementById("canvas_box"); //GetElementbyId es como podemos llegar a un elemento dento de HTML
var cb2 = document.getElementById("canvas_box2");
var cb3 = document.getElementById("canvas_box3");
var cb4 = document.getElementById("canvas_box4");

var ancho = cb.width; //acá obtenemos el ancho del canvas.
var ancho2 = cb2.width;
var ancho3 = cb3.width;
var ancho4 = cb4.width;

var canvas = cb.getContext("2d");
var canvas2 = cb2.getContext("2d");
var canvas3 = cb3.getContext("2d");
var canvas4 = cb4.getContext("2d");

function dibujarCanvas(color, x_inicial, y_inicial, x_final, y_final) {
  canvas.beginPath();
  canvas.strokeStyle = color; //strokeStyle es una propiedad del objeto lienzo
  canvas.moveTo(x_inicial, y_inicial);
  canvas.lineTo(x_final, y_final);
  canvas.stroke();
  canvas.closePath();
}

function dibujarCanvas2(color2, x_inicial2, y_inicial2, x_final2, y_final2) {
  canvas2.beginPath();
  canvas2.strokeStyle = color2; //strokeStyle es una propiedad del objeto lienzo
  canvas2.moveTo(x_inicial2, y_inicial2);
  canvas2.lineTo(x_final2, y_final2);
  canvas2.stroke();
  canvas2.closePath();
}

function dibujarCanvas(color, x_inicial, y_inicial, x_final, y_final) {
  canvas.beginPath();
  canvas.strokeStyle = color; //strokeStyle es una propiedad del objeto lienzo
  canvas.moveTo(x_inicial, y_inicial);
  canvas.lineTo(x_final, y_final);
  canvas.stroke();
  canvas.closePath();
}

function dibujarCanvas(color, x_inicial, y_inicial, x_final, y_final) {
  canvas.beginPath();
  canvas.strokeStyle = color; //strokeStyle es una propiedad del objeto lienzo
  canvas.moveTo(x_inicial, y_inicial);
  canvas.lineTo(x_final, y_final);
  canvas.stroke();
  canvas.closePath();
}
//---------------------------------------
dibujarCanvas("black", 0, 0, ancho, 0);
dibujarCanvas("black", ancho, 0, ancho, ancho);
dibujarCanvas("black", ancho, ancho, 0, ancho);
dibujarCanvas("black", 0, ancho, 0, 0);
//---------------------------------------
dibujarCanvas("black", 0, 0, ancho2, 0);
dibujarCanvas("black", ancho2, 0, ancho2, ancho2);
dibujarCanvas("black", ancho2, ancho2, 0, ancho2);
dibujarCanvas("black", 0, ancho2, 0, 0);
//---------------------------------------
dibujarCanvas("black", 0, 0, ancho3, 0);
dibujarCanvas("black", ancho3, 0, ancho3, ancho3);
dibujarCanvas("black", ancho3, ancho3, 0, ancho3);
dibujarCanvas("black", 0, ancho3, 0, 0);
//---------------------------------------
dibujarCanvas("black", 0, 0, ancho4, 0);
dibujarCanvas("black", ancho4, 0, ancho4, ancho4);
dibujarCanvas("black", ancho4, ancho4, 0, ancho4);
dibujarCanvas("black", 0, ancho4, 0, 0);
//---------------------------------------

// dibujarCanvas("red", 10, 250, 220, 10);
// dibujarCanvas("orange", 290, 10, 10, 220);

function actionButton() {
  console.log(texto);
  //alert("No me toques ahí..");

  //-------------- CICLOS --------------
  var canvas_limite = parseInt(texto.value); //acá lo que estamos haciendo es colocar recibir el valor ingresado en la caja de texto.
  var linea = 0;
  var espacio = ancho / canvas_limite;
  var x_i, x_f, y_i, y_f;

  for (linea = 0; linea < canvas_limite; linea++) {
    y_i = espacio * linea;
    x_f = espacio * (linea + 1);
    dibujarCanvas("red", 0, y_i, x_f, 300);
  }

  for (linea = 0; linea < canvas_limite; linea++) {
    y_f = espacio * linea;
    x_i = espacio * (linea + 1);
    dibujarCanvas("red", x_i, 0, 300, y_f);
  }

  for (linea = 0; linea < canvas_limite; linea++) {
    y_i = espacio * linea;
    x_f = 300 - espacio * linea;
    dibujarCanvas("red", 0, y_i, x_f, 0);
  }
  for (linea = 0; linea < canvas_limite; linea++) {
    x_i = espacio * linea;
    y_f = 300 - espacio * linea;
    dibujarCanvas("red", x_i, 300, 300, y_f);
  }
  //------------------------------------
}
