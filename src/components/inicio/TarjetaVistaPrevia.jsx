import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Alertas, Amarillo, Azul, Blanco } from "../../colors";
import IconOutline from "../icons/IconOutline";

const TarjetaVistaPrevia = ({ titulo, descripcion, ...otros }) => {
  return (
    <View style={styles.tarjeta}>
      <View style={styles.tarjeta__contenido}>
        <LinearGradient
          colors={[Azul.tema1, Blanco.tema1]}
          locations={[0.1, 1]}
          start={[0.5, 1]}
          end={[1, 1]}
        >
          <Text style={styles.titulo_texto}>{titulo}</Text>
        </LinearGradient>
        <View>
          <Text style={styles.descripcion__texto}>{descripcion}</Text>
        </View>
      </View>
      <View style={styles.tarjeta__acciones}>
        <TouchableOpacity style={styles.tarjeta__boton}>
          <IconOutline style={styles.tarjeta__boton__eliminar} name="trash" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tarjeta__boton}>
          <IconOutline style={styles.tarjeta__boton__editar} name="create" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    backgroundColor: Blanco.tema1,
    margin: 10,
    elevation: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  tarjeta__contenido: {
    flex: 1,
  },
  titulo_texto: {
    padding: 10,
    color: Amarillo.tema1,
    fontWeight: "bold",
    fontSize: 28,
  },
  descripcion__texto: {
    padding: 10,
  },
  tarjeta__acciones: {},
  tarjeta__boton: {
    flex: 1,
    padding: 10,
    backgroundColor: Blanco.tema1,
  },
  tarjeta__boton__eliminar: {
    color: Alertas.danger,
  },
  tarjeta__boton__editar: {
    color: Alertas.success,
  },
});

export default TarjetaVistaPrevia;
