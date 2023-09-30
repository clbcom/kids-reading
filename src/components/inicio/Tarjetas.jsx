import { View, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect, useRef } from "react";

import BotonAdicionar from "./BotonAdicionar";
import InputModalAgregarLectura from "./InputModalAgregarLectura";
import TextoCargando from "../carga/TextoCargando";
import { Colores } from "../../constantes";
import TarjetaNivel from "./TarjetaNivel";

const Tarjetas = () => {
  const refModalAgregarLectura = useRef(null);
  const [cargando, setCargando] = useState(true);

  const handleOnPressAgregar = () => {
    refModalAgregarLectura.current.open();
  };

  useEffect(() => {
    setCargando(false);
  }, []);

  return (
    <View style={styles.contenedor}>
      {cargando ? (
        <TextoCargando />
      ) : (
        <ScrollView>
          <TarjetaNivel nivel={1} />
          <TarjetaNivel nivel={2} />
          <TarjetaNivel nivel={3} />
        </ScrollView>
      )}
      <BotonAdicionar onPress={handleOnPressAgregar} />
      <InputModalAgregarLectura reference={refModalAgregarLectura} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    width: "100%",
    backgroundColor: Colores.transparente,
  },
});

export default Tarjetas;
