import { FlatList, View, Text, TouchableOpacity } from "react-native";
import ModalInferior from "../modals/ModalInferior";
import { Colores, FuentesTexto, Tema } from "../../constantes";
import { useLecturaActual } from "../../datos/LecturaActualContext";
import { useRealmCrud } from "../../datos/RealmContext";
import { useEffect, useState } from "react";

const ModalListaLecturas = function ({ reference }) {
  const { obtenerLecturas } = useRealmCrud();
  const [, setLecturaActual] = useLecturaActual();
  const [lecturas, setLecturas] = useState([]);

  useEffect(() => {
    setLecturas(obtenerLecturas());
  }, []);

  return (
    <ModalInferior reference={reference}>
      <FlatList
        style={{ flex: 1, padding: Tema.padding }}
        ItemSeparatorComponent={() => (
          <View
            style={[
              { backgroundColor: Colores.transparente, height: Tema.gap },
            ]}
          />
        )}
        data={lecturas}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={function () {
              reference.current.close();
              setLecturaActual(item);
            }}
            style={{
              padding: Tema.padding,
              backgroundColor: Colores.primario,
              opacity: 0.9,
              borderRadius: Tema.borderRadius,
              elevation: 5,
            }}
          >
            <Text style={{ ...FuentesTexto.titulo, color: Colores.blanco }}>
              {item.titulo}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
      />
    </ModalInferior>
  );
};

export default ModalListaLecturas;
