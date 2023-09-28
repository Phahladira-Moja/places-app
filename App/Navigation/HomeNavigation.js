import { Platform } from "react-native";
import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import PlaceDetail from "../Components/PlaceDetail/PlaceDetail";

const HomeNavigation = () => {
  const isAndroid = !(Platform.OS === "ios");
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen
        name="place-detail"
        component={PlaceDetail}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
