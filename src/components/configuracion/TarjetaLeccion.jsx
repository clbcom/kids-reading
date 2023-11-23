import { StyleSheet, Text, View } from "react-native";
import { BotonConIcono } from "../botones";
import { Colores, FuentesTexto, Tema } from "../../constantes";
import InputModalAgregarLectura from "./InputModalAgregarLectura";
import { useRef } from "react";

const TarjetaLeccion = ({ datos }) => {
  const refModalAgregarLectura = useRef(null);
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>{datos.titulo}</Text>
      <View style={styles.contenedor__botones}>
        {datos.editable
          ? (
            <>
              <BotonConIcono
                style={[styles.botones, styles.boton__editar]}
                styleIcon={[
                  styles.botones__icono,
                  styles.boton__editar__icono,
                ]}
                name="pencil"
                onPress={() => refModalAgregarLectura.current.open()}
              />
              <BotonConIcono
                style={[styles.botones, styles.boton__eliminar]}
                styleIcon={[
                  styles.botones__icono,
                  styles.boton__eliminar__icono,
                ]}
                name="trash-bin"
              />
            </>
          )
          : (
            <>
              <BotonConIcono
                style={[styles.botones, styles.boton__no__editable]}
                styleIcon={[
                  styles.botones__icono,
                  styles.boton__no__editable__icono,
                ]}
                name="pencil"
              />
              <BotonConIcono
                style={[styles.botones, styles.boton__no__editable]}
                styleIcon={[
                  styles.botones__icono,
                  styles.boton__no__editable__icono,
                ]}
                name="trash-bin"
              />
            </>
          )}
      </View>
      <InputModalAgregarLectura
        datosLectura={datos}
        reference={refModalAgregarLectura}
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
