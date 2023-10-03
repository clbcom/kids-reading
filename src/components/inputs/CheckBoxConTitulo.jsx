import { Text, View } from "react-native";
import { FuentesTexto } from "../../constantes";
import CheckBox from "./CheckBox";

const CheckBoxConTitulo = ({ titulo, ...otrasProps }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <CheckBox {...otrasProps} />
      <Text style={{ ...FuentesTexto.parrafo }}>{titulo}</Text>
    </View>
  );
};

export default CheckBoxConTitulo;
