import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";

const HomeScreen = () => {
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    GetNearBySearchPlace();
  }, []);

  const GetNearBySearchPlace = () => {
    GlobalApi.nearByPlaces().then((response) => {
      setPlaceList(response.data.results);
    });
  };

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
