import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";

const HomeScreen = () => {
  return (
    <View style={{ padding: 20 }}>
      <SafeAreaView>
        <Header />
        <GoogleMapView />
        <CategoryList />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
