var x;
x = $(document);
x.ready(inicializarEventos);

// Con los metodos que contiene jQuery podemos hacer muchas cosas, como por ejemplo cambiar el texto de un 
// parrafo o el contenido de una tabla.
function inicializarEventos() {
  var x = $("#boton1");
  x.click(extraerTexto);
  x = $("#boton2");
  x.click(modificarTexto);
  x = $("#boton3");
  x.click(modificarDatosTabla);
}

function extraerTexto() {
  var x = $("#parrafo1");
  alert(x.text());
}

function modificarTexto() {
  var x = $("#parrafo1");
  x.text("Nuevo texto del párrafo");
}

function modificarDatosTabla() {
  var x = $("td");
  x.text("texto nuevo");
}
