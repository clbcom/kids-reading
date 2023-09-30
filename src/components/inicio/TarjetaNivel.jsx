import { View, Text, StyleSheet } from "react-native";
import ViewBackgroundImage from "../backgrounds/ViewBackgroundImage";
import { Colores, Fondos, FuentesTexto, Tema } from "../../constantes";
import TarjetaContenido from "./TarjetaContenido";

const TarjetaNivel = ({ nivel }) => {
  return (
    <View style={styles.contenedor}>
      <ViewBackgroundImage
        style={styles.titulo__contenedor}
        opacity={0.7}
        source={Fondos.tarjeta3_blur}
      >
        <Text style={styles.titulo__text}>Nivel {nivel}</Text>
      </ViewBackgroundImage>
      <View style={styles.contenido__nivel}>
        <TarjetaContenido titulo="Los 5 wacheros" />
        <TarjetaContenido titulo="Los 5 wacheros" />
        <TarjetaContenido titulo="Los 5 wacheros" />
        <TarjetaContenido titulo="Los 5 wacheros" />
        <TarjetaContenido titulo="Los 5 wacheros" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    overflow: "hidden",
    borderRadius: Tema.borderRadius,
    backgroundColor: Colores.blanco,
    margin: Tema.margin,
    elevation: 8,
  },
  titulo__contenedor: {
    backgroundColor: Colores.verde,
  },
  titulo__text: {
    ...FuentesTexto.titulo,
    textAlign: "center",
    fontSize: Tema.h0,
    padding: Tema.padding,
    color: Colores.secundario,
  },
  contenido__nivel: {
    padding: Tema.padding,
  },
});

export default TarjetaNivel;
