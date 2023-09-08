import { View, Text, TextInput, StyleSheet } from "react-native";
import { Azul, Blanco, Negro } from "../../colors";
import { FontSizes, Fuentes } from "../../fuentes";

const InputConEtiqueta = ({ textarea, children, ...otrosProps }) => {
  return (
    <View style={styles.contenedor__input}>
      <Text style={styles.titulo}>{children}</Text>
      <TextInput
        style={[styles.input, textarea && styles.input__textarea]}
        placeholder={children}
        {...otrosProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor__input: {
    padding: 10,
    width: "90%",
  },
  titulo: {
    fontSize: FontSizes.medium,
    fontFamily: Fuentes.actual,
    marginBottom: 5,
    color: Azul.primario,
  },
  input: {
    fontSize: FontSizes.medium,
    fontFamily: Fuentes.actual,
    borderRadius: 10,
    padding: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: `${Blanco.secundario}44`,
    backgroundColor: Blanco.primario,
  },
  input__textarea: {
    textAlignVertical: "top",
  },
});
export default InputConEtiqueta;
