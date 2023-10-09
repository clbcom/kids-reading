import { ScrollView, StyleSheet, Text } from "react-native";
import { FuentesTexto, Tema } from "../../constantes";

const ContenedorLecturaParrafo = ({ lectura }) => {
  return (
    <ScrollView
      style={styles.contenedor__lectura__texto}
    >
      <Text
        style={{
          ...FuentesTexto.parrafoLarge,
          fontSize: Tema.h1,
        }}
      >
        {lectura}
      </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  contenedor__lectura__texto: {
    flex: 1,
    paddingLeft: Tema.paddingLarge,
    paddingRight: Tema.paddingLarge * 2,
    marginTop: Tema.marginLarge * 3,
  },
});

export default ContenedorLecturaParrafo;
