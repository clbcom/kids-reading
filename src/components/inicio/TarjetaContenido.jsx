import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Blanco, Azul, Amarillo } from "../../colors";
import { useState } from "react";

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
        <View style={styles.tarjeta__informacion__texto}>
          <Text>Palabras: {numPalabras}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setMostrarTodo((prev) => !prev);
          }}
          style={styles.tarjeta__informacion__texto}
        >
          <Text style={styles.descripcion__texto__vermas}>
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
    backgroundColor: Blanco.tema1,
    borderRadius: 10,
    flex: 1,
  },
  titulo__contenedor: {
    backgroundColor: Azul.tema1,
  },
  titulo_texto: {
    padding: 10,
    color: Amarillo.tema2,
    fontWeight: "bold",
    fontSize: 28,
  },
  descripcion__texto: {
    padding: 10,
    textAlign: "justify",
    alignContent: "center",
    fontSize: 20,
  },
  tarjeta__informacion: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopColor: Blanco.tema5,
    borderStyle: "solid",
    borderTopWidth: 1,
  },
  tarjeta__informacion__texto: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  descripcion__texto__vermas: {
    color: Azul.tema5,
  },
});

export default TarjetaContenido;
