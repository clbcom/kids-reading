import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { useFonts } from "expo-font";
import { ImageBackground, Text } from "react-native";
function App() {
  const [loaded] = useFonts({
    Chewy: require("./assets/fuentes/Chewy.ttf"),
    FingerPaint: require("./assets/fuentes/FingerPaint.ttf"),
    Schoolbell: require("./assets/fuentes/Schoolbell.ttf"),
  });
  return (
    <NativeRouter>
      {loaded ? <Main /> : <Text>Cargando fuentes</Text>}
    </NativeRouter>
  );
}

export default App;
