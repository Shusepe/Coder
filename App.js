import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import Store from "./store";
import HomeScreen from "./screens/home.screen";
import ListScreen from "./screens/list.screen";
import AddScreen from "./screens/add.screen";
import ViewScreen from "./screens/view.screen";

const Stack = createStackNavigator();

function App() {
  // const [loaded] = useFonts({
  //   "KronaOne-Regular": require("./assets/fonts/KronaOne-Regular.ttf"),
  // });

  // if (!loaded) return <AppLoading />;

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Add" component={AddScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="View" component={ViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
