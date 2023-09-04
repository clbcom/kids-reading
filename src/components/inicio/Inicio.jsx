import { View, StyleSheet, FlatList } from "react-native";
import { Blanco } from "../../colors";
import BotonAdicionar from "./BotonAdicionar";
import TarjetaVistaPrevia from "./TarjetaVistaPrevia";

const Inicio = () => {
  const tarjetas = [
    {
      id: 1,
      titulo: "Titulo de la tarjeta",
      descripcion: "Descripcion de la tarjeta",
    },
    {
      id: 2,
      titulo: "Titulo de otra tarjeta",
      descripcion: "Descripcion de otjhlakjshdlfara  tarjeta",
    },
  ];

  return (
    <View style={styles.contenedor}>
      <FlatList
        data={tarjetas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TarjetaVistaPrevia
            titulo={item.titulo}
            descripcion={item.descripcion}
          />
        )}
      />
      <BotonAdicionar />
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
