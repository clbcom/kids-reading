import { StyleSheet } from "react-native";
import BotonConIcono from "../botones/BotonConIcono";
import { Colores, Tema } from "../../constantes";
import { useEffect, useState } from "react";

const CheckBox = ({ onPress, value, check }) => {
  const [checked, setChecked] = useState(check);

  const handleOnPress = () => {
    setChecked((prev) => !prev);
    if (onPress) onPress(value);
  };

  useEffect(() => {
    setChecked(check);
  }, [check]);

  return (
    <BotonConIcono
      onPress={handleOnPress}
      style={styles.contenedor}
      styleIcon={styles.icono}
      size={Tema.h1}
      name="checkbox"
      filled={checked}
    />
  );
};

const styles = StyleSheet.create({
  icono: {
    color: Colores.primario,
  },
});

export default CheckBox;
