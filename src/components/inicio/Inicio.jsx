import { View, Text, StyleSheet, FlatList } from "react-native";
import { Blanco } from "../../colors";
import BotonAdicionar from "./BotonAdicionar";
import TarjetaVistaPrevia from "./TarjetaVistaPrevia";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import { tarjetas } from "../../datos/datosTarjeta";

const Deslizable = ({ data }) => {
  return (
    <SwipeListView
      data={data}
      renderItem={({ item }) => (
        <SwipeRow
          style={{
            padding: 10,
            margin: 10,
            elevation: 5,
            backgroundColor: Blanco.tema1,
          }}
        >
          <View>
            <Text>hidden</Text>
          </View>
          <View>
            <Text>show</Text>
          </View>
        </SwipeRow>
      )}
    />
  );
};

const Inicio = () => {
  return (
    <View style={styles.contenedor}>
      <SwipeListView
        data={tarjetas}
        renderItem={({ item }) => (
          <TarjetaVistaPrevia
            key={item.id}
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
