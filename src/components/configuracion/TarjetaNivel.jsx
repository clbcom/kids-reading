import { StyleSheet, Text, View } from "react-native";
import { Colores, FuentesTexto, Tema } from "../../constantes";
import { useEffect, useState } from "react";
import { useRealmCrud } from "../../datos/RealmContext";
import TarjetaLeccion from "./TarjetaLeccion";

const TarjetaNivel = ({ nivel, existeCambio }) => {
  const [lecturas, setLecturas] = useState([]);
  const { obtenerPorNivel } = useRealmCrud();

  useEffect(() => {
    const lecturasDeNivel = obtenerPorNivel(nivel);
    setLecturas([...lecturasDeNivel]);
  }, [existeCambio]);

  return (
    <View style={styles.tarjetas__nivel}>
      <View style={styles.tarjetas__nivel__titulo}>
        <Text style={{ ...FuentesTexto.titulo, textAlign: "center" }}>
          Nivel {nivel}
        </Text>
      </View>
      <View style={styles.tarjetas__nivel__lecciones}>
        {lecturas.map((lect, _) => <TarjetaLeccion key={_} datos={lect} />)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tarjetas__nivel: {
    padding: Tema.padding,
    backgroundColor: Colores.blanco,
    elevation: 5,
    borderRadius: Tema.borderRadius,
    marginBottom: Tema.margin,
  },
  tarjetas__nivel__titulo: {
    borderBottomColor: `${Colores.primario}77`,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
});

export default TarjetaNivel;
