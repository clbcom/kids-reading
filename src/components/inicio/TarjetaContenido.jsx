import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Blanco, Azul, Amarillo } from "../../colors";
import { useState } from "react";
import { FontSizes, Fuentes } from "../../fuentes";

const TarjetaContenido = ({ titulo, lectura }) => {
  const [vistaPrevia] = useState(lectura.slice(0, 80) + " ...");
  const [numPalabras] = useState(lectura.split(" ").length);
  const [mostrarTodo, setMostrarTodo] = useState(false);
  return (
    <View style={styles.tarjeta__contenido}>
      <View style={styles.titulo__contenedor}>
        <Text style={styles.titulo_texto}>{titulo}</Text>
      </View>
      <View>
        <Text style={styles.descripcion__texto}>
          {mostrarTodo ? lectura : vistaPrevia}
        </Text>
      </View>
      <View style={styles.tarjeta__informacion}>
        <View style={styles.tarjeta__informacion__boton_texto}>
          <Text style={styles.tarjeta__informacion__texto}>
            Palabras: {numPalabras}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setMostrarTodo((prev) => !prev);
          }}
          style={styles.tarjeta__informacion__boton_texto}
        >
          <Text
            style={[
              styles.tarjeta__informacion__texto,
              styles.tarjeta__informacion__vermas,
            ]}
          >
            {mostrarTodo ? "Ver menos" : "Ver mas"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tarjeta__contenido: {
    margin: 10,
    overflow: "hidden",
    elevation: 8,
    backgroundColor: Blanco.primario,
    borderRadius: 10,
    flex: 1,
  },
  titulo__contenedor: {
    backgroundColor: Azul.primario,
  },
  titulo_texto: {
    textAlign: "center",
    fontFamily: Fuentes.actual,
    padding: 10,
    color: Blanco.primario,
    fontSize: FontSizes.medium,
  },
  descripcion__texto: {
    padding: 10,
    fontFamily: Fuentes.actual,
    fontSize: FontSizes.small,
    textAlign: "justify",
    alignContent: "center",
  },
  tarjeta__informacion: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopColor: Blanco.secundario,
    borderStyle: "solid",
    borderTopWidth: 1,
  },
  tarjeta__informacion__boton_texto: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  tarjeta__informacion__texto: {
    fontFamily: Fuentes.actual,
    fontSize: FontSizes.small,
  },
  tarjeta__informacion__vermas: {
    // color: Azul.secundario,
    color: "#2a91ba",
  },
});

export default TarjetaContenido;
