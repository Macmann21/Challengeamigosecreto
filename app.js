// let
let listaAmigos = [];

const enterNombre = document.getElementById('amigo');
const mostrarLista = document.getElementById('listaAmigos');
const resultadoUI = document.getElementById('resultado');
const añadirBoton = document.querySelector('.button-add');
const reiniciarBtn = document.querySelector('.button-riniciar');

function asignarMensaje(elemento, mensaje) {
  document.querySelector(elemento).innerHTML = mensaje;
}

function agregarAmigo() {
  const nombre = enterNombre.value;

  if (nombre === '') {
    alert("Ingresa un nombre");
    return;
  }

  if (listaAmigos.includes(nombre)) {
    alert("Nombre invalido");
    limpiarEntry();
    return;
  }

  listaAmigos.push(nombre);
  listaNombres();
  limpiarEntry();
}

function listaNombres() {
  let viewListado = '';

  for (let i = 0; i < listaAmigos.length; i++) {
    const nombre = listaAmigos[i];
    viewListado += `<li>${nombre}</li>`;
  }

  mostrarLista.innerHTML = viewListado; 
}

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    asignarMensaje('#resultado', '<li>El mínimo es 2 amigos.</li>');
    return;
  }

  const nombRand = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[nombRand];

  asignarMensaje('#resultado', `<li>¡El amigo secreto sorteado es: <b>${amigoSorteado}</b>!</li>`);
}

enterNombre.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    añadirBoton.click();
  }
});

function limpiarEntry() {
  enterNombre.value = '';
  enterNombre.focus();
}

function reiniciarLista(){
    listaAmigos = [];
    mostrarLista.innerHTML = '';
    asignarMensaje('#resultado', '');
    limpiarEntry();
}