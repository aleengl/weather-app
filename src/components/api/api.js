import {
  API_KEY_LOCATION,
  API_KEY_WEATHER,
  API_URL_FORECAST,
  API_URL_LOCATION,
  API_URL_TIME,
} from "../../constants";

// get weather data
export const getWeatherData = async (
  { lat, lon },
  updateWeather,
  updateError
) => {
  try {
    const response = await fetch(
      `${API_URL_FORECAST}${lat}&lon=${lon}&cnt=5&appid=${API_KEY_WEATHER}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Could not fetch the weather data!");
    }

    const data = await response.json();
    updateWeather(data);
  } catch (error) {
    updateError(error.message);
    console.error(`Error: ${error.message}`);
  }
};

// get coordinates
export const getCoordinates = async (city, updatePosition, updateError) => {
  try {
    const response = await fetch(
      `${API_URL_LOCATION}${city}&limit=1&appid=${API_KEY_WEATHER}`
    );

    if (!response.ok) {
      throw new Error("Could not get the coordinates!");
    }

    const data = await response.json();
    const [locationData] = data;
    const { lat, lon } = locationData;

    updatePosition({
      lat: lat,
      lon: lon,
    });
  } catch (error) {
    updateError(error.message);
    console.error(`Error: ${error.message}`);
  }
};

// get local time
export const getLocalTime = async (city, getLocalTime) => {
  try {
    const response = await fetch(
      `${API_URL_TIME}${API_KEY_LOCATION}&location=${city}`
    );

    if (!response.ok) {
      throw new Error("Could not get the local time!");
    }

    const data = await response.json();

    getLocalTime(data);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
