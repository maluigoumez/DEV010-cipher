import { cipher } from "./cipher.js";

document.getElementById("inicio").style.display = "block";
document.getElementById("empezarCifrar").style.display = "none";
document.getElementById("textoCifrado").style.display = "none";

// division para poder ver todas las funciones que le estoy intentando anadir a un solo boton
function resetearCajaTexto() {
  document.getElementById("cajaTexto").value = "";
}

function resetearOffset() {
  document.getElementById("lugaresOffset").value = "";
}

function empezarCifrarF() {
  resetearCajaTexto();
  const section = document.getElementById("inicio");
  section.style.display = "none";
  const section2 = document.getElementById("empezarCifrar");
  section2.style.display = "block";
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

  // Perform encryption (using the cipher function from cipher.js)
  const textoCifradoC = cipher(textoPorCifrar, offset);

  // Display the encrypted text
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
  const section3 = document.getElementById("textoCifrado");
  section3.style.display = "none";
  const section = document.getElementById("inicio");
  section.style.display = "block";
}

document.getElementById("inicioB").addEventListener("click", inicioF);
