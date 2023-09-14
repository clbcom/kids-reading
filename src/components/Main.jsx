import React from "react";
import Constants from "expo-constants";
import { Text } from "react-native";
import { Route, Routes } from "react-router-native";

import AppNav from "./barraNav/AppNav";
import Inicio from "./inicio/Inicio";
import ViewBackgroundImage from "./backgrounds/ViewBackgroundImage";
import { Fondos } from "../constantes";
import InicioMicrofono from "./lectura/InicioMicrofono";
import { DatosProvider } from "../datos/DatosContext";
const Main = () => {
  return (
    <ViewBackgroundImage
      resizeMode="repeat"
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        alignItems: "center",
        justifyContent: "space-between",
      }}
      source={Fondos.blanco}
    >
      <DatosProvider>
        <Routes>
          <Route path="/" element={<InicioMicrofono />} exact />
          <Route path="/tarjetas" exact element={<Inicio />} />
          <Route
            path="/configuracion"
            element={<Text>Configuracion</Text>}
            exact
          />
        </Routes>
      </DatosProvider>
      <AppNav />
    </ViewBackgroundImage>
  );
};
export default Main;
