import { StatusBar } from "react-native";
import { Groups } from "@screens/Groups";
import { Loading } from "@components/Loading";

import { ThemeProvider } from "styled-components";
import theme from "@theme/index";

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Groups /> : <Loading /> }
    </ThemeProvider>
  )
}

