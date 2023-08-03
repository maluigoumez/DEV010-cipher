function paraNegativos(x, y) {
  // Custom modulo function to handle negative numbers correctly
  return ((x % y) + y) % y;
}

const cipher = {
  encode: function (offset, textoPorCifrar) {
    if (
      typeof Number(offset) !== "number" ||
      typeof textoPorCifrar !== "string"
    ) {
      throw new TypeError("Argumentos inválidos");
    }
    // typeof Number(desplazamiento) !== 'number': Aquí se convierte la variable deplazamiento en un número utilizando la función Number() y luego se verifica si el tipo de dato resultante es igual a 'number'. Si no es un número, se pasa a la siguiente parte de la condición.
    // typeof string !== 'string': Esta parte verifica si la variable mensaje es de tipo 'string'.
    // Si cualquiera de las dos partes se evalúa como verdadera se lanza un error TypeError con el mensaje "Argumentos inválidos".
    // Este fragmento de código asegura de que los argumentos pasados a una función sean válidos, es decir, que offset sea un número y que string sea una cadena de texto, de lo contrario se indicará un error en pantalla.

    let encodeText = "";

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
        encodeText += String.fromCharCode(shiftedCharCode);
      } else {
        // contraparte de la funcion if para indicar que si se encuentra cualquier otro caracter que no sea alfabético se quedará sin cambios
        encodeText += char;
      }
    }
    // console.log(encodeText);
    return encodeText;
  },
  decode: function (offset2, textoPorDescifrar) {
    if (
      typeof Number(offset2) !== "number" ||
      typeof textoPorDescifrar !== "string"
    ) {
      throw new TypeError("Argumentos inválidos");
    }

    let decodeText = "";
    for (let i = 0; i < textoPorDescifrar.length; i++) {
      const char = textoPorDescifrar[i];
      const isAlphabetLetter = /^[A-Za-z]$/.test(char);
      if (isAlphabetLetter) {
        const base =
          char.toUpperCase() === char ? "A".charCodeAt(0) : "a".charCodeAt(0);
        const charCode = char.charCodeAt(0);
        const shiftedCharCode =
          paraNegativos(charCode - base - offset2, 26) + base;
        decodeText += String.fromCharCode(shiftedCharCode);
      } else {
        decodeText += char;
      }
    }
    return decodeText;
  },
};
export default cipher;
