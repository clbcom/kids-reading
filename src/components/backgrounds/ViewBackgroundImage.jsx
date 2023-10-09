import { Image, StyleSheet, View } from "react-native";

const ViewBackgroundImage = ({
  style,
  source,
  resizeMode,
  opacity,
  children,
  ...otrasProps
}) => {
  return (
    <View style={[style,  styles.default ]} {...otrasProps}>
      <Image
        opacity={opacity}
        resizeMode={resizeMode}
        style={styles.backgroundImage}
        source={source}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  // para evitar que deformen el fondo, y este se acople como deberia
  default: {
    padding: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
});
export default ViewBackgroundImage;
