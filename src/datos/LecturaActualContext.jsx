import { createContext, useContext, useState } from "react";
import { useDatos } from "./DatosContext";

const LecturaActualContext = createContext();

const LecturaActualProvider = ({ children }) => {
  const [lecturas] = useDatos();
  const [lecturaActual, setLecturaActual] = useState(lecturas[0]);

  return (
    <LecturaActualContext.Provider value={[lecturaActual, setLecturaActual]}>
      {children}
    </LecturaActualContext.Provider>
  );
};

const useLecturaActual = () => {
  return useContext(LecturaActualContext);
};

export { LecturaActualProvider, useLecturaActual };
