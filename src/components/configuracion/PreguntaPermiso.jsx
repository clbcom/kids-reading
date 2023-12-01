import { StyleSheet, Text, View } from "react-native";
import BotonConIcono from "../botones/BotonConIcono";
import { Colores, FuentesTexto, Tema } from "../../constantes";
import LinkBotonConIcono from "../botones/LinkBotonConIcono";

const PreguntaPermiso = ({ onPressSi }) => {
  return (
    <View style={styles.caja}>
      <Text style={styles.pregunta__texto}>
        ¿Tienes permiso de tu padre o madre para entrar aqui?
      </Text>
      <View style={styles.contenedor__botones}>
        <BotonConIcono
          name="checkmark"
          style={[styles.boton, styles.boton__si]}
          styleText={[styles.boton__contenido, styles.boton__contenido__si]}
          styleIcon={[styles.boton__contenido, styles.boton__contenido__si]}
          onPress={onPressSi}
        >
          SI
        </BotonConIcono>
        <LinkBotonConIcono
          to="/"
          name="close"
          style={[styles.boton, styles.boton__no]}
          styleText={[styles.boton__contenido, styles.boton__contenido__no]}
          styleIcon={[styles.boton__contenido, styles.boton__contenido__no]}
        >
          NO
        </LinkBotonConIcono>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    backgroundColor: Colores.blanco,
    borderRadius: Tema.borderRadius,
    elevation: 5,
    padding: Tema.paddingLarge,
    gap: Tema.gap,
  },
  pregunta__texto: {
    ...FuentesTexto.parrafo,
    textAlign: "center",
  },
  contenedor__botones: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  boton: {
    flexDirection: "row",
    justifyContent: "center",
    width: "40%",
    padding: Tema.padding,
    borderRadius: Tema.borderRadius,
  },
  boton__contenido: {
    ...FuentesTexto.parrafo,
  },
  boton__si: {
    backgroundColor: Colores.blanco,
    borderColor: Colores.success,
    borderWidth: 2,
    borderStyle: "solid",
  },
  boton__contenido__si: {
    color: Colores.success,
  },
  boton__no: {
    backgroundColor: Colores.danger,
  },
  boton__contenido__no: {
    color: Colores.blanco,
  },
});
export default PreguntaPermiso;
