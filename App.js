import "react-native-get-random-values";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import { Fuentes } from "./src/constantes";

function App() {
  const [loaded] = useFonts({
    Schoolbell: Fuentes.Schoolbell,
  });
  return (
    <NativeRouter>
      {loaded ? <Main /> : <Text>Cargando fuentes</Text>}
    </NativeRouter>
  );
}

export default App;
