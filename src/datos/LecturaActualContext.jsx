import { createContext, useContext, useEffect, useState } from "react";
import { useRealmCrud } from "./RealmContext";
import TextoCargando from "../components/carga/TextoCargando";

const LecturaActualContext = createContext();

const LecturaActualProvider = ({ children }) => {
  const { obtenerLecturas } = useRealmCrud();
  const [cargando, setCargando] = useState(true);
  const [lecturaActual, setLecturaActual] = useState(null);
  const [idSiguienteLectura, setIdSiguienteLectura] = useState(null);

  const establecerLecturaActualConSiguiente = (lectura, idSiguienteLectura) => {
    setLecturaActual(lectura);
    setIdSiguienteLectura(idSiguienteLectura);
  };

  useEffect(() => {
    const lecturas = obtenerLecturas();
    establecerLecturaActualConSiguiente(
      lecturas[0],
      lecturas[1] === undefined ? undefined : lecturas[1]._id,
    );
    setCargando(false);
  }, []);

  return (
    cargando ? <TextoCargando /> : (
      <LecturaActualContext.Provider
        value={[
          lecturaActual,
          establecerLecturaActualConSiguiente,
          idSiguienteLectura,
        ]}
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
