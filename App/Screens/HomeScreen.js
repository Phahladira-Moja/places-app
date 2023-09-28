import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";
import PlaceList from "../Components/Home/PlaceList";
import { UserLocationContext } from "../Context/UserLocationContext";

const HomeScreen = () => {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    GetNearBySearchPlace("restaurant");
  }, []);

  const GetNearBySearchPlace = (value) => {
    GlobalApi.nearByPlaces(
      location?.coords?.latitude ?? -33.8670522,
      location?.coords?.longitude ?? 151.1957362,
      value
    ).then((response) => {
      setPlaceList(response.data.results ?? []);
    });
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <SafeAreaView>
        <Header />
        <GoogleMapView placeList={placeList} />
        <CategoryList
          setSelectedCategory={(value) => GetNearBySearchPlace(value)}
        />
        {placeList ? <PlaceList placeList={placeList} /> : null}
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
