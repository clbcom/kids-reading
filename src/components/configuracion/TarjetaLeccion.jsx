import { StyleSheet, Text, View } from "react-native";
import { BotonConIcono } from "../botones";
import { Colores, FuentesTexto, Tema } from "../../constantes";
import { useRef, useState } from "react";
import InputModalEditarLectura from "./InputModalEditarLectura";
import InputModalEliminarLectura from "./InputModalEliminarLectura";

const TarjetaLeccion = ({ datos }) => {
  const [leccion] = useState(datos);
  const refModalEditarLectura = useRef(null);
  const refModalEliminarLectura = useRef(null);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>{leccion.titulo}</Text>
      <View style={styles.contenedor__botones}>
        <>
          <BotonConIcono
            style={[
              styles.botones,
              datos.editable
                ? styles.boton__editar
                : styles.boton__no__editable,
            ]}
            styleIcon={[
              styles.botones__icono,
              datos.editable
                ? styles.boton__editar__icono
                : styles.boton__no__editable__icono,
            ]}
            name="pencil"
            onPress={() => refModalEditarLectura.current.open()}
          />
          <BotonConIcono
            style={[
              styles.botones,
              datos.editable
                ? styles.boton__eliminar
                : styles.boton__no__editable,
            ]}
            styleIcon={[
              styles.botones__icono,
              datos.editable
                ? styles.boton__eliminar__icono
                : styles.boton__no__editable__icono,
            ]}
            name="trash-bin"
            onPress={() => refModalEliminarLectura.current.open()}
          />
        </>
      </View>
      <InputModalEditarLectura
        datosLectura={datos}
        reference={refModalEditarLectura}
      />
      <InputModalEliminarLectura
        datosLectura={datos}
        reference={refModalEliminarLectura}
      />
    </View>
  );
};

export default TarjetaLeccion;

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    borderBottomColor: `${Colores.negro}33`,
    borderBottomWidth: 2,
    borderStyle: "dotted",
  },
  titulo: {
    ...FuentesTexto.parrafoLarge,
    width: "60%",
  },
  contenedor__botones: {
    flexDirection: "row",
    width: "40%",
    gap: Tema.gap,
    padding: Tema.paddingSmall,
  },
  botones: {
    justifyContent: "center",
    padding: Tema.padding,
    elevation: 5,
    borderRadius: Tema.borderRadiusSmall,
    backgroundColor: "white",
  },
  botones__icono: {
    ...FuentesTexto.parrafo,
  },
  boton__editar: {
    borderColor: Colores.primario,
    borderWidth: 2,
    borderStyle: "solid",
  },
  boton__editar__icono: {
    color: Colores.primario,
  },
  boton__eliminar: {
    backgroundColor: Colores.danger,
  },
  boton__eliminar__icono: {
    color: Colores.blanco,
  },
  boton__no__editable: {
    borderColor: `${Colores.negro}88`,
    borderWidth: 2,
    borderStyle: "solid",
  },
  boton__no__editable__icono: {
    color: `${Colores.negro}88`,
  },
});
