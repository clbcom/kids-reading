import { createContext, useContext, useEffect, useState } from "react";
import { useRealmCrud } from "./RealmContext";
import TextoCargando from "../components/carga/TextoCargando";

const LecturaActualContext = createContext();

const LecturaActualProvider = ({ children }) => {
  const { obtenerLecturas } = useRealmCrud();
  const [lecturaActual, setLecturaActual] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setLecturaActual(obtenerLecturas()[0]);
    setCargando(false);
  }, []);

  return (
    cargando ? <TextoCargando /> : (
      <LecturaActualContext.Provider
        value={[lecturaActual, setLecturaActual]}
      >
        {children}
      </LecturaActualContext.Provider>
    )
  );
};

const useLecturaActual = () => {
  return useContext(LecturaActualContext);
};

export { LecturaActualProvider, useLecturaActual };
