import { View, TouchableOpacity, StyleSheet } from "react-native";
import IconOutline from "../icons/IconOutline";
import { Blanco, Alertas } from "../../colors";

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
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tarjeta__boton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: Blanco.primario,
    marginHorizontal: 20,
  },
  tarjeta__boton__eliminar: {
    backgroundColor: Alertas.danger,
    color: Blanco.primario,
    padding: 10,
    fontSize: 30,
  },
  tarjeta__boton__editar: {
    padding: 10,
    backgroundColor: Alertas.success,
    color: Blanco.primario,
    fontSize: 30,
  },
});
export default TarjetaAcciones;
