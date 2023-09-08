import React from "react";
import Constants from "expo-constants";
import { Text } from "react-native";
import { Route, Routes } from "react-router-native";

import AppNav from "./barraNav/AppNav";
import Inicio from "./inicio/Inicio";
import ViewBackgroundImage from "./backgrounds/ViewBackgroundImage";
import { Fondos } from "../constantes";
const Main = () => {
  return (
    <ViewBackgroundImage
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        alignItems: "center",
        justifyContent: "space-between",
      }}
      source={Fondos.blanco}
    >
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route path="/microfono" element={<Text>About</Text>} exact />
        <Route
          path="/configuracion"
          element={<Text>Configuracion</Text>}
          exact
        />
      </Routes>
      <AppNav />
    </ViewBackgroundImage>
  );
};
export default Main;
