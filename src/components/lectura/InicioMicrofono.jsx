import Voice from "@react-native-voice/voice";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import { useEffect, useRef, useState } from "react";
import { useRealmCrud } from "../../datos/RealmContext";
import { useLecturaActual } from "../../datos/LecturaActualContext";
import { Fondos } from "../../constantes";
import ContenedorLecturaTitulo from "./ContenedorLecturaTitulo";
import ContenedorLecturaParrafo from "./ContenedorLecturaParrafo";
import ViewBackgroundImage from "../backgrounds/ViewBackgroundImage";
import ContenedorLecturaResultado from "./ContenedorLecturaResultado";
import ContenedorLecturaBotones from "./ContenedorLecturaBotones";

const InicioMicrofono = () => {
  const params = useParams();
  const { obtenerLecturas } = useRealmCrud();
  const [lecturaActual, setLecturaActual, idLecturaSiguiente] =
    useLecturaActual();
  const [leyendo, setLeyendo] = useState(false);
  const [estaFinalizado, setEstaFinalizado] = useState(false);
  const solGirando = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const lecturas = obtenerLecturas();
    if (lecturaActual === undefined || lecturaActual === null) {
      setLecturaActual(lecturas[0], lecturas[1]._id);
    }

    if (params.id !== undefined) {
      const indiceLecturaActual = lecturas.findIndex(({ _id }) =>
        _id === params.id
      );
      setLecturaActual(
        lecturas[indiceLecturaActual],
        indiceLecturaActual + 1 === lecturas.length
          ? lecturas[0]._id
          : lecturas[indiceLecturaActual + 1]._id,
      );
    }

    return () => {
      Voice.removeAllListeners();
      Voice.destroy();
    };
  }, []);

  useEffect(() => {
    if (params.id !== undefined) {
      const lecturas = obtenerLecturas();
      const indiceLecturaActual = lecturas.findIndex(({ _id }) =>
        _id.toString() === params.id.toString()
      );
      setLecturaActual(
        lecturas[indiceLecturaActual],
        indiceLecturaActual + 1 === lecturas.length
          ? lecturas[0]._id
          : lecturas[indiceLecturaActual + 1]._id,
      );
    }
    setEstaFinalizado(false);
  }, [params.id]);

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

  const handlePressReiniciar = () => {
    setEstaFinalizado(false);
    if (!leyendo) {
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
        <ContenedorLecturaBotones
          finalizado={estaFinalizado}
          rotate={rotate}
          leyendo={leyendo}
          onPressMicrofono={handlePressMicrofono}
          onPressReiniciar={handlePressReiniciar}
          idSiguiente={idLecturaSiguiente}
        />
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
});

export default InicioMicrofono;
