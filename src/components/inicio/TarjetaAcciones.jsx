import { View, TouchableOpacity, StyleSheet } from "react-native";
import IconOutline from "../icons/IconOutline";
import { Colores, Tema } from "../../constantes";

const TarjetaAcciones = ({ onPressEditar, onPressEliminar }) => {
  return (
    <View style={styles.tarjeta__acciones}>
      <TouchableOpacity onPress={onPressEliminar} style={styles.tarjeta__boton}>
        <IconOutline style={styles.tarjeta__boton__eliminar} name="trash" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressEditar} style={styles.tarjeta__boton}>
        <IconOutline style={styles.tarjeta__boton__editar} name="create" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tarjeta__acciones: {
    width: "100%",
    height: "100%",
    backgroundColor: Colores.transparente,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tarjeta__boton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Tema.borderRadius,
    overflow: "hidden",
    elevation: 5,
    marginHorizontal: Tema.marginLarge,
  },
  tarjeta__boton__eliminar: {
    backgroundColor: Colores.danger,
    color: Colores.blanco,
    padding: Tema.padding,
    fontSize: Tema.h2,
  },
  tarjeta__boton__editar: {
    padding: Tema.padding,
    backgroundColor: Colores.success,
    color: Colores.blanco,
    fontSize: Tema.h2,
  },
});
export default TarjetaAcciones;
