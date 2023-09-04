import { View, StyleSheet } from "react-native";
import { Azul } from "./../../colors";
import AppNavTab from "./AppNavTab";
const AppNav = () => {
  return (
    <View style={styles.container}>
      <AppNavTab to="/" icon="home">
        Inicio
      </AppNavTab>
      <AppNavTab to="/about" icon="mic">
        Microfono
      </AppNavTab>
      <AppNavTab to="/configuracion" icon="settings">
        Configuracion
      </AppNavTab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: 60,
    backgroundColor: Azul.tema1,
    overflow: "hidden",
  },
});

export default AppNav;
