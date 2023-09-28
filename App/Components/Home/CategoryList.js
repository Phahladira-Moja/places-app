import { View, Text, FlatList } from "react-native";
import React from "react";

const CategoryList = () => {
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("./../../../assets/gas.png"),
    },
    {
      id: 2,
      name: "Restaurants",
      value: "restaurant",
      icon: require("./../../../assets/food.png"),
    },
    {
      id: 3,
      name: "Cafe",
      value: "cafe",
      icon: require("./../../../assets/cafe.png"),
    },
  ];

  return (
    <View style={{ marginTop: 15 }}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "raleway-regular",
        }}
      >
        Select Top Category
      </Text>

      {/* Use a FlatList to display lists */}
      <FlatList
        data={categoryList}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CategoryList;
