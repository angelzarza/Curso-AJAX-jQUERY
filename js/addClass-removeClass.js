// Asociamos las clases del CSS a las id que concidan y las eliminamos con el atributo especificado.

var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  var x = $("#boton1");
  x.click(asociarClase);
  x = $("#boton2");
  x.click(desasociarClase);
}

function asociarClase() {
  var x = $("#descripcion");
  x.addClass("recuadro");
}

function desasociarClase() {
  var x = $("#descripcion");
  x.removeClass("recuadro");
}
