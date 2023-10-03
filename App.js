import "react-native-get-random-values";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { useFonts } from "expo-font";
import { Fuentes } from "./src/constantes";
import TextoCargando from "./src/components/carga/TextoCargando";

function App() {
  const [loaded] = useFonts({
    Schoolbell: Fuentes.Schoolbell,
  });
  return <NativeRouter>{loaded ? <Main /> : <TextoCargando />}</NativeRouter>;
}

export default App;
