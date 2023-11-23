import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import TarjetaNivel from "./TarjetaNivel";
import { Tema } from "../../constantes";
import BotonAgregarLectura from "./BotonAgregarLectura";
import TextoCargando from "../carga/TextoCargando";
import InputModalAgregarLectura from "./InputModalAgregarLectura";

const ConfiguracionTarjetas = () => {
  const refModalAgregarLectura = useRef(null);
  const [cargando, setCargando] = useState(true);
  const [hayCambio, setHayCambio] = useState(true);

  useEffect(() => {
    setCargando(false);
  }, []);

  const handleRefrescar = () => {
    setHayCambio((prev) => !prev);
  };
  const handleOnPressAgregarLectura = () => {
    refModalAgregarLectura.current.open();
  };

  return (
    <View style={styles.contenedor}>
      {cargando ? <TextoCargando /> : (
        <ScrollView>
          <TarjetaNivel existeCambio={hayCambio} nivel={1} />
          <TarjetaNivel existeCambio={hayCambio} nivel={2} />
          <TarjetaNivel existeCambio={hayCambio} nivel={3} />
        </ScrollView>
      )}
      <BotonAgregarLectura onPress={handleOnPressAgregarLectura} />
      <InputModalAgregarLectura
        refrescar={handleRefrescar}
        reference={refModalAgregarLectura}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    width: "100%",
    padding: Tema.padding,
  },
});

export default ConfiguracionTarjetas;
