import React from "react";
import Colors from "../../Shared/Colors";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import GlobalApi from "../../Services/GlobalApi";
import HorizontalLine from "./HorizontalLine";

const PlaceItemBig = ({ place }) => {
  return (
    <View style={{ marginTop: 20 }}>
      {place?.photos ? (
        <Image
          source={{
            uri: GlobalApi.getPlacesPhoto(place?.photos[0]?.photo_reference),
          }}
          style={{ width: "100%", height: 130, borderRadius: 15 }}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")}
          style={{ width: "100%", height: 130, borderRadius: 15 }}
        />
      )}
      <Text
        numberOfLines={2}
        style={{
          fontSize: 18,
          fontFamily: "raleway-bold",
          marginBottom: 2,
          marginTop: 5,
        }}
      >
        {place.name}
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 5 }} numberOfLines={2}>
        {place.vicinity}
      </Text>

      <View
        style={{
          gap: 5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign name="star" size={20} color={Colors.YELLOW} />
        <Text>{place.rating}</Text>
      </View>

      <HorizontalLine />
    </View>
  );
};

export default PlaceItemBig;
