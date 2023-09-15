import { View, StyleSheet } from "react-native";
import ContenedorBotones from "./ContenedorBotones";
import ContenedorLectura from "./ContenedorLectura";
import { LecturaActualProvider } from "../../datos/LecturaActualContext";

const InicioMicrofono = () => {
  return (
    <LecturaActualProvider>
      <View style={styles.contenedor}>
        <ContenedorLectura />
        <ContenedorBotones />
      </View>
    </LecturaActualProvider>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default InicioMicrofono;
