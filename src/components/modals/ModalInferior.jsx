import { forwardRef } from "react";
import { StyleSheet, ScrollView } from "react-native";
import MyModalInferior from "react-native-raw-bottom-sheet";
import ViewBackgroundImage from "../backgrounds/ViewBackgroundImage";
import { Fondos, Tema } from "../../constantes";

const ModalInferior = ({ reference, withScroll, children } = props) => {
  return (
    <MyModalInferior
      ref={reference}
      openDuration={300}
      animationType="fade"
      dragFromTopOnly={true}
      closeOnDragDown={true}
      customStyles={customStylesModal}
    >
      <ViewBackgroundImage
        style={{ flex: 1 }}
        resizeMode={"repeat"}
        source={Fondos.estrellas}
      >
        {withScroll ? (
          <ScrollView style={styles.contenedor}>{children}</ScrollView>
        ) : (
          children
        )}
      </ViewBackgroundImage>
    </MyModalInferior>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

const customStylesModal = StyleSheet.create({
  container: {
    height: "60%",
    borderTopStartRadius: Tema.borderRadius,
    borderTopEndRadius: Tema.borderRadius,
    overflow: "hidden",
  },
  draggableIcon: {
    width: "35%",
    height: 10,
    elevation: 5,
  },
});
export default forwardRef(ModalInferior);
