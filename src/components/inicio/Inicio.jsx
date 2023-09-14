import { View, StyleSheet } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import BotonAdicionar from "./BotonAdicionar";
import TarjetaVistaPrevia from "./TarjetaVistaPrevia";
import { useRef } from "react";
import InputModalAgregarLectura from "./InputModalAgregarLectura";
import { Colores } from "../../constantes";
import { useDatos } from "../../datos/DatosContext";

const Inicio = () => {
  const refModalAgregarLectura = useRef(null);
  const [lecturas, setLecturas] = useDatos();
  const handleOnPressAgregar = () => {
    refModalAgregarLectura.current.open();
  };

  const guardarNuevaLectura = (titulo, lectura) => {
    const nuevo = {
      id: lecturas.length + 1,
      titulo,
      lectura,
    };

    setLecturas((prev) => [nuevo, ...prev]);
  };

  return (
    <View style={styles.contenedor}>
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
    backgroundColor: Colores.transparente,
  },
});

export default Inicio;
