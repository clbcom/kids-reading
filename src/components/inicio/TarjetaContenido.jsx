import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colores, FuentesTexto, Tema } from "../../constantes";
import IconOutline from "../icons/IconOutline";

const TarjetaContenido = ({ titulo }) => {
  return (
    <TouchableOpacity style={styles.tarjeta__contenido}>
      <IconOutline name="reader" />
      <Text style={styles.tarjeta__titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tarjeta__contenido: {
    flexDirection: "row",
    borderBottomColor: `${Colores.primario}44`,
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    padding: Tema.padding,
  },
  tarjeta__titulo: {
    ...FuentesTexto.parrafo,
    marginLeft: Tema.margin,
  },
});

export default TarjetaContenido;
