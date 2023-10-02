import { View, StyleSheet } from "react-native";
import ContenedorBotones from "./ContenedorBotones";
import ContenedorLectura from "./ContenedorLectura";
import { useParams } from "react-router-native";
import { useEffect } from "react";
import { useRealmCrud } from "../../datos/RealmContext";
import { useLecturaActual } from "../../datos/LecturaActualContext";

const InicioMicrofono = () => {
  const params = useParams();
  const { obtenerLectura } = useRealmCrud();
  const [, setLecturaActual] = useLecturaActual();

  useEffect(() => {
    if (params.id !== undefined) {
      setLecturaActual(obtenerLectura(params.id));
    }
  }, []);
  return (
    <View style={styles.contenedor}>
      <ContenedorLectura />
      <ContenedorBotones />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default InicioMicrofono;
