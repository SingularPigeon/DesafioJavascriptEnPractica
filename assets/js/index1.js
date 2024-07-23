let form = document.getElementById("formulario")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  limpiarError();

  let nombre = document.getElementById("nombre").value
  let asunto = document.getElementById("asunto").value
  let mensaje = document.getElementById("mensaje").value

  const esValido = validacionDatos(nombre, asunto, mensaje)

  console.log(esValido)
  if (esValido) {
    alert("¡Mensaje enviado con exito!")
    document.write(`¡Mensaje enviado con exito!`)
  }
})

function validacionDatos(nombre, asunto, mensaje) {
  const regNom = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/i
  const regAsunto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/i
  const regMensaje = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/i

  if (!regNom.test(nombre)) {
    document.querySelector(".errorNombre").innerText = 'El nombre es requerido. Escribir solo caracteres alfabéticos'
  }

  if (!regAsunto.test(asunto)) {
    document.querySelector(".errorAsunto").innerText = 'El asunto es requerido. Escribir solo caracteres alfabéticos'
  }

  if (!regMensaje.test(mensaje)) {
    document.querySelector(".errorMensaje").innerText = 'El mensaje es requerido. Escribir solo caracteres alfabéticos'
  }

  return regNom.test(nombre) && regAsunto.test(asunto) && regMensaje.test(mensaje)
}

function limpiarError() {
  let errNom = document.querySelector(".errorNombre")
  let errAsunto = document.querySelector(".errorAsunto")
  let errMensaje = document.querySelector(".errorMensaje")

  errNom.innerText = ''
  errAsunto.innerText = ''
  errMensaje.innerText = ''
}

