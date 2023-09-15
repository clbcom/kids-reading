import { View, StyleSheet } from "react-native";
import { Colores, Tema, IconoSize } from "../../constantes";
import BotonConIcono from "../botones/BotonConIcono";
import { useRef, useState } from "react";
import ModalListaLecturas from "./ModalListaLecturas";

const ContenedorBotones = () => {
  const [estaGrabando, setEstaGrabando] = useState(false);
  const modalListaRef = useRef(null);
  const handleOnPressMicrofono = () => {
    setEstaGrabando((prev) => !prev);
  };
  const handleOnPressLista = () => {
    modalListaRef.current.open();
  };

  return (
    <View style={styles.contenedor__microfono}>
      <BotonConIcono
        name="list"
        size={IconoSize.large}
        onPress={handleOnPressLista}
        style={styles.boton}
        styleIcon={{ color: Colores.secundario }}
      />
      <BotonConIcono
        name={estaGrabando ? "mic-off" : "mic"}
        size={IconoSize.xxlarge}
        onPress={handleOnPressMicrofono}
        style={styles.boton}
        styleIcon={{ color: Colores.primario }}
      />
      <BotonConIcono
        name="refresh"
        size={IconoSize.large}
        style={styles.boton}
        styleIcon={{ color: Colores.secundario }}
      />
      <ModalListaLecturas reference={modalListaRef} />
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
    borderRadius: Tema.borderRadius,
    padding: Tema.padding,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ContenedorBotones;
