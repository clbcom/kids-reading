import Realm from "realm";
import { createContext, useContext, useEffect } from "react";
import { createRealmContext } from "@realm/react";
import { Lecturas } from "./Esquemas";
import { tarjetas } from "./datosTarjeta";

const config = {
  schema: [Lecturas],
};

const { RealmProvider, useRealm } = createRealmContext(config);

const RealmContext = createContext();

//TODO: Documentar cada funcion de este documento...
const RealmProviderCrud = ({ children }) => {
  const realm = useRealm();
  const cache = new Map();

  const obtenerLectura = (id) => {
    return realm.objectForPrimaryKey(Lecturas, new Realm.BSON.UUID(id));
  };

  const obtenerPorNivel = (nivel) => {
    if (cache.has(nivel)) {
      return JSON.parse(cache.get(nivel));
    } else {
      const lecturasNivel = realm
        .objects(Lecturas)
        .filtered("nivel = $0", nivel)
        .sorted("fecha");
      cache.set(nivel, JSON.stringify(lecturasNivel));
      return lecturasNivel;
    }
  };

  const obtenerLecturas = () => {
    if (cache.size === 0) {
      return realm.objects(Lecturas);
    } else {
      const lecturas = new Array();
      cache.forEach((nivel) => {
        nivel = JSON.parse(nivel);
        nivel.forEach((lectura) => lecturas.push(lectura));
      });
      return lecturas;
    }
  };

  /**
   * lectura = {titulo, lectura, nivel}
   * @param {{titulo, lectura, nivel}} lectura objeto lectura con las propiedades: titulo, lectura y nivel
   * @returns {Object | undefined}
   */
  const agregarLectura = (lectura) => {
    let objetoLectura;
    try {
      realm.write(() => {
        objetoLectura = realm.create(Lecturas, lectura);
      });
      if (cache.has(lectura.nivel)) {
        const lecturasPorNivel = new Array(...obtenerPorNivel(lectura.nivel));
        lecturasPorNivel.push(objetoLectura);
        cache.set(lectura.nivel, JSON.stringify(lecturasPorNivel));
      } else {
        cache.set(lectura.nivel, JSON.stringify(new Array(objetoLectura)));
      }
    } catch (error) {
      objetoLectura = undefined;
      console.error(error);
    }
    return objetoLectura;
  };

  const actualizarLectura = ({ id, ...restoLectura }) => {
    const objetoLectura = obtenerLectura(id);

    if (objetoLectura) {
      realm.write(() => {
        objetoLectura.titulo = restoLectura.titulo;
        objetoLectura.lectura = restoLectura.lectura;
        objetoLectura.nivel = restoLectura.nivel;
      });

      // restablecemos el cache
      cache.clear();

      return true;
    }
    return false;
  };

  const eliminarLectura = (lectura) => {
    const objetoLectura = obtenerLectura(lectura._id);
    let eliminado = false;
    try {
      if (objetoLectura) {
        realm.write(() => {
          realm.delete(objetoLectura);
        });
        // limpiamos la cache
        cache.clear();
        eliminado = true;
      }
    } catch (error) {
    }
    return eliminado;
  };

  const cargarDatosIniciales = () => {
    const lecturas = realm.objects(Lecturas);

    // quiere decir que ya existen datos
    if (lecturas.length > 0) return;

    // se espera que se ejecute solo la primera vez que se abre la app
    tarjetas.forEach((tarjeta) => {
      agregarLectura(tarjeta);
    });
  };

  useEffect(() => {
    cargarDatosIniciales();
  }, []);
  return (
    <RealmContext.Provider
      value={{
        obtenerLectura,
        obtenerPorNivel,
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
