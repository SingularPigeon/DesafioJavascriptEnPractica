//Declara la variable apartir del id "caja" selecionada del DOM.
let caja = document.getElementById('caja');

// Función que cambia el color de fondo el elemento caja.
function cambiarColor(color) {
    caja.style.backgroundColor = color;
}
// Eventos. Se obtiene el color de fondo de cada botón con el evento 'click' llama a la función cambiaColor.
document.getElementById('btn-1').addEventListener('click', () => cambiarColor('#e53e3e'));
document.getElementById('btn-2').addEventListener('click', () => cambiarColor('#dd6b20'));
document.getElementById('btn-3').addEventListener('click', () => cambiarColor('#faf089'));
document.getElementById('btn-4').addEventListener('click', () => cambiarColor('#48bb78'));
document.getElementById('btn-5').addEventListener('click', () => cambiarColor('#81e6d9'));
document.getElementById('btn-6').addEventListener('click', () => cambiarColor('#d53f8c'));



// let caja = document.getElementById('caja');

// document.getElementById('btn-1').addEventListener('click',() => {
//     caja.style.backgroundColor = '#e53e3e';
// });

// document.getElementById('btn-2').addEventListener('click',() => {
//     caja.style.backgroundColor = '#dd6b20';
// });

// document.getElementById('btn-3').addEventListener('click',() => {
//     caja.style.backgroundColor = '#faf089';
// });

// document.getElementById('btn-4').addEventListener('click',() => {
//     caja.style.backgroundColor = '#48bb78';
// });

// document.getElementById('btn-5').addEventListener('click',() => {
//     caja.style.backgroundColor = '#81e6d9';
// });

// document.getElementById('btn-6').addEventListener('click',() => {
//     caja.style.backgroundColor = '#d53f8c';
// })
