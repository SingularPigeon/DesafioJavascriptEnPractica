// Declara la variable que tomará el elemento formulario.

let form = document.getElementById("formulario");

// Agregar un listener para el evento "submit" del formulario.
form.addEventListener("submit", (event) => {

  // Prevenir el comportamiento predeterminado del formulario antes de que sea llenado.
  event.preventDefault();

  // Limpiar cualquier mensaje de error previo
  limpiarError();

  // Obtener los valores de los campos del formulario.
  let nombre = document.getElementById("nombre").value;
  let asunto = document.getElementById("asunto").value;
  let mensaje = document.getElementById("mensaje").value;

  // Validar los datos del formulario,
  const valido = validacionDatos(nombre, asunto, mensaje);

  // Si los datos son válidos, mostrar el mensaje de éxito y limpiar el formulario.
  if (valido) {
    let resultado = document.querySelector(".resultado");
    resultado.innerText = "¡Mensaje Enviado con éxito!";
    document.getElementById("formulario").reset();
  }
});

// Función para validar los datos del formulario con regex para español que incluye puntos, comas y espacios.
function validacionDatos(nombre, asunto, mensaje) {
  const regNom = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\.\s]+$/i;
  const regAsunto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/i;
  const regMensaje = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\.\,\s]+$/i;

  // Validar el campo nombre, asunto y mensaje y mostrar mensaje de error si no es válido
  if (!regNom.test(nombre)) {
    document.querySelector(".errorNombre").innerText =
      "El nombre es requerido. Escribir solo caracteres alfabéticos";
  }

  if (!regAsunto.test(asunto)) {
    document.querySelector(".errorAsunto").innerText =
      "El asunto es requerido. Escribir solo caracteres alfabéticos";
  }

  if (!regMensaje.test(mensaje)) {
    document.querySelector(".errorMensaje").innerText =
      "El mensaje es requerido. Escribir solo caracteres alfabéticos";
  }
// Retornar verdadero si todos los campos son válidos, falso en caso contrario
  return (
    regNom.test(nombre) && regAsunto.test(asunto) && regMensaje.test(mensaje)
  );
}
// Función para limpiar los mensajes de error
function limpiarError() {
  let errNom = document.querySelector(".errorNombre");
  let errAsunto = document.querySelector(".errorAsunto");
  let errMensaje = document.querySelector(".errorMensaje");

  errNom.innerText = "";
  errAsunto.innerText = "";
  errMensaje.innerText = "";
}
