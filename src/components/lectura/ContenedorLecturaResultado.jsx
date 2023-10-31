import { diffWords } from "diff";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { Colores, FuentesTexto, Tema } from "../../constantes";
import TextoCargando from "../carga/TextoCargando";
import { contadorDePalabras } from "../../util/Palabras";

const ContenedorLecturaResultado = ({ lectura, resultado }) => {
  const [hayResultado, setHayResultado] = useState(false);
  const [comparacion, setComparacion] = useState({});
  const [numeroPalabras, setNumeroPalabras] = useState(0);
  const [numeroCorrectos, setNumeroCorrectos] = useState(0);
  const [numeroErrores, setNumeroErrores] = useState(0);

  const obtenerNumeroDeErrores = (resultadoComparacion) => {
    const resultadoFiltrado = resultadoComparacion.filter((
      { added, value },
    ) => (added && value !== "," && value !== "."));

    const numErrores = resultadoFiltrado.reduce(
      (acumulador, actual) =>
        acumulador +
        contadorDePalabras(actual.value, { ignoraSignosPuntuacion: true }),
      0,
    );
    return numErrores;
  };

  useEffect(() => {
    const comp = diffWords(resultado, lectura, { ignoreCase: true });
    const numPalabras = contadorDePalabras(lectura);
    const numErrores = obtenerNumeroDeErrores(comp);
    const numCorrectos = numPalabras - numErrores;
    setNumeroPalabras(numPalabras);
    setNumeroErrores(numErrores);
    setNumeroCorrectos(numCorrectos);
    setComparacion(comp);
    setHayResultado(true);
  }, []);

  return (
    <>
      <ScrollView style={styles.contenedor}>
        {!hayResultado
          ? <TextoCargando />
          : (
            <Text style={styles.parrafo__resultado}>
              {comparacion.map((el, _) => {
                let color = (el.added && el.value !== "," && el.value !== ".")
                  ? Colores.danger
                  : Colores.success;

                return (
                  !el.removed &&
                  (
                    <Text key={_} style={{ color }}>
                      {el.value}
                    </Text>
                  )
                );
              })}
            </Text>
          )}
      </ScrollView>
      <View style={styles.contenedor__estadistica}>
        <View style={styles.item__estadistica}>
          <Text style={[styles.palabra]}>{numeroPalabras}</Text>
          <Text style={[styles.palabra]}>Palabras</Text>
        </View>
        <View style={styles.item__estadistica}>
          <Text style={[styles.palabra, { color: Colores.success }]}>
            {numeroCorrectos}
          </Text>
          <Text style={[styles.palabra, { color: Colores.success }]}>
            Correcto
          </Text>
        </View>
        <View style={styles.item__estadistica}>
          <Text style={[styles.palabra, { color: Colores.danger }]}>
            {numeroErrores}
          </Text>
          <Text style={[styles.palabra, { color: Colores.danger }]}>
            Errores
          </Text>
        </View>
      </View>
    </>
  );
};

export default ContenedorLecturaResultado;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    paddingLeft: Tema.paddingLarge,
    paddingRight: Tema.paddingLarge * 2,
    marginTop: Tema.marginLarge * 3,
    flexWrap: "wrap",
  },
  parrafo__resultado: {
    ...FuentesTexto.parrafoLarge,
    fontSize: Tema.h1,
  },
  palabra: {
    ...FuentesTexto.parrafo,
  },
  contenedor__estadistica: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: Tema.padding,
    marginHorizontal: Tema.marginLarge,
    borderRadius: Tema.borderRadius,
    backgroundColor: `${Colores.blanco}`,
    elevation: 5,
  },

  item__estadistica: {
    alignItems: "center",
  },
});
