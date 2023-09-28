import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";
import PlaceList from "../Components/Home/PlaceList";

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
    <ScrollView style={{ padding: 20 }}>
      <SafeAreaView>
        <Header />
        <GoogleMapView />
        <CategoryList />
        {placeList ? <PlaceList placeList={placeList} /> : null}
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
