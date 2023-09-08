import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import IconOutline from "../icons/IconOutline";
import { Amarillo, Blanco, Negro } from "../../colors";
import { useState } from "react";

const BotonAdicionar = ({ onPress }) => {
  const [presionado, setPresionado] = useState(false);

  return (
    <View style={styles.icon__contenedor}>
      <Text
        style={[styles.texto__hover, presionado && styles.show__texto__hover]}
      >
        Adicionar texto
      </Text>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={() => setPresionado(true)}
        onPressOut={() => setPresionado(false)}
        style={styles.icon__adicionar}
      >
        <IconOutline
          size={30}
          style={{ color: Amarillo.primario }}
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
    backgroundColor: Blanco.primario,
    borderRadius: 15,
    elevation: 5,
  },
  texto__hover: {
    display: "none",
    position: "absolute",
    top: -50,
    right: -13,
    backgroundColor: Negro.primario,
    padding: 5,
    width: "150%",
    textAlign: "center",
    borderRadius: 15,
    color: Blanco.primario,
    elevation: 5,
  },
  show__texto__hover: {
    display: "flex",
  },
});

export default BotonAdicionar;
