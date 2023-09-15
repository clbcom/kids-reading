import { View, Text, StyleSheet } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import BotonAdicionar from "./BotonAdicionar";
import TarjetaVistaPrevia from "./TarjetaVistaPrevia";
import { useState, useEffect, useRef } from "react";
import InputModalAgregarLectura from "./InputModalAgregarLectura";
import { Colores } from "../../constantes";
import { useDatos } from "../../datos/DatosContext";
import TextoCargando from "../carga/TextoCargando";

const Inicio = () => {
  const refModalAgregarLectura = useRef(null);
  const [cargando, setCargando] = useState(true);
  const [lecturas, setLecturas] = useDatos();
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
        <SwipeListView
          data={lecturas}
          renderItem={({ item }) => (
            <TarjetaVistaPrevia
              key={item.id}
              titulo={item.titulo}
              lectura={item.lectura}
            />
          )}
        />
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

export default Inicio;
