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
import ViewBackgroundImage from "../backgrounds/ViewBackgroundImage";
import { Colores, Fondos, FuentesTexto, Tema } from "../../constantes";

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
    onSave(titulo.trim(), lectura.trim());
    limpiarInputs();
    reference.current.close();
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
        <ViewBackgroundImage resizeMode="repeat" source={Fondos.estrellas}>
          <View style={styles.contenedor__inputs}>
            <InputConEtiqueta
              value={titulo}
              onChangeText={handleOnChangeTitulo}
            >
              Titulo
            </InputConEtiqueta>
            <InputConEtiqueta
              value={lectura}
              onChangeText={handleOnChangeLectura}
              textarea
              editable
              multiline
              numberOfLines={5}
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
    padding: Tema.padding,
  },
  boton: {
    width: "100%",
    elevation: 5,
    borderRadius: Tema.borderRadius,
    padding: Tema.padding,
    backgroundColor: Colores.primario,
  },
  texto__boton: {
    ...FuentesTexto.titulo,
    textAlign: "center",
    color: Colores.blanco,
  },
});

const customStylesModal = StyleSheet.create({
  container: {
    height: "60%",
    borderTopStartRadius: Tema.borderRadius,
    borderTopEndRadius: Tema.borderRadius,
  },
  draggableIcon: {
    width: "35%",
    height: 10,
    elevation: 5,
  },
});

export default forwardRef(InputModalAgregarLectura);
