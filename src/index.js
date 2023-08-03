// import { encode } from "./cipher.js";
// import { decode } from "./cipher.js";
import cipher from "./cipher.js";

document.getElementById("inicio").style.display = "block";
document.getElementById("empezarCifrar").style.display = "none";
document.getElementById("textoCifrado").style.display = "none";
document.getElementById("empezarDescifrar").style.display = "none";
document.getElementById("textoDescifrado").style.display = "none";

// division para poder ver todas las funciones que le estoy intentando anadir a un solo botón
function resetearCajaTexto() {
  document.getElementById("cajaTexto").value = "";
}

function resetearOffset() {
  document.getElementById("lugaresOffset").value = "";
}

function empezarCifrarF() {
  resetearCajaTexto();
  document.getElementById("inicio").style.display = "none";
  document.getElementById("empezarCifrar").style.display = "block";
}

function empezarCifrarConReset() {
  empezarCifrarF();
  resetearOffset();
}

document
  .getElementById("empezarCifrarB")
  .addEventListener("click", empezarCifrarConReset);

// division
function cifrarF() {
  const textoPorCifrar = document.getElementById("cajaTexto").value;
  const offset = parseInt(document.getElementById("lugaresOffset").value);

  // Realizar el cifrado (utilizando la función cipher de cipher.js)
  const textoCifradoC = cipher.encode(offset, textoPorCifrar);
  // console.log(cipher.encode(offset, textoPorCifrar));
  // Mostrar el texto cifrado
  const parrafoCifrado = document
    .getElementById("textoCifrado")
    .querySelector("p");
  parrafoCifrado.textContent = textoCifradoC;

  // Para ver la sección de "textoCifrado"
  document.getElementById("empezarCifrar").style.display = "none";
  document.getElementById("textoCifrado").style.display = "block";
}

document.getElementById("cifrarB").addEventListener("click", cifrarF);

function inicioF() {
  document.getElementById("textoCifrado").style.display = "none";
  document.getElementById("textoDescifrado").style.display = "none";
  document.getElementById("inicio").style.display = "block";
}

document.getElementById("inicioB").addEventListener("click", inicioF);

// función combinada para resetear texto cada vez que se quiera descifrar un nuevo texto
function resetearCajaTexto2() {
  document.getElementById("cajaTexto2").value = "";
}

function resetearOffset2() {
  document.getElementById("lugaresOffset2").value = "";
}

function empezarDescifrarF() {
  resetearCajaTexto2();
  document.getElementById("textoCifrado").style.display = "none";
  document.getElementById("empezarDescifrar").style.display = "block";
}

function empezarDescifrarConReset() {
  empezarDescifrarF();
  resetearOffset2();
}

document
  .getElementById("empezarDescifrarB")
  .addEventListener("click", empezarDescifrarConReset);

document
  .getElementById("empezarDescifrarB")
  .addEventListener("click", empezarDescifrarF);

// aquí empieza la función de descifrado

function descifrarF() {
  const textoPorDescifrar = document.getElementById("cajaTexto2").value;
  const offset2 = parseInt(document.getElementById("lugaresOffset2").value);

  // Realizar el descifrado (utilizando la función cipher de cipher.js)
  const textoDescifradoC = cipher.decode(offset2, textoPorDescifrar);

  // Mostrar el texto cifrado
  const parrafoDescifrado = document
    .getElementById("textoDescifrado")
    .querySelector("p");
  parrafoDescifrado.textContent = textoDescifradoC;

  // Para ver la sección de "textoCifrado"
  document.getElementById("empezarDescifrar").style.display = "none";
  document.getElementById("textoDescifrado").style.display = "block";
}

document.getElementById("descifrarB").addEventListener("click", descifrarF);

// reutilizando formula de inicio, únicamente añadiéndole el display de esta sección a la función original
document.getElementById("inicioB2").addEventListener("click", inicioF);
