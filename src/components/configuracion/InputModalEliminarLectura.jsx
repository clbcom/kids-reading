import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colores, FuentesTexto, Tema } from "../../constantes";
import ModalInferior from "../modals/ModalInferior";
import { BotonConIcono } from "../botones";
import { useRealmCrud } from "../../datos/RealmContext";
import { useCambio } from "../../datos/CambiosContext";

const InputModalEliminarLectura = ({ datosLectura, reference }) => {
  const { eliminarLectura } = useRealmCrud();
  const [, refrescar] = useCambio();

  const handleOnPressEliminar = () => {
    if (eliminarLectura(datosLectura)) {
      reference.current.close();
      refrescar();
    }
  };

  return (
    <ModalInferior reference={reference}>
      <View style={styles.contenedor}>
        <Text style={styles.pregunta}>¿Eliminar leccion?</Text>
        <Text style={styles.informacion}>Titulo: {datosLectura.titulo}</Text>
        <Text style={styles.informacion}>Nivel: {datosLectura.nivel}</Text>
        <View style={styles.contenedor__botones}>
          <BotonConIcono
            style={[styles.boton, styles.boton__eliminar]}
            styleIcon={[
              styles.boton__contenido,
              styles.boton__eliminar__contenido,
            ]}
            styleText={[
              styles.boton__contenido,
              styles.boton__eliminar__contenido,
            ]}
            name="trash"
            onPress={handleOnPressEliminar}
          >
            Eliminar
          </BotonConIcono>
          <BotonConIcono
            style={[styles.boton, styles.boton__cancelar]}
            styleIcon={[
              styles.boton__contenido,
              styles.boton__cancelar__contenido,
            ]}
            styleText={[
              styles.boton__contenido,
              styles.boton__cancelar__contenido,
            ]}
            name="checkmark"
            onPress={() => reference.current.close()}
          >
            Cancelar
          </BotonConIcono>
        </View>
      </View>
    </ModalInferior>
  );
};

export default InputModalEliminarLectura;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pregunta: {
    ...FuentesTexto.titulo,
    marginBottom: Tema.marginLarge,
  },
  informacion: {
    ...FuentesTexto.parrafoLarge,
  },
  contenedor__botones: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  boton: {
    flexDirection: "row",
    padding: Tema.padding,
    elevation: 5,
  },
  boton__contenido: {
    ...FuentesTexto.parrafoLarge,
  },
  boton__eliminar: {
    borderColor: Colores.danger,
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: Colores.blanco,
    borderRadius: Tema.borderRadius,
  },
  boton__eliminar__contenido: {
    color: Colores.danger,
  },
  boton__cancelar: {
    backgroundColor: Colores.success,
    borderRadius: Tema.borderRadius,
  },
  boton__cancelar__contenido: {
    color: Colores.blanco,
  },
});
