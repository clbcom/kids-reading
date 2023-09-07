import { View, StyleSheet } from "react-native";
import { Azul } from "./../../colors";
import AppNavTab from "./AppNavTab";
const AppNav = () => {
  return (
    <View style={styles.container}>
      <AppNavTab to="/" icon="home" />
      <AppNavTab to="/microfono" icon="mic" />
      <AppNavTab to="/configuracion" icon="settings" />
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
