// Obtendremos la referencia de la tabla mediante su id
// y después llamaremos al método attr, pasándole como primer parámetro el nombre de
// la propiedad a agregar y como segundo el valor de la propiedad.

var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  var x = $("#boton1");
  x.click(agregarPropiedadBorder);
  x = $("#boton2");
  x.click(recuperarPropiedadBorder);
  x = $("#boton3");
  x.click(eliminarPropiedadBorder);
}

function agregarPropiedadBorder() {
  var x = $("#tabla1");
  x.attr("border", "1");
}

function recuperarPropiedadBorder() {
  var x = $("#tabla1");
  if (x.attr("border") != undefined) alert(x.attr("border"));
  else alert("No está definida la propiedad border en la tabla");
}

function eliminarPropiedadBorder() {
  var x = $("#tabla1");
  x.removeAttr("border");
}
