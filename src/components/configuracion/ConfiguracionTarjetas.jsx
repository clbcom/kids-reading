import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import TarjetaNivel from "./TarjetaNivel";
import { Tema } from "../../constantes";
import BotonAgregarLectura from "./BotonAgregarLectura";
import TextoCargando from "../carga/TextoCargando";
import InputModalAgregarLectura from "./InputModalAgregarLectura";
import { CambiosProvider } from "../../datos/CambiosContext";

const ConfiguracionTarjetas = () => {
  const refModalAgregarLectura = useRef(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(false);
  }, []);

  const handleOnPressAgregarLectura = () => {
    refModalAgregarLectura.current.open();
  };

  return (
    <CambiosProvider>
      <View style={styles.contenedor}>
        {cargando ? <TextoCargando /> : (
          <ScrollView>
            <TarjetaNivel nivel={1} />
            <TarjetaNivel nivel={2} />
            <TarjetaNivel nivel={3} />
          </ScrollView>
        )}
        <BotonAgregarLectura onPress={handleOnPressAgregarLectura} />
        <InputModalAgregarLectura
          reference={refModalAgregarLectura}
        />
      </View>
    </CambiosProvider>
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
