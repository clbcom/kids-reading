const contadorDePalabras = (parrafo) => {
  return separadorDePalabras(parrafo).length;
};

const separadorDePalabras = (parrafo) => {
  let arrayPalabras = parrafo.replaceAll("\n", " ");
  arrayPalabras = arrayPalabras.split(" ");
  return arrayPalabras;
};

export { contadorDePalabras, separadorDePalabras };
