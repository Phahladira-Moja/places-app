import Colors from "../../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

import PlaceDetailItem from "./PlaceDetailItem";
import GoogleMapView from "../Home/GoogleMapView";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Platform,
  ScrollView,
} from "react-native";

const PlaceDetail = () => {
  const param = useRoute().params;
  const [place, setPlace] = useState(param.place);

  const onDirectionClick = () => {
    const { lat, lng } = place.geometry.location;
    const vicinity = encodeURIComponent(place.vicinity);

    let url = "";

    if (Platform.OS === "ios") {
      url = `https://maps.apple.com/?daddr=${lat},${lng}&q=${vicinity}`;
    } else if (Platform.OS === "android") {
      url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&q=${vicinity}`;
    }

    Linking.openURL(url).catch((err) =>
      console.error("An error occurred: ", err)
    );
  };

  return (
    <ScrollView style={{ padding: 20, backgroundColor: Colors.WHITE, flex: 1 }}>
      <PlaceDetailItem
        place={place}
        onDirectionClick={() => onDirectionClick()}
      />
      <GoogleMapView placeList={[param.place]} />
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          alignContent: "center",
          alignItems: "center",
          margin: 8,
          borderRadius: 50,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          paddingBottom: 15,
        }}
        onPress={() => onDirectionClick()}
      >
        <Ionicons name="navigate-circle-outline" size={30} color="white" />
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: "raleway-regular",
          }}
        >
          Get Direction on Google Map
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PlaceDetail;
