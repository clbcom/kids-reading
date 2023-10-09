import { StyleSheet, Text } from "react-native";
import { Colores, Fondos, FuentesTexto, Tema } from "../../constantes";
import ViewBackgroundImage from "../backgrounds/ViewBackgroundImage";

const ContenedorLecturaTitulo = ({ nivel, titulo }) => {
  return (
    <ViewBackgroundImage
      source={Fondos.tarjeta3_blur}
      opacity={0.7}
      style={styles.contenedor__titulo}
    >
      <Text style={styles.contenedor__lectura__titulo}>
        {`Nivel ${nivel} - ${titulo}`}
      </Text>
    </ViewBackgroundImage>
  );
};
const styles = StyleSheet.create({
  contenedor__titulo: {
    backgroundColor: Colores.negro,
  },
  contenedor__lectura__titulo: {
    ...FuentesTexto.titulo,
    padding: Tema.padding,
    textAlign: "center",
    color: Colores.secundario,
  },
});

export default ContenedorLecturaTitulo;
