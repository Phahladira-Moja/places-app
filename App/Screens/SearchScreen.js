import { View, Text } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import SearchBar from "../Components/Search/SearchBar";
import GoogleMapViewFull from "../Components/Search/GoogleMapViewFull";
import GlobalApi from "../Services/GlobalApi";
import { UserLocationContext } from "../Context/UserLocationContext";
import BusinessList from "../Components/Search/BusinessList";

const SearchScreen = () => {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  const GetNearBySearchPlace = (value) => {
    GlobalApi.searchByText(value).then((response) => {
      setPlaceList(response.data.results);
    });
  };

  useEffect(() => {
    GetNearBySearchPlace("restaurant");
  }, []);

  return (
    <View>
      <View style={{ position: "absolute", zIndex: 20 }}>
        <SearchBar setSearchText={(value) => GetNearBySearchPlace(value)} />
      </View>
      <GoogleMapViewFull placeList={placeList} />
      <View style={{ position: "absolute", zIndex: 20, bottom: 0 }}>
        <BusinessList placeList={placeList} />
      </View>
    </View>
  );
};

export default SearchScreen;
