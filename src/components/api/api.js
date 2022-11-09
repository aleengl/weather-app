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

export const getLocalTime = async (city, getLocalTime) => {
  try {
    const response = await fetch(
      `https://timezone.abstractapi.com/v1/current_time/?api_key=4840096b0b564aadaba0eec338d0543b&location=${city}`
    );

    if (!response.ok) {
      throw new Error("request not successful!");
    }

    const data = await response.json();

    getLocalTime(data);
  } catch (error) {}
};
