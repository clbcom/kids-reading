const contadorDePalabras = (
  parrafo,
  options = { ignoraSignosPuntuacion: false },
) => {
  if (options.ignoraSignosPuntuacion) {
    return separadorDePalabrasSinSignosPuntacion(parrafo).length;
  }
  return separadorDePalabras(parrafo).length;
};

const separadorDePalabras = (parrafo) => {
  const regEx = /[\n\s\t]+/gm;
  parrafo = parrafo.trim();
  let arrayPalabras = parrafo.replaceAll(regEx, " ");
  arrayPalabras = arrayPalabras.split(" ");
  return arrayPalabras;
};

const separadorDePalabrasSinSignosPuntacion = (parrafo) => {
  const regExSignosPuntacion = /[,.]+/gm;
  parrafo = parrafo.replaceAll(regExSignosPuntacion, "");
  return separadorDePalabras(parrafo);
};

const quitarTildes = (palabra) => {
  let nuevaPalabra = palabra.replaceAll("á", "a");
  nuevaPalabra = nuevaPalabra.replaceAll("é", "e");
  nuevaPalabra = nuevaPalabra.replaceAll("í", "i");
  nuevaPalabra = nuevaPalabra.replaceAll("ó", "o");
  nuevaPalabra = nuevaPalabra.replaceAll("ú", "u");
  return nuevaPalabra;
};

export {
  contadorDePalabras,
  separadorDePalabras,
  separadorDePalabrasSinSignosPuntacion,
};
