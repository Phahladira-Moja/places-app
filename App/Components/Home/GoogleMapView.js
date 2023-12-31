import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";
import PlaceMarker from "./PlaceMarker";

const GoogleMapView = ({ placeList }) => {
  const [mapRegion, setMapRegion] = useState({});
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
          fontWeight: "600",
          fontFamily: "raleway-bold",
        }}
      >
        Top Near By Places
      </Text>
      <View style={styles.container}>
        {location ? (
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
          >
            <Marker title="You" coordinate={mapRegion} />

            {placeList > 0 ??
              placeList.map(
                (item, index) =>
                  index <= 4 && <PlaceMarker item={item} key={index} />
              )}
          </MapView>
        ) : null}
      </View>
    </View>
  );
};

export default GoogleMapView;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: "hidden",
  },
  map: {
    width: Dimensions.get("screen").width * 0.95,
    height: Dimensions.get("screen").height * 0.23,
  },
});
