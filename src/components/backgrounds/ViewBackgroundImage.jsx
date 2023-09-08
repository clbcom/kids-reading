import { View, Image, StyleSheet } from "react-native";

const ViewBackgroundImage = ({ source, children, ...otrasProps }) => {
  return (
    <View {...otrasProps}>
      <Image
        resizeMode="repeat"
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
});
export default ViewBackgroundImage;
