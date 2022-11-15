import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

// custom reusable Hook to fetch data
const useHttp = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [position, setPosition] = useState({
    lat: null,
    lon: null,
  });
  const [weatherData, setWeatherData] = useState({
    list: [],
  });
  const [time, setTime] = useState();

  const history = useHistory();

  // need useCallback => memoize the function => otherwise after every re-render of the component we send a new request
  const sendRequest = useCallback(
    async (url, type) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        if (type === "coordinates") {
          const [locationData] = data;
          const { lat, lon } = locationData;
          setPosition({
            lat: lat,
            lon: lon,
          });
        }

        if (type === "weather") {
          setWeatherData(data);
        }

        if (type === "time") {
          setTime(data);
        }
      } catch (error) {
        setErrorMessage(error.message);
        console.error(`Error: ${error.message}`);
        history.push("/error");
      }
    },
    [history]
  );

  return {
    errorMessage,
    sendRequest,
    position,
    setPosition,
    weatherData,
    time,
  };
};

export default useHttp;
