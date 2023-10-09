import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colores, FuentesTexto, Tema } from "../../constantes";
import IconOutline from "../icons/IconOutline";
import { Link } from "react-router-native";

const TarjetaContenido = ({ id, titulo }) => {
  return (
    <Link
      style={{
        borderTopStartRadius: Tema.borderRadius,
        borderTopEndRadius: Tema.borderRadius,
      }}
      to={`/${id}`}
      underlayColor={`${Colores.primario}55`}
    >
      <View style={styles.tarjeta__contenido}>
        <IconOutline name="reader" />
        <Text style={styles.tarjeta__titulo}>{titulo}</Text>
      </View>
    </Link>
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
