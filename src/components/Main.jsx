import React from "react";
import Constants from "expo-constants";
import { View, Text, StyleSheet } from "react-native";
import { Route, Routes } from "react-router-native";

import AppNav from "./barraNav/AppNav";
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
      <Routes style={{ flex: 1 }}>
        <Route style={{ flex: 1 }} path="/" exact element={<Text>Home</Text>} />
        <Route path="/about" element={<Text>About</Text>} exact />
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
