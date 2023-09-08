import ModalInferior from "react-native-raw-bottom-sheet";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { forwardRef, useState } from "react";
import InputConEtiqueta from "../inputs/InputConEtiqueta";
import { Alertas, Azul, Blanco } from "../../colors";
import { FontSizes, Fuentes } from "../../fuentes";
import ViewBackgroundImage from "../backgrounds/ViewBackgroundImage";

const InputModalAgregarLectura = ({ reference, onSave } = props) => {
  const [titulo, setTitulo] = useState("");
  const [lectura, setLectura] = useState("");

  const handleOnChangeTitulo = (text) => {
    setTitulo(text);
  };

  const handleOnChangeLectura = (text) => {
    setLectura(text);
  };

  const limpiarInputs = () => {
    setTitulo("");
    setLectura("");
  };
  const handleOnPressGuardar = () => {
    if (titulo.length === 0) return;
    if (lectura.length === 0) return;

    onSave(titulo, lectura);
    limpiarInputs();
    reference.current.close();
    console.log("Guardado: " + titulo);
  };

  return (
    <ModalInferior
      ref={reference}
      openDuration={300}
      animationType="fade"
      dragFromTopOnly={true}
      closeOnDragDown={true}
      customStyles={customStylesModal}
    >
      <ScrollView style={styles.contenedor}>
        <ViewBackgroundImage
          source={require("./../../../assets/fondos/fondo-estrellas.jpg")}
        >
          <View style={styles.contenedor__inputs}>
            <InputConEtiqueta onChangeText={handleOnChangeTitulo}>
              Titulo
            </InputConEtiqueta>
            <InputConEtiqueta
              onChangeText={handleOnChangeLectura}
              textarea
              editable
              multiline
              numberOfLines={6}
            >
              Lectura
            </InputConEtiqueta>
          </View>
          <View style={styles.contenedor__botones}>
            <TouchableOpacity
              onPress={handleOnPressGuardar}
              style={styles.boton}
            >
              <Text style={styles.texto__boton}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </ViewBackgroundImage>
      </ScrollView>
    </ModalInferior>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  contenedor__inputs: {
    flex: 1,
  },
  contenedor__botones: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  boton: {
    width: "100%",
    borderRadius: 25,
    padding: 10,
    backgroundColor: Azul.primario,
    elevation: 5,
  },
  texto__boton: {
    fontFamily: Fuentes.actual,
    textAlign: "center",
    fontSize: FontSizes.large,
    color: Blanco.primario,
  },
});

const customStylesModal = StyleSheet.create({
  container: {
    height: "65%",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  draggableIcon: {
    width: "35%",
    height: 10,
  },
});

export default forwardRef(InputModalAgregarLectura);
