import { diffWords } from "diff";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { FuentesTexto, Tema } from "../../constantes";
import TextoCargando from "../carga/TextoCargando";

const ContenedorLecturaResultado = ({ lectura, resultado }) => {
  const [hayResultado, setHayResultado] = useState(false);
  const [comparacion, setComparacion] = useState({});

  useEffect(() => {
    const comp = diffWords(resultado, lectura, { ignoreCase: true });
    setComparacion(comp);
    // TODO: realizar pruebas de comparacion para los signos de puntuacion
    setHayResultado(true);
  }, []);

  return (
    <View style={styles.contenedor}>
      {!hayResultado
        ? <TextoCargando />
        : (
          <Text style={styles.parrafo__resultado}>
            {comparacion.map((el, _) => (
              el.added
                ? <Text key={_} style={{ color: "brown" }}>{el.value}</Text>
                : !el.removed && el.value
            ))}
          </Text>
        )}
    </View>
  );
};
// 1270 + 82 (64 + 28)

export default ContenedorLecturaResultado;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: "row",
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
    ...FuentesTexto.parrafoLarge,
  },
});
