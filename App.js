import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Starter from "./screens/Starter.jsx";
import Login from "./screens/Login.jsx";
import SignUp from "./screens/SignUp.jsx";
import { StatusBar } from "react-native";
import ForgotPassword from "./screens/ForgotPassword.jsx";
import CreateNewPassword from "./screens/CreateNewPassword.jsx";
import Home from "./screens/Home.jsx";
import AddCat from "./screens/AddCat.jsx";
import PetProfile from "./screens/PetProfile.jsx";
import HealthRecords from "./screens/HealthRecords.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="Starter"
          component={Starter}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen
          name="HealthReacords"
          component={HealthRecords}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={PetProfile}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen
          name="AddCat"
          component={AddCat}
          options={{
            title: "",
            headerShown: false,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="CreateNewPassword"
          component={CreateNewPassword}
          options={{ title: "", headerShown: true, headerShadowVisible: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: "", headerShown: true, headerShadowVisible: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Forgot ", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
