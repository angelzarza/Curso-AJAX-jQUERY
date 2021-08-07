// Con los metodos hide, show, fadeOut podemos ocultar, mostar o crear una transición a diferentes elementos.

// Lo muestra u oculta de forma instantánea: show(), hide(), fadeOut() y fadeIn().

// Lo muestra u oculta con una animación rápida: show(“fast”), hide(“fast”), …

// Lo muestra u oculta con una animación normal: show(“normal”), hide(“normal”), …

// Lo muestra u oculta con una animación lenta: show(“slow”), hide(“slow”), …

// Lo muestra u oculta con una animación que tarda tantos milisegundos como le
// indicamos: show([cantidad de milisegundos]) igual con el resto de metodos…

// Lo muestra u oculta con una animación que tarda tantos milisegundos como le
// indicamos y ejecuta al final la función que le pasamos como segundo parámetro:
// show([cantidad de milisegundos],[función]) igual con el resto de metodos…

// Con este metodo logramos cambiar la opacidad del elemento,
// fadeTo([velocidad],[valor de opacidad],[función]) Esta
// segunda estructura de la función podemos pasarle un tercer parámetro, que
// ejecutará una función cuando finalice la transición.

// El método toggle() realiza la misma acción que hide y show, pero en una sola declaración, 
//es decir, si está visible pasa a oculto y si se encuentra oculto pasa a visible.

var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  var x = $("#boton1");
  x.click(ocultarRecuadroHide);
  x = $("#boton2");
  x.click(mostrarRecuadroShow);
  x = $("#boton3");
  x.click(ocultarRecuadroFadeOut);
  x = $("#boton4");
  x.click(mostrarRecuadroFadeIn);
  x = $("#boton5");
  x.click(opacidadRecuadro);
  x = $("#boton6");
  x.click(toggleRecuadro);
}

function ocultarRecuadroHide() {
  var x = $("#descripcion");
  x.hide("slow");
}

function mostrarRecuadroShow() {
  var x = $("#descripcion");
  x.show("fast");
}

function ocultarRecuadroFadeOut() {
  var x = $("#descripcion");
  x.fadeOut("slow");
}

function mostrarRecuadroFadeIn() {
  var x = $("#descripcion");
  x.fadeIn("slow");
}

function opacidadRecuadro() {
  var x = $("#descripcion");
  x.fadeTo("slow", 0.5);
}

function toggleRecuadro() {
  var x = $("#descripcion");
  x.toggle("slow");
}