import React from "react";
import Constants from "expo-constants";
import { View, Text } from "react-native";
import { Route, Routes } from "react-router-native";

import AppNav from "./barraNav/AppNav";
import Inicio from "./inicio/Inicio";
const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        alignItems: "center",
        justifyContent: "space-between",
      }}
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
    </View>
  );
};
export default Main;
