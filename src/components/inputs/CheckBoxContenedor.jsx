import { View } from "react-native";
import CheckBoxConTitulo from "./CheckBoxConTitulo";
import { useState } from "react";

const CheckBoxContenedor = ({ onCheck, valorInicial, ...otrasProps }) => {
  const [valorActualCheck, setValorActualCheck] = useState(valorInicial);
  const nombresCheck = [
    { titulo: "Nivel 1", valor: 1 },
    { titulo: "Nivel 2", valor: 2 },
    { titulo: "Nivel 3", valor: 3 },
  ];

  const handleOnCheck = (valor) => {
    setValorActualCheck(valor);
    onCheck(valor);
  };

  return (
    <View {...otrasProps}>
      {nombresCheck.map(({ titulo, valor }, i) => (
        <CheckBoxConTitulo
          key={i}
          check={valorActualCheck === valor}
          titulo={titulo}
          value={valor}
          onPress={handleOnCheck}
        />
      ))}
    </View>
  );
};

export default CheckBoxContenedor;
