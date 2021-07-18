// Cuando cargamos la página ejecutamos el método JavaScript que
// va a mostrar el contenido de un archivo llamado HolaMundo.txt alojado en el servidor.
// La clave del código anterior es que la petición HTTP y la descarga de los contenidos
// del archivo se realizan sin necesidad de recargar la página.

// function descargaArchivo() {
//   // Obtener la instancia del objeto XMLHttpRequest
//   if (window.XMLHttpRequest) {
//     peticion_http = new XMLHttpRequest();
//   } else if (window.ActiveXObject) {
//     // Los navegadores obsoletos como Internet Explorer 6 y anteriores implementan el
//     // objeto XMLHttpRequest como un objeto de tipo ActiveX.
//     peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
//   }
//   // Preparar la funcion de respuesta
//   peticion_http.onreadystatechange = muestraContenido;
//   // Realizar peticion HTTP
//   peticion_http.open("GET", "http://localhost:56124/HolaMundo.txt", true);
//   peticion_http.send(null);
//   function muestraContenido() {
//     if (peticion_http.readyState == 4) {
//       if (peticion_http.status == 200) {
//         alert(peticion_http.responseText);
//       }
//     }
//   }
// }
// window.onload = descargaArchivo;

// Ejemplo mejorado del ejemplo anterior

// La respuesta del servidor sólo puede ser uno de los cinco estados definidos por
// las variables anteriores. Así, podemos usar el nombre del estado en vez de su valor
// numérico, cosa que nos facilitará la lectura y el mantenimiento de las aplicaciones.
var READY_STATE_UNINITIALIZED = 0;
var READY_STATE_LOADING = 1;
var READY_STATE_LOADED = 2;
var READY_STATE_INTERACTIVE = 3;
var READY_STATE_COMPLETE = 4;

// Almacenar la instancia del objeto XMLHttpRequest en una variable global, de tal manera que
// todas las funciones que hacen uso de ese objeto va a tener acceso directo al mismo.
var peticion_http;

// Esta función va a admitir tres parámetros:
//  - La URL del contenido que se va a cargar
//  - El método utilizado para realizar la petición HTTP
//  - Una referencia a la función que procesa la respuesta del servidor.
function cargaContenido(url, metodo, funcion) {
  peticion_http = inicializa_xhr();
}
if (peticion_http) {
  peticion_http.onreadystatechange = funcion;
  peticion_http.open(metodo, url, true);
  peticion_http.send(null);
}

// Esta función se va a emplear para encapsular la creación del objeto XMLHttpRequest:
function inicializa_xhr() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
}

// La función muestraContenido(), emplea las variables globales definidas.
function muestraContenido() {
  if (peticion_http.readyState == READY_STATE_COMPLETE) {
    if (peticion_http.status == 200) {
      alert(peticion_http.responseText);
    }
  }
}

// La función descargaArchivo() que va a ser la que realice una llamada a la función cargaContenido() 
// con los parámetros adecuados.
function descargaArchivo() {
  cargaContenido("http://localhost/holamundo.txt", "GET", muestraContenido);
}

window.onload = descargaArchivo;
