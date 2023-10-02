import { View, Text, StyleSheet } from "react-native";
import ViewBackgroundImage from "../backgrounds/ViewBackgroundImage";
import { Colores, Fondos, FuentesTexto, Tema } from "../../constantes";
import TarjetaContenido from "./TarjetaContenido";
import { useRealmCrud } from "../../datos/RealmContext";
import { useState, useEffect } from "react";

const TarjetaNivel = ({ nivel }) => {
  const [lecturasPorNivel, setLecturasPorNivel] = useState([]);
  const { obtenerPorNivel } = useRealmCrud();

  useEffect(() => {
    setLecturasPorNivel([...obtenerPorNivel(nivel)]);
  }, []);

  return (
    <View style={styles.contenedor}>
      <ViewBackgroundImage
        style={styles.titulo__contenedor}
        opacity={0.7}
        source={Fondos.tarjeta3_blur}
      >
        <Text style={styles.titulo__text}>Nivel {nivel}</Text>
        <Text
          style={{
            ...FuentesTexto.parrafo,
            color: Colores.blanco,
            padding: Tema.padding,
          }}
        >
          {nivel === 1 && "5-6 años"}
          {nivel === 2 && "7-9 años"}
          {nivel === 3 && "10+ años"}
        </Text>
      </ViewBackgroundImage>
      <View style={styles.contenido__nivel}>
        {lecturasPorNivel &&
          lecturasPorNivel.map(({ _id, titulo }) => (
            <TarjetaContenido key={_id} id={_id} titulo={titulo} />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    overflow: "hidden",
    borderRadius: Tema.borderRadius,
    backgroundColor: Colores.blanco,
    margin: Tema.margin,
    elevation: 8,
  },
  titulo__contenedor: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colores.verde,
  },
  titulo__text: {
    ...FuentesTexto.titulo,
    textAlign: "center",
    fontSize: Tema.h0,
    padding: Tema.padding,
    color: Colores.secundario,
  },
  contenido__nivel: {
    padding: Tema.padding,
  },
});

export default TarjetaNivel;
