import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

// custom reusable hook to fetch data => can use React hooks there in addition to "regular" components
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

  // need useCallback => memoize the function => otherwise after every re-render we send a new request
  const sendRequest = useCallback(
    async (url, type, options) => {
      // async arrow function to asynchronously fetch the data => not blocking the main thread
      try {
        const response = await fetch(url, options);

        console.log(response);

        if (!response.ok && type === "weather") {
          throw new Error("Weather data not available!");
        }

        if (!response.ok && type === "city") {
          throw new Error("City data not available!");
        }

        if (!response.ok && type === "coordinates") {
          throw new Error("Coordinates not available!");
        }

        if (!response.ok && type === "time") {
          throw new Error("Local time not available!");
        }

        const data = await response.json();
        console.log(data);

        if (type === "coordinates") {
          const [locationData] = data;
          const { lat, lon } = locationData;
          setPosition({
            lat: lat,
            lon: lon,
          });
        }

        if (type === "city") {
          return {
            options: data.data.map((city) => {
              return {
                lat: city.latitude,
                lon: city.longitude,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
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
        if (type !== "time") {
          history.push("/home/error");
        }
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
