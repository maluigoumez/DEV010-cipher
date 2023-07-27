export function cipher(textoPorCifrar, offset) {
  let cipherText = "";

  // loop para asegurarnos que la función trabaja con cada uno de los caracteres que se encuentra
  for (let i = 0; i < textoPorCifrar.length; i++) {
    // aquí usamos 'char' como la constante de un caracter a la vez del texto insertado en la textarea
    const char = textoPorCifrar[i];

    // esta parte de la función checa si se trata de un caracter del alfabeto, ya sea mayúscula o minúscula
    const isAlphabetLetter = /^[A-Za-z]$/.test(char);

    // if para que la función corra sólo en el caso de encontrarse con un caracter del alfabeto ya sea mayúscula o minúscula
    if (isAlphabetLetter) {
      const base =
        char.toUpperCase() === char ? "A".charCodeAt(0) : "a".charCodeAt(0);
      const charCode = char.charCodeAt(0);
      const shiftedCharCode = ((charCode - base + offset) % 26) + base;
      cipherText += String.fromCharCode(shiftedCharCode);
    } else {
      // contraparte de la funcion if para indicar que si se encuentra cualquier otro caracter que no sea alfabético se quedará sin cambios
      cipherText += char;
    }
  }

  return cipherText;
}
