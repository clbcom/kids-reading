import { createContext, useContext, useState } from "react";

const CambiosContext = createContext();

import React from "react";

const CambiosProvider = ({ children }) => {
  // sera un swich que ejecutara una accion cada que cambie
  const [hayCambio, setHayCambio] = useState(false);

  const refrescar = () => setHayCambio((prev) => !prev);

  return (
    <CambiosContext.Provider value={[hayCambio, refrescar]}>
      {children}
    </CambiosContext.Provider>
  );
};

const useCambio = () => {
  return useContext(CambiosContext);
};
export { CambiosProvider, useCambio };
