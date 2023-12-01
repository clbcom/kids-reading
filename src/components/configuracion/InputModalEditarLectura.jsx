import ModalInferior from "../modals/ModalInferior";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import InputConEtiqueta from "../inputs/InputConEtiqueta";
import { Colores, FuentesTexto, Tema } from "../../constantes";
import { useRealmCrud } from "../../datos/RealmContext";
import CheckBoxContenedor from "../inputs/CheckBoxContenedor";
import { useCambio } from "../../datos/CambiosContext";

const InputModalEditarLectura = ({ datosLectura, reference }) => {
  const [titulo, setTitulo] = useState("");
  const [lectura, setLectura] = useState("");
  const [nivel, setNivel] = useState(datosLectura.nivel);
  const { actualizarLectura } = useRealmCrud();
  const [, refrescar] = useCambio();

  useEffect(() => {
    if (datosLectura) {
      setTitulo(datosLectura.titulo);
      setLectura(datosLectura.lectura);
      setNivel(datosLectura.nivel);
    }
  }, []);

  const handleOnChangeTitulo = (text) => {
    setTitulo(text);
  };

  const handleOnChangeLectura = (text) => {
    setLectura(text);
  };

  const handleOnPressChecked = (valor) => {
    setNivel(valor);
  };

  const limpiarInputs = () => {
    setTitulo("");
    setLectura("");
  };
  const handleOnPressGuardar = () => {
    if (titulo.length === 0) return;
    if (lectura.length === 0) return;

    const lecturaEditada = {
      id: datosLectura._id,
      titulo: titulo.trim(),
      lectura: lectura.trim(),
      nivel: nivel,
    };

    actualizarLectura(lecturaEditada);
    limpiarInputs();
    refrescar && refrescar();
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
      <CheckBoxContenedor
        valorInicial={nivel}
        onCheck={handleOnPressChecked}
        style={styles.contenedor__checkbox}
      />
      <View style={styles.contenedor__botones}>
        <TouchableOpacity onPress={handleOnPressGuardar} style={styles.boton}>
          <Text style={styles.texto__boton}>Actualizar</Text>
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
  contenedor__checkbox: {
    flexDirection: "row",
    justifyContent: "space-around",
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

export default InputModalEditarLectura;
