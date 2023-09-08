import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colores, FuentesTexto, Tema } from "../../constantes";

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
    padding: Tema.padding,
    width: "90%",
  },
  titulo: {
    ...FuentesTexto.titulo,
    marginBottom: Tema.marginSmall,
    color: Colores.primario,
  },
  input: {
    ...FuentesTexto.parrafo,
    borderRadius: Tema.borderRadius,
    padding: Tema.padding,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: `${Colores.primario}44`,
    backgroundColor: Colores.blanco,
  },
  input__textarea: {
    textAlignVertical: "top",
  },
});
export default InputConEtiqueta;
