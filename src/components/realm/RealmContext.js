import React, { createContext, useContext } from "react";
import Realm from "realm";

import Lectura from "./Esquemas";

// Define el contexto
const RealmContext = createContext();

// Proveedor de contexto que inicializa Realm
export const RealmProvider = ({ children }) => {
  const realm = new Realm({ schema: [Lectura] }); // Define tu esquema aquí

  return (
    <RealmContext.Provider value={realm}>{children}</RealmContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de Realm
export const useRealm = () => {
  return useContext(RealmContext);
};
