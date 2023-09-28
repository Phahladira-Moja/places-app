import { View, Text, FlatList } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import PlaceItemBig from "./PlaceItemBig";

const PlaceList = ({ placeList }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "raleway-regular",
        }}
      >
        Found {placeList.length} Places
      </Text>

      <FlatList
        data={placeList}
        scrollEnabled={false}
        renderItem={({ item, index }) =>
          index % 4 == 0 ? (
            <PlaceItemBig place={item} />
          ) : (
            <PlaceItem place={item} />
          )
        }
      />
    </View>
  );
};

export default PlaceList;
