import { createContext, useContext, useEffect, useState } from "react";
import { useRealmCrud } from "./RealmContext";

const LecturaActualContext = createContext();

const LecturaActualProvider = ({ children }) => {
  const { obtenerLecturas } = useRealmCrud();
  const [lecturaActual, setLecturaActual] = useState(null);

  useEffect(() => {
    setLecturaActual(obtenerLecturas()[0]);
  }, []);
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
