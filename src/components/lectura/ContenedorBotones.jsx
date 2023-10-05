import Voice from "@react-native-voice/voice";
import { StyleSheet, View } from "react-native";
import { Colores, IconoSize, Tema } from "../../constantes";
import BotonConIcono from "../botones/BotonConIcono";
import { useEffect, useState } from "react";

const ContenedorBotones = ({ onStartRecord, onHandleRecord }) => {
  const [estaGrabando, setEstaGrabando] = useState(false);
  const [texto, setTexto] = useState("");

  // Grabacion
  Voice.onSpeechStart = () => {
    console.log("Comenzando");
    setEstaGrabando(true);
  };
  Voice.onSpeechRecognized = () => {
    console.log("recognized");
  };
  Voice.onSpeechEnd = () => {
    console.log("Deteniendo");

    setEstaGrabando(false);
  };
  Voice.onSpeechResults = (value) => {
    value.value.forEach((val, i) => console.log(`${i}.- ${val}`));
  };
  Voice.onSpeechPartialResults = (value) => {
    console.log(value);
  };
  Voice.onSpeechError = ({error}) => {
    console.log(error)
    detener()
  };
  const empezar = async () => {
    try {
      await Voice.start("es-ES");
      setEstaGrabando(true)
    } catch (error) {
    }
  };

  const detener = async () => {
    try {
      await Voice.stop();
      setEstaGrabando(false)
    } catch (error) {
    }
  };
  const handleOnPressMicrofono = () => {
    if (estaGrabando) {
      detener();
    } else {
      empezar();
    }
  };

  return (
    <View style={styles.contenedor__microfono}>
      <BotonConIcono
        name={estaGrabando ? "mic-off" : "mic"}
        size={IconoSize.xxlarge}
        onPress={handleOnPressMicrofono}
        style={styles.boton}
        styleIcon={{ color: Colores.primario }}
      />
      <BotonConIcono
        name="refresh"
        size={IconoSize.xxlarge}
        style={styles.boton}
        styleIcon={{ color: Colores.secundario }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor__microfono: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  boton: {
    elevation: 5,
    backgroundColor: Colores.blanco,
    borderRadius: Tema.borderRadius * 3,
    padding: Tema.padding,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ContenedorBotones;
