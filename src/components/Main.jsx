import React from "react";
import Constants from "expo-constants";
import { View, Text, ImageBackground, Image } from "react-native";
import { Route, Routes } from "react-router-native";

import AppNav from "./barraNav/AppNav";
import Inicio from "./inicio/Inicio";
import ViewBackgroundImage from "./backgrounds/ViewBackgroundImage";
const Main = () => {
  return (
    <ViewBackgroundImage
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      source={require("./../../assets/fondos/fondo-blanco.jpg")}
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
