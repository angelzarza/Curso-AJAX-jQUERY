// Realizará la iteración por los elementos, es decir, asociará una función que se ejecutará 
// por cada elemento que contenga la lista del objeto jQuery.

// Lo primero obtenemos la referencia del párrafo a procesar mediante la función $ y
// pasando this como parámetro.

var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  var x;
  x = $("#parrafos p");
  x.each(resaltarParrafos);
}

function resaltarParrafos() {
  var x = $(this);
  if (x.text().length < 100) {
    x.css("background-color", "#ff0");
  } else {
    x.css("background-color", "#f00");
  }
}
