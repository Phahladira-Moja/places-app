import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import Colors from "../../Shared/Colors";
import GlobalApi from "../../Services/GlobalApi";

const PlaceItem = ({ place }) => {
  return (
    <View
      style={{
        flex: 1,
        gap: 15,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Image
        source={{
          uri: GlobalApi.getPlacesPhoto(place?.photos[0]?.photo_reference),
        }}
        style={{ width: 100, height: 100, borderRadius: 15 }}
      />

      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "raleway-bold",
            marginBottom: 5,
          }}
          numberOfLines={2}
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
      </View>
    </View>
  );
};

export default PlaceItem;
