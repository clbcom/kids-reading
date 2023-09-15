import { View, Text } from "react-native";
import { FuentesTexto } from "../../constantes";

const TextoCargando = ({ mensaje }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ ...FuentesTexto.parrafoLarge }}>Cargando...</Text>
      <Text style={{ ...FuentesTexto.parrafoLarge }}>{mensaje}</Text>
    </View>
  );
};

export default TextoCargando;
