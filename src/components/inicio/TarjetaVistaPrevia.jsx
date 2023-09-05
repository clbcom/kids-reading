import { SwipeRow } from "react-native-swipe-list-view";
import { forwardRef } from "react";
import TarjetaAcciones from "./TarjetaAcciones";
import TarjetaContenido from "./TarjetaContenido";

const TarjetaVistaPrevia = ({ key, titulo, descripcion, ref } = props) => {
  const pressEditar = () => {
    console.log("editar");
  };
  const pressEliminar = () => {
    console.log("eliminar");
  };
  return (
    <SwipeRow
      ref={ref}
      swipeKey={key}
      leftOpenValue={75}
      stopLeftSwipe={80}
      stopRightSwipe={-80}
      rightOpenValue={-75}
    >
      <TarjetaAcciones
        onPressEditar={pressEditar}
        onPressEliminar={pressEliminar}
      />
      <TarjetaContenido titulo={titulo} descripcion={descripcion} />
    </SwipeRow>
  );
};

export default forwardRef(TarjetaVistaPrevia);
