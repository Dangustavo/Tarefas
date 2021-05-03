import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import SplashScreen from "./pages/SplashScreen";

import Register from "./pages/Register";
import Logon from "./pages/Logon";

import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import Detail from "./pages/Detail";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="SplashScreen" component={SplashScreen} />

        <AppStack.Screen name="Register" component={Register} />
        <AppStack.Screen name="Logon" component={Logon} />

        <AppStack.Screen name="Tasks" component={Tasks} />
        <AppStack.Screen name="NewTask" component={NewTask} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
