// Declara la variable que obtiene elementos del DOM.
const input1 = document.getElementById("valor1");
const input2 = document.getElementById("valor2");
const span = document.querySelector(".resultado");

const sumar = () => {
  // Obtiene valores de los inputs y los convierte a números.
  const valor1 = parseInt(input1.value);
  const valor2 = parseInt(input2.value);

  // Calcula la suma y mostrar el resultado
  const resultado = valor1 + valor2;
  span.innerText = resultado;
};

const restar = () => {
  // Obtiene valores de los inputs y los convierte a números.
  const valor1 = parseInt(input1.value);
  const valor2 = parseInt(input2.value);

  // Calcula la resta y muestra el resultado. Si el resultado es negativo se mostrará 0.
  const resultado = valor1 - valor2;
  let ResultadoResta;
  if (resultado < 0) {
    ResultadoResta = 0;
  } else {
    ResultadoResta = resultado;
  }

  span.innerText = ResultadoResta;
};

// Agrega eventos a los botones
document.getElementById("btn-sumar").addEventListener("click", sumar);
document.getElementById("btn-restar").addEventListener("click", restar);
