import { View, StyleSheet } from "react-native";
import ContenedorBotones from "./ContenedorBotones";
import ContenedorLectura from "./ContenedorLectura";

const InicioMicrofono = () => {
  return (
    <View style={styles.contenedor}>
      <ContenedorLectura />
      <ContenedorBotones />
    </View>
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
