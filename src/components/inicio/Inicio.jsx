import { View, Text, StyleSheet } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import { Blanco } from "../../colors";
import BotonAdicionar from "./BotonAdicionar";
import TarjetaVistaPrevia from "./TarjetaVistaPrevia";
import { tarjetas } from "../../datos/datosTarjeta";
import { useState, useRef } from "react";
import InputModalAgregarLectura from "./InputModalAgregarLectura";

const Inicio = () => {
  const refModalAgregarLectura = useRef(null);
  const [tarjetasJson, setTarjetasJson] = useState(tarjetas);
  const handleOnPressAgregar = () => {
    refModalAgregarLectura.current.open();
  };

  const guardarNuevaLectura = (titulo, lectura) => {
    const nuevo = {
      id: tarjetasJson.length + 1,
      titulo,
      lectura,
    };

    setTarjetasJson((prev) => [nuevo, ...prev]);
  };

  return (
    <View style={styles.contenedor}>
      <SwipeListView
        data={tarjetasJson}
        renderItem={({ item }) => (
          <TarjetaVistaPrevia
            key={item.id}
            titulo={item.titulo}
            lectura={item.lectura}
          />
        )}
      />
      <BotonAdicionar onPress={handleOnPressAgregar} />
      <InputModalAgregarLectura
        onSave={guardarNuevaLectura}
        reference={refModalAgregarLectura}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    width: "100%",
    backgroundColor: Blanco.tema1,
  },
});

export default Inicio;
