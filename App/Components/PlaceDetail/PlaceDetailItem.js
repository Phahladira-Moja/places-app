import React from "react";
import Colors from "../../Shared/Colors";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import GlobalApi from "../../Services/GlobalApi";
import { Ionicons } from "@expo/vector-icons";
import Share from "../../Services/Share";

const PlaceDetailItem = ({ place, onDirectionClick }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 26,
          marginBottom: 10,
          fontFamily: "raleway-bold",
        }}
      >
        {place.name}
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

      <View
        style={{
          marginTop: 10,
        }}
      >
        {place?.photos ? (
          <Image
            source={{
              uri: GlobalApi.getPlacesPhoto(place?.photos[0]?.photo_reference),
            }}
            style={{ width: "100%", height: 160, borderRadius: 15 }}
          />
        ) : null}

        <Text
          style={{ fontSize: 16, marginTop: 10, color: Colors.DARK_GRAY }}
          numberOfLines={2}
        >
          {place.vicinity ? place.vicinity : place.formatted_address}
        </Text>

        {place?.opening_hours ? (
          <Text
            style={{
              fontFamily: "raleway-regular",
            }}
          >
            {place?.opening_hours?.open_now == true ? "(Open)" : "(Closed)"}
          </Text>
        ) : null}

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            display: "flex",
            gap: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => onDirectionClick()}
            style={{
              direction: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: Colors.GRAY,
              width: 110,
              padding: 3,
              borderRadius: 40,
              justifyContent: "center",
            }}
          >
            <Ionicons name="navigate-circle-outline" size={24} color="black" />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "raleway-regular",
              }}
            >
              Directions
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Share.SharePlace(place)}
            style={{
              direction: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: Colors.GRAY,
              width: 110,
              padding: 3,
              borderRadius: 40,
              justifyContent: "center",
            }}
          >
            <Ionicons name="md-share-outline" size={24} color="black" />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "raleway-regular",
              }}
            >
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlaceDetailItem;
