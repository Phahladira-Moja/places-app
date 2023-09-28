import { API_KEY } from "@env";
import axios from "axios";

const MAPS_API_KEY = `${API_KEY}`;
const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const PHOTO_BASE_URL = "https://maps.googleapis.com/maps/api/place/photo";

const nearByPlaces = (lat, lng, type) =>
  axios.get(
    BASE_URL +
      "/nearbysearch/json?" +
      "&location=" +
      lat +
      "," +
      lng +
      "&radius=1500" +
      "&type=" +
      type +
      "&key=" +
      MAPS_API_KEY
  );

const getPlacesPhoto = (reference) => {
  return (
    PHOTO_BASE_URL +
    "?maxwidth=400" +
    "&photo_reference=" +
    reference +
    "&key=" +
    MAPS_API_KEY
  );
};

const searchByText = (searchText) =>
  axios.get(
    BASE_URL + "/textsearch/json?query=" + searchText + "&key=" + MAPS_API_KEY
  );

export default {
  searchByText,
  nearByPlaces,
  getPlacesPhoto,
};
