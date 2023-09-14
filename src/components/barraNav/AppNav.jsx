import { View, StyleSheet } from "react-native";
import AppNavTab from "./AppNavTab";
import { Colores, Tema } from "../../constantes";
const AppNav = () => {
  return (
    <View style={styles.container}>
      <AppNavTab to="/tarjetas" icon="home" />
      <AppNavTab to="/" icon="mic" />
      <AppNavTab to="/configuracion" icon="settings" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopStartRadius: Tema.borderRadius,
    borderTopEndRadius: Tema.borderRadius,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: 60,
    backgroundColor: Colores.azulMedio,
    overflow: "hidden",
  },
});

export default AppNav;
