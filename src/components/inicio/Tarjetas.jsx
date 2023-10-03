import { ScrollView, StyleSheet, View } from "react-native";
import { useEffect, useRef, useState } from "react";

import BotonAdicionar from "./BotonAdicionar";
import InputModalAgregarLectura from "./InputModalAgregarLectura";
import TextoCargando from "../carga/TextoCargando";
import { Colores } from "../../constantes";
import TarjetaNivel from "./TarjetaNivel";

const Tarjetas = () => {
  const refModalAgregarLectura = useRef(null);
  const [swichNuevo, setSwichNuevo] = useState(false);
  const [cargando, setCargando] = useState(true);

  const handleOnPressAgregar = () => {
    refModalAgregarLectura.current.open();
  };

  useEffect(() => {
    setCargando(false);
  }, []);

  return (
    <View style={styles.contenedor}>
      {cargando ? <TextoCargando /> : (
        <ScrollView>
          <TarjetaNivel existeNuevo={swichNuevo} nivel={1} />
          <TarjetaNivel existeNuevo={swichNuevo} nivel={2} />
          <TarjetaNivel existeNuevo={swichNuevo} nivel={3} />
        </ScrollView>
      )}
      <BotonAdicionar onPress={handleOnPressAgregar} />
      <InputModalAgregarLectura
        refrescar={() => {
          setSwichNuevo((prev) => !prev);
        }}
        reference={refModalAgregarLectura}
      />
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
