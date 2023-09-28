import React from "react";
import Colors from "../../Shared/Colors";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import GlobalApi from "../../Services/GlobalApi";

const BusinessItem = ({ place }) => {
  return (
    <View
      style={{
        width: 140,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        padding: 10,
        margin: 5,
        elevation: 0.4,
      }}
    >
      {place?.photos ? (
        <Image
          source={{
            uri: GlobalApi.getPlacesPhoto(place?.photos[0]?.photo_reference),
          }}
          style={{ width: 120, height: 80, borderRadius: 10 }}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")}
          style={{ width: 120, height: 80, borderRadius: 10 }}
        />
      )}

      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={2}
          style={{ fontFamily: "raleway-bold", fontSize: 16, marginTop: 5 }}
        >
          {place.name}
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontFamily: "raleway",
            fontSize: 13,
            marginTop: 5,
            color: Colors.DARK_GRAY,
          }}
        >
          {place.vicinity ? place.vicinity : place.formatted_address}
        </Text>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginTop: 5,
            flexDirection: "row",
            marginBottom: -5,
          }}
        >
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default BusinessItem;
