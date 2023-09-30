import { View, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect, useRef } from "react";

import BotonAdicionar from "./BotonAdicionar";
import InputModalAgregarLectura from "./InputModalAgregarLectura";
import TextoCargando from "../carga/TextoCargando";
import { Colores } from "../../constantes";
import { useRealmCrud } from "../../datos/RealmContext";
import TarjetaNivel from "./TarjetaNivel";

const Tarjetas = () => {
  const refModalAgregarLectura = useRef(null);
  const [cargando, setCargando] = useState(true);
  const [lecturas, setLecturas] = useState([]);
  const { obtenerLecturas } = useRealmCrud();

  const handleOnPressAgregar = () => {
    refModalAgregarLectura.current.open();
  };
  const handleOnAgregar = () => {
    setLecturas(obtenerLecturas());
  };

  useEffect(() => {
    handleOnAgregar();
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
          <TarjetaNivel nivel={4} />
          <TarjetaNivel nivel={5} />
          <TarjetaNivel nivel={6} />
        </ScrollView>
      )}
      <BotonAdicionar onPress={handleOnPressAgregar} />
      <InputModalAgregarLectura
        onAgregar={handleOnAgregar}
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
