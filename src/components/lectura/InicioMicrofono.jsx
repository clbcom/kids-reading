import { View, Text, StyleSheet } from "react-native";
import { useDatos } from "../../datos/DatosContext";
import { Colores, FuentesTexto, Tema } from "../../constantes";
import ContenedorBotones from "./ContenedorBotones";
import { useState } from "react";

const InicioMicrofono = () => {
  const [lecturas] = useDatos();
  const [lecturaActual, setLecturaActual] = useState(lecturas[0]);

  const handleOnSelectNuevaLectura = (nuevaLectura) => {
    setLecturaActual(nuevaLectura);
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedor__lectura}>
        <View>
          <Text
            style={{
              ...FuentesTexto.titulo,
              padding: Tema.padding,
              textAlign: "center",
              color: Colores.primario,
            }}
          >
            {lecturaActual.titulo}
          </Text>
        </View>
        <View style={styles.contenedor__lectura__texto}>
          <Text style={{ ...FuentesTexto.parrafoLarge }}>
            {lecturaActual.lectura}
          </Text>
        </View>
      </View>
      <ContenedorBotones onSelect={handleOnSelectNuevaLectura} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
  contenedor__lectura: {
    flex: 5,
    overflow: "hidden",
  },
  contenedor__lectura__texto: {
    flex: 1,
    backgroundColor: Colores.blanco,
    marginHorizontal: Tema.margin,
    borderRadius: Tema.borderRadius,
    borderColor: `${Colores.primario}af`,
    borderWidth: 1,
    borderStyle: "solid",
    padding: Tema.padding,
  },
});

export default InicioMicrofono;
