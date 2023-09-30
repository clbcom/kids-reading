import { View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { useLocation } from "react-router-native";
import IconOutline from "../icons/IconOutline";
import { Colores } from "../../constantes";

const AppNavTab = ({ to, icon }) => {
  const location = useLocation();

  const activo = location.pathname === to;
  return (
    <Link
      underlayColor={Colores.verdeClaro}
      style={styles.link_container}
      to={to}
    >
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
    backgroundColor: Colores.primario,
  },
  icon: {
    fontSize: 28,
    color: Colores.verdeClaro,
  },
  icon__activo: {
    color: Colores.secundario,
  },
});
export default AppNavTab;
