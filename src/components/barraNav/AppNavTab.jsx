import { View, Text, StyleSheet } from "react-native";
import { Amarillo, Azul } from "../../colors";
import { Link } from "react-router-native";
import { useLocation } from "react-router-native";
import IconOutline from "../icons/IconOutline";

const AppNavTab = ({ to, icon, children }) => {
  const location = useLocation();

  const activo = location.pathname === to;
  return (
    <Link underlayColor={Azul.tema3} style={styles.link_container} to={to}>
      <View style={[styles.container, activo && styles.activo]}>
        <IconOutline
          name={icon}
          style={[styles.icon, activo && styles.icon__activo]}
        />
        {activo && <Text style={styles.text}>{children}</Text>}
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  link_container: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: "100%",
  },
  activo: {
    backgroundColor: Azul.tema2,
  },
  icon: {
    fontSize: 28,
    color: Azul.tema6,
  },
  icon__activo: {
    color: Amarillo.tema3,
  },
  text: {
    color: Amarillo.tema3,
    fontSize: 18,
  },
});
export default AppNavTab;
