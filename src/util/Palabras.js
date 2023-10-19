const contadorDePalabras = (parrafo) => {
  return separadorDePalabras(parrafo).length;
};

const separadorDePalabras = (parrafo) => {
  const regEx = /[\n\s\t]+/gm;
  let arrayPalabras = parrafo.replaceAll(regEx, " ");
  arrayPalabras = arrayPalabras.split(" ");
  return arrayPalabras;
};

const separadorDePalabrasSinSignosPuntacion = (parrafo) => {
  const regExSignosPuntacion = /[,.]+/gm;

  let arrayPalabras = separadorDePalabras(parrafo);
  arrayPalabras = arrayPalabras.map((palabra) => {
    //quitamos todos los signos de puntuacion
    let nuevaPalabra = palabra.replaceAll(regExSignosPuntacion, "");
    // volvemos todas las palabras en minuscula
    nuevaPalabra = nuevaPalabra.toLowerCase();
    // retornamos y quitamos tildes
    return quitarTildes(nuevaPalabra);
  });

  return arrayPalabras;
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
