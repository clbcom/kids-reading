import ModalInferior from "../modals/ModalInferior";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import InputConEtiqueta from "../inputs/InputConEtiqueta";
import { Colores, FuentesTexto, Tema } from "../../constantes";
import { useRealmCrud } from "../../datos/RealmContext";

const InputModalAgregarLectura = ({ reference, onAgregar }) => {
  const [titulo, setTitulo] = useState("");
  const [lectura, setLectura] = useState("");
  const { agregarLectura } = useRealmCrud();

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

    agregarLectura(titulo.trim(), lectura.trim());
    limpiarInputs();
    onAgregar();
    reference.current.close();
  };

  return (
    <ModalInferior withScroll reference={reference}>
      <View style={styles.contenedor__inputs}>
        <InputConEtiqueta value={titulo} onChangeText={handleOnChangeTitulo}>
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
        <TouchableOpacity onPress={handleOnPressGuardar} style={styles.boton}>
          <Text style={styles.texto__boton}>Aceptar</Text>
        </TouchableOpacity>
      </View>
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

export default InputModalAgregarLectura;
