// mouseover se dispara cuando posicionamos la flecha del ratón sobre un
// elemento HTML.

// mouseout se dispara cuando sacamos la flecha del control.

// mousemove Este evento se desencadenará cuando se mueva el puntero del ratón dentro del elemento
// HTML respectivo.

// mousedown se disparará cuando presionemos alguno de los botones del ratón.

// mouseup se disparará cuando dejemos de presionar el botón.

// El evento “dblclick” que se disparará cuando se presione dos veces seguidas el botón izquierdo del ratón.

var a;
var b;
var d;
c = $(document);
c.ready(inicializarEventos);
d = $(document);

function inicializarEventos() {
  a = $("a");
  a.mouseover(entraRaton);
  a.mouseout(saleRaton);
  c = $(document);
  c.mousemove(moverMouse);
  b = $("td");
  b.mousedown(presionaRaton);
  b.mouseup(sueltaRaton);
  d = $("#recuadro");
  d.dblclick(dobleClic);
}

function entraRaton() {
  $(this).css("background-color", "#ff0");
}

function saleRaton() {
  $(this).css("background-color", "#fff");
}

function moverMouse(event) {
  var c;
  c = $("#corx");
  c.text("coordenada x=" + event.clientX);
  c = $("#cory");
  c.text("coordenada y=" + event.clientY);
}

function presionaRaton() {
  $(this).css("background-color", "#ff0");
}

function sueltaRaton() {
  $(this).css("background-color", "#fff");
}

function dobleClic() {
  d = $(this);
  d.hide();
}
