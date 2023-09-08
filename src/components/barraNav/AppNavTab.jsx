import { View, StyleSheet } from "react-native";
import { Amarillo, Azul } from "../../colors";
import { Link } from "react-router-native";
import { useLocation } from "react-router-native";
import IconOutline from "../icons/IconOutline";

const AppNavTab = ({ to, icon }) => {
  const location = useLocation();

  const activo = location.pathname === to;
  return (
    <Link underlayColor={Azul.tema3} style={styles.link_container} to={to}>
      <View style={[styles.container, activo && styles.activo]}>
        <IconOutline
          name={icon}
          style={[styles.icon, activo && styles.icon__activo]}
        />
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
    backgroundColor: Azul.secundario,
  },
  icon: {
    fontSize: 28,
    color: Azul.primario,
  },
  icon__activo: {
    color: Amarillo.primario,
    fontWeight: "bold",
  },
});
export default AppNavTab;
