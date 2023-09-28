import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ setSelectedCategory }) => {
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
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item.value)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;
