import { Animated, StyleSheet, View } from "react-native";
import { BotonConIcono, LinkBotonConIcono } from "../botones";
import { Colores, Tema } from "../../constantes";

export default ContenedorLecturaBotones = (
  {
    idSiguiente,
    finalizado,
    leyendo,
    onPressMicrofono,
    onPressReiniciar,
    rotate,
  },
) => {
  return (
    <View style={styles.contenedor__boton}>
      {!finalizado
        ? (
          <Animated.View
            style={{
              transform: [{ rotate }],
            }}
          >
            <BotonConIcono
              onPress={onPressMicrofono}
              name={leyendo ? "mic" : "mic-off"}
              style={[styles.boton, styles.boton__microfono]}
              styleIcon={{
                color: Colores.warning,
                // soluciona un error de la libreria de iconos que hace que el icono de microfono encendido este a un lado y no centreado como los demas
                paddingLeft: leyendo ? Tema.paddingSmall : 0,
              }}
              size={Tema.h0}
            />
          </Animated.View>
        )
        : (
          <>
            <BotonConIcono
              onPress={onPressReiniciar}
              style={[styles.boton, styles.boton__repetir]}
              styleIcon={styles.boton__repetir__icono}
              name="refresh"
              size={Tema.h0}
            />
            <LinkBotonConIcono
              to={`/${idSiguiente}`}
              style={[styles.boton, styles.boton__siguiente]}
              styleIcon={styles.boton__siguiente__icono}
              name="arrow-forward"
              size={Tema.h0}
            />
          </>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor__boton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: Tema.padding,
    // backgroundColor: 'brown'
  },
  boton: {
    padding: Tema.padding,
    borderRadius: Tema.borderRadius * 10, //para que el los border se vean redondos
    borderWidth: 15.5,
  },
  boton__microfono: {
    backgroundColor: Colores.secundario,
    borderColor: Colores.warning,
    borderStyle: "dotted",
  },
  boton__repetir: {
    backgroundColor: Colores.azulMedio,
    borderColor: Colores.azul,
    borderStyle: "dashed",
  },
  boton__repetir__icono: {
    color: Colores.azulClaro,
  },
  boton__siguiente: {
    backgroundColor: Colores.verdeMedio,
    borderColor: Colores.verde,
    borderStyle: "dashed",
  },
  boton__siguiente__icono: {
    color: Colores.verdeClaro,
  },
});
