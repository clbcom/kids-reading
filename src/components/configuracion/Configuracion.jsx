import { StyleSheet, View } from "react-native";
import { useState } from "react";
import PreguntaPermiso from "./PreguntaPermiso";
import ConfiguracionTarjetas from "./ConfiguracionTarjetas";

const Configuracion = () => {
  const [tienePermiso, setTienePermiso] = useState(false);
  const handleOnPressSi = () => {
    setTienePermiso(true);
  };
  return (
    <View style={styles.contenedor}>
      {tienePermiso ? <ConfiguracionTarjetas /> : (
        <PreguntaPermiso
          onPressSi={handleOnPressSi}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Configuracion;
