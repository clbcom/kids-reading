import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FuentesTexto, Tema, Colores } from "../../constantes";
import { useLecturaActual } from "../../datos/LecturaActualContext";
import { contadorDePalabras } from "../../util/Palabras";
import TabEstadistica from "./TabEstadistica";

const ContenedorLectura = () => {
  const [lecturaActual] = useLecturaActual();
  const [numPalabras, setNumPalabras] = useState(0);

  useEffect(() => {
    if (lecturaActual) {
      setNumPalabras(contadorDePalabras(lecturaActual.lectura));
    }
  }, [lecturaActual]);
  return (
    <View style={styles.contenedor__lectura}>
      <View style={styles.contenedor__titulo}>
        <Text style={styles.contenedor__lectura__titulo}>
          {lecturaActual && lecturaActual.titulo}
        </Text>
      </View>
      <ScrollView style={styles.contenedor__lectura__texto}>
        <Text
          style={[
            {
              ...FuentesTexto.parrafoLarge,
            },
          ]}
        >
          {lecturaActual && lecturaActual.lectura}
        </Text>
      </ScrollView>
      <View style={styles.contenedor__estadisticas}>
        <TabEstadistica titulo="Palabras" valor={numPalabras} />
        <TabEstadistica color={Colores.danger} titulo="Errores" valor={0} />
        <TabEstadistica color={Colores.success} titulo="Progreso" valor={0} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor__lectura: {
    flex: 5,
    overflow: "hidden",
  },
  contenedor__titulo: {
    marginHorizontal: Tema.margin,
    backgroundColor: Colores.azulMedio,
    borderBottomStartRadius: Tema.borderRadius,
    borderBottomEndRadius: Tema.borderRadius,
  },
  contenedor__lectura__titulo: {
    ...FuentesTexto.titulo,
    padding: Tema.padding,
    textAlign: "center",
    color: Colores.secundario,
  },
  contenedor__lectura__texto: {
    flex: 1,
    backgroundColor: Colores.blanco,
    margin: Tema.margin,
    borderRadius: Tema.borderRadius,
    borderColor: `${Colores.primario}af`,
    borderWidth: 1,
    borderStyle: "solid",
    paddingTop: Tema.padding,
    paddingHorizontal: Tema.padding,
  },
  contenedor__estadisticas: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colores.blanco,
    marginHorizontal: Tema.margin,
    borderRadius: Tema.borderRadius,
    borderColor: `${Colores.primario}af`,
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export default ContenedorLectura;
