import { API_KEY } from "@env";
import axios from "axios";

const MAPS_API_KEY = `${API_KEY}`;
const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const PHOTO_BASE_URL = "https://maps.googleapis.com/maps/api/place/photo";

const nearByPlaces = () =>
  axios.get(
    BASE_URL +
      "/nearbysearch/json?" +
      "&location=-33.8670522%2C151.1957362" +
      "&radius=1500" +
      "&type=restaurant" +
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

export default {
  nearByPlaces,
  getPlacesPhoto,
};
