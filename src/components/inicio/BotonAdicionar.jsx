import { TouchableOpacity, StyleSheet, View } from "react-native";
import IconOutline from "../icons/IconOutline";
import { Colores, Tema } from "../../constantes";

const BotonAdicionar = ({ onPress }) => {
  return (
    <View style={styles.icon__contenedor}>
      <TouchableOpacity onPress={onPress} style={styles.icon__adicionar}>
        <IconOutline
          size={40}
          style={{ color: Colores.secundario }}
          name="add"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon__contenedor: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  icon__adicionar: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    elevation: 5,
    backgroundColor: Colores.blanco,
    borderRadius: Tema.borderRadius,
  },
});

export default BotonAdicionar;
