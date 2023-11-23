import React from "react";
import { StatusBar } from "react-native";
import { Route, Routes } from "react-router-native";

import AppNav from "./barraNav/AppNav";
import Tarjetas from "./inicio/Tarjetas";
import ViewBackgroundImage from "./backgrounds/ViewBackgroundImage";
import { Fondos } from "../constantes";
import InicioMicrofono from "./lectura/InicioMicrofono";
import { RealmProviderContext } from "../datos/RealmContext";
import { LecturaActualProvider } from "../datos/LecturaActualContext";
import Configuracion from "./configuracion/Configuracion";

const Main = () => {
  return (
    <ViewBackgroundImage
      resizeMode="repeat"
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}
      source={Fondos.estrellas2}
    >
      <StatusBar barStyle="dark-content" />
      <RealmProviderContext>
        <LecturaActualProvider>
          <Routes>
            <Route path="/" element={<InicioMicrofono />}>
              <Route path="/:id" element={<InicioMicrofono />} />
            </Route>
            <Route path="/tarjetas" exact element={<Tarjetas />} />
            <Route path="/configuracion" element={<Configuracion />} exact />
          </Routes>
        </LecturaActualProvider>
      </RealmProviderContext>
      <AppNav />
    </ViewBackgroundImage>
  );
};
export default Main;
