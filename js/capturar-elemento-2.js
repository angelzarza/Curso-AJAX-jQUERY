var x;

// Con el simbolo $ llamamos a una jquery que asignara el DOM de (document) a la variable (x).
// Con (x.ready) esperamos a que la web cargue para ejecutar la funcion que va sin parentesis.
x = $(document);
x.ready(inicializarEventos);

// Accedemos a la id y ejecutamos las acciones.
function inicializarEventos() {
  var x;
  x = $("#titulo1");
  x.click(presionTitulo1);
  x = $("#titulo2");
  x.click(presionTitulo2);

  // Accedemos mediante el tag global
  x = $("h2");
  x.click(presionTitulo3);
}

function presionTitulo1() {
  var x;
  x = $("#titulo1");
  x.css("color", "#ff0000");
  x.css("background-color", "#ffff00");
  x.css("font-family", "Courier");
}

function presionTitulo2() {
  var x;
  x = $("#titulo2");
  x.css("color", "#ffff00");
  x.css("background-color", "#ff0000");
  x.css("font-family", "Arial");
}

function presionTitulo3() {
  var x;
  x = $("h2");
  x.css("color", "#ffff00");
  x.css("background-color", "blue");
  x.css("font-family", "Arial");
}

