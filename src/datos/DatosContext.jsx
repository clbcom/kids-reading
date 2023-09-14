import { createContext, useContext, useState } from "react";
import { tarjetas } from "./datosTarjeta";

const DatosContext = createContext();

const DatosProvider = ({ children }) => {
  const [lecturas, setLecturas] = useState(tarjetas);
  return (
    <DatosContext.Provider value={[lecturas, setLecturas]}>
      {children}
    </DatosContext.Provider>
  );
};

const useDatos = () => {
  return useContext(DatosContext);
};

export { DatosProvider, useDatos };
