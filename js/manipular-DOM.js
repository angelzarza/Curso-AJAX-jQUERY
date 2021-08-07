// Para borrar todos los elementos contenidos en una lista, primero obtenemos la referencia de 
// la lista mediante la función $ y seguidamente llamamos al método empty.

// La forma de restaurar la lista de nuevo será utilizando el método html e insertando
// directamente los items a partir del elemento ul.

// Con el método append, añadiremos un elemento al final de la colección de elementos
// del objeto jQuery.

// Mediante el método prepend, añadiremos un elemento al principio de la lista.

// Mediante la función eliminarElementoFinal(),por medio de la propiedad length
// obtendremos la cantidad de elementos que almacena el objeto jQuery y luego mediante
// el método eq (equal) le indicaremos la posición del elemento que necesitamos (debéis
// saber que el este método devuelve otro objeto de tipo jQuery) y por último, para
// borrarlo llamamos al método remove.

// La función eliminarElementoPrincipio() funciona de una forma similar a borrar el último,
// pero no necesitamos saber cuantos elementos almacena el objeto jQuery, ya que
// debemos acceder al primero y eliminarlo mediante el método remove Recordad que el
// primero se almacena en la posición cero.

// La forma de eliminar el primero y segundo elemento que están almacenando el objeto
// jQuery será usando el método lt (less than), que nos devuelve todos los elementos
// menores a la posición que le pasamos como parámetro.

// Para eliminar los dos elementos finales podemos hacerlo de varias formas. Nosotros
// hemos optado por usar el método slice, que retorna un subconjunto de elementos,
// que en este caso al indicarlo con el signo negativo, significa que emoiza por el final
// de la lista, y que contendrá 2 elementos. Posteriormente llamamos al método remove
// para eliminar dichos elementos.

var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  var x;
  x = $("#boton1");
  x.click(eliminarElementos);
  x = $("#boton2");
  x.click(restaurarLista);
  x = $("#boton3");
  x.click(anadirElementoFinal);
  x = $("#boton4");
  x.click(anadirElementoPrincipio);
  x = $("#boton5");
  x.click(eliminarElementoFinal);
  x = $("#boton6");
  x.click(eliminarElementoPrincipio);
  x = $("#boton7");
  x.click(eliminarPrimeroSegundo);
  x = $("#boton8");
  x.click(eliminarDosUltimos);
}

function eliminarElementos() {
  var x;
  x = $("ul");
  x.empty();
}

function restaurarLista() {
  $("ul").html(
    "<li>Primer item.</li><li>Segundo item.</li><li>Tercer item.</li><li>Cuarto item.</li>"
  );
}

function anadirElementoFinal() {
  var x;
  x = $("ul");
  x.append("<li>otro item al final</li>");
}

function anadirElementoPrincipio() {
  var x;
  x = $("ul");
  x.prepend("<li>otro item al principio</li>");
}

function eliminarElementoFinal() {
  var x;
  x = $("li");
  var cantidad = x.length;
  x = x.eq(cantidad - 1);
  x.remove();
}

function eliminarElementoPrincipio() {
  var x;
  x = $("li");
  x = x.eq(0);
  x.remove();
}

function eliminarPrimeroSegundo() {
  var x;
  x = $("ul li:lt(2)");
  x.remove();
}

function eliminarDosUltimos() {
  var x;
  x = $("ul li").slice(-2);
  x.remove();
}
