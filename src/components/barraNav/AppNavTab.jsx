import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { useLocation, useParams } from "react-router-native";
import IconOutline from "../icons/IconOutline";
import { Colores } from "../../constantes";
import { useEffect, useState } from "react";

const AppNavTab = ({ to, icon }) => {
  const location = useLocation();
  const [activo, setActivo] = useState(false);

  const forzarActivoEnRutaMicrofono = (path) => {
    const rutas = ["/", "/tarjetas", "/configuracion"];
    let active = rutas.includes(location.pathname);
    return active ? path : "/";
  };

  useEffect(() => {
    const path = forzarActivoEnRutaMicrofono(location.pathname);
    setActivo(path === to);
  }, [location]);

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
