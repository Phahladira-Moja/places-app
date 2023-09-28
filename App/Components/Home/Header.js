import React from "react";
import { View, Image, TextInput, Dimensions, StyleSheet } from "react-native";
import Colors from "../../Shared/Colors";

const Header = () => {
  return (
    <View
      style={{
        gap: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />

      <View>
        <TextInput placeholder="Search" style={styles.searchBar} />
      </View>

      <Image
        source={require("../../../assets/placeholder.jpg")}
        style={styles.userImage}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.blank,
    padding: 15,
    borderRadius: 25,
    paddingLeft: 10,
    width: Dimensions.get("screen").width * 0.65,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
