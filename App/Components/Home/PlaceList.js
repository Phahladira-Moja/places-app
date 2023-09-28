import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";
import PlaceItemBig from "./PlaceItemBig";
import { useNavigation } from "@react-navigation/native";

const PlaceList = ({ placeList }) => {
  const navigator = useNavigation();

  const onPlaceClick = (item) => {
    navigator.navigate("place-detail");
  };

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
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} onPress={() => onPlaceClick(item)}>
            {index % 4 == 0 ? (
              <PlaceItemBig place={item} />
            ) : (
              <PlaceItem place={item} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PlaceList;
