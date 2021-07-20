var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var x;
x = $(document);
x.ready(inicializarEventos);
function inicializarEventos() {
  var x;
  x = $("#boton1");
  x.click(presionBoton);
}
function presionBoton() {
  alert("Se presionó el botón");
}
