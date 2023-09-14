import { FlatList, View, Text, TouchableOpacity } from "react-native";
import ModalInferior from "../modals/ModalInferior";
import { useDatos } from "../../datos/DatosContext";
import { Colores, FuentesTexto, Tema } from "../../constantes";
const ModalListaLecturas = ({ reference, onSelect }) => {
  const [lecturas] = useDatos();
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
            onPress={() => {
              reference.current.close();
              onSelect(item);
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
        keyExtractor={(item) => item.id}
      />
    </ModalInferior>
  );
};

export default ModalListaLecturas;
