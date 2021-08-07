// Cuando inicialicemos los eventos, únicamente utilizaremos el evento hover para
// cambiar el color de fondo del enlace cuando se posicione el puntero del ratón y
// devolverla al color original cuando se quite.

var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  var x;
  x = $("a");
  x.hover(entraMouse, saleMouse);
}

function entraMouse() {
  $(this).css("background-color", "#ff0");
}

function saleMouse() {
  $(this).css("background-color", "#fff");
}
