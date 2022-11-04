import { API_KEY, API_URL_FORECAST, API_URL_LOCATION } from "../../constants";

// get weather data
export const getWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(
      `${API_URL_FORECAST}{${lat}}&lon={${lon}}&appid={${API_KEY}}`
    );

    if (!response.ok) {
      throw new Error("Fetching the data was not successful!");
    }

    const data = await response.json();

    return data;
  } catch (error) {}
};

// get coordinates
export const getCoordinates = async (city) => {
  try {
    const response = await fetch(
      `${API_URL_LOCATION}{${city}}&limit=5&appid={${API_KEY}}`
    );

    if (!response.ok) {
      throw new Error("Fetching the data was not successful!");
    }

    const data = response.json();

    return data;
  } catch (error) {}
};
