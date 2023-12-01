import { ScrollView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import TextoCargando from "../carga/TextoCargando";
import { Colores } from "../../constantes";
import TarjetaNivel from "./TarjetaNivel";

const Tarjetas = () => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(false);
  }, []);

  return (
    <View style={styles.contenedor}>
      {cargando ? <TextoCargando /> : (
        <ScrollView>
          <TarjetaNivel nivel={1} />
          <TarjetaNivel nivel={2} />
          <TarjetaNivel nivel={3} />
        </ScrollView>
      )}
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
