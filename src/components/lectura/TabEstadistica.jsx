import { View, Text, StyleSheet } from "react-native";
import { FuentesTexto } from "../../constantes";
const TabEstadistica = ({ titulo, valor, color }) => {
  return (
    <View>
      <Text style={[styles.texto, { color }]}>{titulo}</Text>
      <Text style={[styles.texto, { color }]}>{valor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    ...FuentesTexto.parrafo,
    textAlign: "center",
  },
});
export default TabEstadistica;
