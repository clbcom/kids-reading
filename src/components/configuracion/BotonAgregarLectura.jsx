import { StyleSheet } from "react-native";
import React from "react";
import { BotonConIcono } from "../botones";
import { Colores, FuentesTexto, Tema } from "../../constantes";

const BotonAgregarLectura = (props) => {
  return (
    <BotonConIcono
      style={styles.boton}
      styleIcon={styles.boton__contenido}
      styleText={styles.boton__contenido}
      name="duplicate"
      {...props}
    >
      Nueva lectura
    </BotonConIcono>
  );
};

const styles = StyleSheet.create({
  boton: {
    flexDirection: "row",
    justifyContent: "center",
    gap: Tema.gap,
    padding: Tema.padding,
    backgroundColor: Colores.verdeMedio,
    borderRadius: Tema.borderRadius,
    elevation: 5,
  },
  boton__contenido: {
    ...FuentesTexto.parrafoLarge,
    color: Colores.blanco,
  },
});

export default BotonAgregarLectura;
