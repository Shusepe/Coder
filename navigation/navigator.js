import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/home.screen";
import ListScreen from "../screens/list.screen";
import AddScreen from "../screens/add.screen";
import ViewScreen from "../screens/view.screen";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

// const Tab = () => (
//   <TabsStack.Navigator
//     initialRouteName="List"
//     tabBarOptions={{
//       showLabel: false,
//       style: {
//         position: "absolute",
//         bottom: 25,
//         left: 20,
//         right: 20,
//         elevation: 0,
//         borderRadius: 15,
//         height: 90,
//         ...styles.shadow,
//       },
//     }}
//   />
// );

// const styles = StyleSheet.create({
//   shadow: {
//     shadowColor: "#7f5df0",
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//     elevation: 5,
//   },
//   item: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

function Navigator1() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="List" component={ListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator1;
