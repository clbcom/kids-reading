import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Colores, Fondos, FuentesTexto, Tema } from "../../constantes";
import ViewBackgroundImage from "../backgrounds/ViewBackgroundImage";

const TarjetaContenido = ({ titulo, lectura }) => {
  const [mostrarTodo, setMostrarTodo] = useState(false);

  return (
    <View style={styles.tarjeta__contenido}>
      <ViewBackgroundImage
        resizeMode="cover"
        opacity={0.4}
        source={Fondos.tarjeta2}
        style={styles.titulo__contenedor}
      >
        <Text style={styles.titulo_texto}>{titulo}</Text>
      </ViewBackgroundImage>
      {mostrarTodo && (
        <View>
          <Text style={styles.descripcion__texto}>{lectura}</Text>
        </View>
      )}
      <View style={styles.tarjeta__informacion}>
        <View style={styles.tarjeta__informacion__boton_texto}>
          <Text style={styles.tarjeta__informacion__texto}>Palabras: {0}</Text>
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
    flex: 1,
    backgroundColor: Colores.blanco,
    overflow: "hidden",
    elevation: 8,
    margin: Tema.margin,
    borderRadius: Tema.borderRadius,
  },
  titulo__contenedor: {
    backgroundColor: Colores.primario,
  },
  titulo_texto: {
    ...FuentesTexto.titulo,
    textAlign: "center",
    padding: Tema.padding,
    color: Colores.blanco,
  },
  descripcion__texto: {
    ...FuentesTexto.parrafo,
    padding: Tema.padding,
    textAlign: "justify",
    alignContent: "center",
  },
  tarjeta__informacion: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopColor: Colores.primario,
    borderStyle: "solid",
    borderTopWidth: 1,
  },
  tarjeta__informacion__boton_texto: {
    flex: 1,
    alignItems: "center",
    padding: Tema.padding,
  },
  tarjeta__informacion__texto: {
    ...FuentesTexto.parrafoSmall,
  },
  tarjeta__informacion__vermas: {
    color: Colores.primario,
  },
});

export default TarjetaContenido;
