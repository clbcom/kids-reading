import { View, Text, TextInput, StyleSheet } from "react-native";
import { Negro } from "../../colors";

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
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderRadius: 10,
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: `${Negro.tema1}44`,
    fontSize: 18,
  },
  input__textarea: {
    textAlignVertical: "top",
  },
});
export default InputConEtiqueta;
