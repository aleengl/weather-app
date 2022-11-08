import { API_KEY, API_URL_FORECAST, API_URL_LOCATION } from "../../constants";

// get weather data
export const getWeatherData = async (lat, lon, updateWeather) => {
  try {
    const response = await fetch(
      `${API_URL_FORECAST}${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Fetching the data was not successful!");
    }

    const data = await response.json();
    updateWeather(data);
  } catch (error) {}
};

// get coordinates
export const getCoordinates = async (city, setDefaultPosition) => {
  try {
    const response = await fetch(
      `${API_URL_LOCATION}${city}&limit=1&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Fetching the data was not successful!");
    }

    const data = await response.json();
    const [locationData] = data;
    const { lat, lon } = locationData;

    setDefaultPosition({
      lat: lat,
      lon: lon,
    });
  } catch (error) {}
};
