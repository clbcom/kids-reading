import { createContext, useContext, useEffect, useState } from "react";
import { createRealmContext } from "@realm/react";
import { Lecturas } from "./Esquemas";
import { tarjetas } from "./datosTarjeta";

const config = {
  schema: [Lecturas],
};

const { RealmProvider, useRealm, useObject } = createRealmContext(config);

const RealmContext = createContext();

const RealmProviderCrud = ({ children }) => {
  const realm = useRealm();
  const cache = new Map();
  const claveLecturas = "lecturas";
  const [isCached, setIsCached] = useState(false);

  const obtenerLectura = (id) => {
    if (cache.has(id)) {
      console.log("cached");
      return JSON.parse(cache.get(id));
    } else {
      const lectura = realm.objectForPrimaryKey(Lecturas, id);
      cache.set(id, JSON.stringify(lectura));
      return lectura;
    }
  };

  const obtenerLecturas = () => {
    if (cache.size === 0) {
      const lecturas = realm.objects(Lecturas).sorted("fecha", true);
      lecturas.forEach((lectura) =>
        cache.set(lectura._id, JSON.stringify(lectura))
      );
      return lecturas;
    } else {
      const lecturas = new Array();
      cache.forEach((lectura) => lecturas.push(JSON.parse(lectura)));
      return lecturas;
    }
  };

  const agregarLectura = (titulo, lectura) => {
    let objetoLectura;
    try {
      realm.write(() => {
        objetoLectura = realm.create(Lecturas, {
          titulo,
          lectura,
        });
      });
    } catch (error) {
      objetoLectura = undefined;
    }
    cache.set(objetoLectura._id, JSON.stringify(objetoLectura));
    return objetoLectura;
  };

  const actualizarLectura = (id, titulo, lectura) => {
    const objetoLectura = useObject(Lecturas, id);

    if (objetoLectura) {
      realm.write(() => {
        objetoLectura.titulo = titulo;
        objetoLectura.lectura = lectura;
      });
      cache.set(id, JSON.stringify(objetoLectura));
      return true;
    }
    return false;
  };

  const eliminarLectura = (lectura) => {
    try {
      realm.write(() => {
        realm.delete(lectura);
      });
      cache.delete(lectura._id);
      return true;
    } catch (error) {
      return false;
    }
  };

  const cargarDatosIniciales = () => {
    const lecturas = realm.objects(Lecturas);

    // quiere decir que ya existen datos
    if (lecturas.length > 0) return;

    // se espera que se ejecute solo la primera vez que se abre la app
    tarjetas.forEach((tarjeta) => {
      agregarLectura(tarjeta.titulo, tarjeta.lectura);
    });
  };

  useEffect(() => {
    cargarDatosIniciales();
  }, []);
  return (
    <RealmContext.Provider
      value={{
        obtenerLectura,
        obtenerLecturas,
        agregarLectura,
        actualizarLectura,
        eliminarLectura,
      }}
    >
      {children}
    </RealmContext.Provider>
  );
};
const RealmProviderContext = ({ children }) => {
  return (
    <RealmProvider>
      <RealmProviderCrud>{children}</RealmProviderCrud>
    </RealmProvider>
  );
};

const useRealmCrud = () => {
  return useContext(RealmContext);
};

export { RealmProviderContext, useRealmCrud };
