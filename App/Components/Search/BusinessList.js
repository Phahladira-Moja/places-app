import { View, Dimensions, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Shared/Colors";
import BusinessItem from "./BusinessItem";
import { useNavigation } from "@react-navigation/native";

const BusinessList = ({ placeList }) => {
  const navigation = useNavigation();

  return (
    <View>
      <LinearGradient
        // Button Linear Gradient
        colors={["transparent", Colors.WHITE]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      >
        <FlatList
          data={placeList}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          renderItem={({ item, index }) =>
            index <= 6 && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("place-detail", {
                    place: item,
                  })
                }
              >
                <BusinessItem place={item} />
              </TouchableOpacity>
            )
          }
        />
      </LinearGradient>
    </View>
  );
};

export default BusinessList;
