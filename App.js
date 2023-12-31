import { StyleSheet, View } from "react-native";
import TabNavigation from "./App/Navigation/TabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

import { UserLocationContext } from "./App/Context/UserLocationContext";

import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fontsLoaded] = useFonts({
    "raleway-bold": require("./assets/Fonts/Raleway-SemiBold.ttf"),
    "raleway-regular": require("./assets/Fonts/Raleway-Regular.ttf"),
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <UserLocationContext.Provider value={{ location, setLocation }}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </UserLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
