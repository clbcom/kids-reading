import { Animated, StyleSheet, View } from "react-native";
import ViewBackgroundImage from "../backgrounds/ViewBackgroundImage";
import { useRef } from "react";
import { Iconos } from "../../constantes";

const TextoCargando = () => {
  const creciendo = useRef(new Animated.Value(1)).current;

  const handleCreciendo = () => {
    Animated.timing(creciendo, {
      toValue: 2,
      duration: 250,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) handleDeCreciendo();
    });
  };

  const handleDeCreciendo = () => {
    Animated.timing(creciendo, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) handleCreciendo();
    });
  };

  // necesario para que haga la animacion desde un principio
  handleCreciendo();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={[styles.contenedor, { transform: [{ scale: creciendo }] }]}
      >
        <ViewBackgroundImage
          source={Iconos.libro}
          style={{ width: "100%", height: "100%" }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    overflow: "hidden",
    width: 50,
    height: 50,
  },
});

export default TextoCargando;
