import Voice from "@react-native-voice/voice";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import { useEffect, useRef, useState } from "react";
import { useRealmCrud } from "../../datos/RealmContext";
import { useLecturaActual } from "../../datos/LecturaActualContext";
import BotonConIcono from "../botones/BotonConIcono";
import { Colores, Fondos, Tema } from "../../constantes";
import ContenedorLecturaTitulo from "./ContenedorLecturaTitulo";
import ContenedorLecturaParrafo from "./ContenedorLecturaParrafo";
import ViewBackgroundImage from "../backgrounds/ViewBackgroundImage";
import ContenedorLecturaResultado from "./ContenedorLecturaResultado";

const InicioMicrofono = () => {
  const params = useParams();
  const { obtenerLectura, obtenerLecturas } = useRealmCrud();
  const [lecturaActual, setLecturaActual] = useLecturaActual();
  const [leyendo, setLeyendo] = useState(false);
  const [estaFinalizado, setEstaFinalizado] = useState(false);
  const solGirando = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (lecturaActual === undefined || lecturaActual === null) {
      const lect = obtenerLecturas();
      setLecturaActual(lect[0]);
    }

    if (params.id !== undefined) {
      setLecturaActual(obtenerLectura(params.id));
      setLeyendo(false);
    }

    return () => {
      Voice.removeAllListeners();
      Voice.destroy();
    };
  }, []);

  // Microfono
  const [resultado, setResultado] = useState("");

  Voice.onSpeechError = () => {
    setLeyendo(false);
    solGirando.resetAnimation();
  };

  Voice.onSpeechStart = () => {
    if (Voice.isRecognizing()) {
      setLeyendo(true);
      setEstaFinalizado(false);
    }
  };

  Voice.onSpeechEnd = () => {
    setLeyendo(false);
    solGirando.resetAnimation();
  };

  Voice.onSpeechResults = ({ value }) => {
    setResultado(value[0]);
    setEstaFinalizado(true);
  };

  const iniciar = () => {
    try {
      Voice.start("es-ES");
      // inicia la animacion
      if (!leyendo) {
        console.log("Microfono encendido");
        Animated.loop(
          solGirando,
          Animated.timing(solGirando, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
            iterations: -1,
            easing: Easing.linear,
          }).start(),
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  const detener = () => {
    try {
      Voice.destroy();
      if (leyendo) {
        setLeyendo(false);
        solGirando.resetAnimation();
      }
    } catch (error) {
      console.error(error);
    }
  };
  // Microfono-end

  const handlePressMicrofono = () => {
    if (leyendo) {
      detener();
    } else {
      iniciar();
    }
  };

  const rotate = solGirando.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.contenedor}>
      <ContenedorLecturaTitulo
        nivel={lecturaActual && lecturaActual.nivel}
        titulo={lecturaActual && lecturaActual.titulo}
      />
      <ViewBackgroundImage style={{ flex: 1 }} source={Fondos.papel}>
        {!estaFinalizado
          ? (
            <ContenedorLecturaParrafo
              lectura={lecturaActual && lecturaActual.lectura}
            />
          )
          : (
            <ContenedorLecturaResultado
              resultado={resultado}
              lectura={lecturaActual.lectura}
            />
          )}
        <View style={styles.contenedor__boton}>
          <Animated.View
            style={{
              transform: [{ rotate }],
            }}
          >
            <BotonConIcono
              onPress={handlePressMicrofono}
              name={leyendo ? "mic" : "mic-off"}
              style={styles.boton__microfono}
              styleIcon={{
                color: Colores.warning,
                // soluciona un error de la libreria de iconos que hace que el icono de microfono encendido este a un lado y no centreado como los demas
                paddingLeft: leyendo ? Tema.paddingSmall : 0,
              }}
              size={Tema.h0 * 2}
            />
          </Animated.View>
        </View>
      </ViewBackgroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
  contenedor__boton: {
    flex: 0,
    width: "100%",
    alignItems: "center",
    padding: Tema.padding,
  },
  boton__microfono: {
    padding: Tema.padding,
    backgroundColor: Colores.secundario,
    borderRadius: Tema.borderRadius * 10, //para que el los border se vean redondos
    borderColor: Colores.warning,
    borderWidth: 31,
    borderStyle: "dotted",
  },
});

export default InicioMicrofono;
