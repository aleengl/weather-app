import { useState, useEffect, useCallback } from "react";
import {
  API_URL_LOCATION,
  API_KEY_WEATHER,
  API_URL_FORECAST,
} from "../../constants";
import { useHistory } from "react-router-dom";
import useHttp from "./use-http";

const useGeolocation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  const history = useHistory();

  const {
    errorMessage,
    sendRequest: fetchData,
    position,
    setPosition,
    weatherData,
  } = useHttp();

  // again use useCallback to not render the success function again and again
  const success = useCallback(
    (position) => {
      const { latitude: lat, longitude: lon } = position.coords;
      setMessage(
        "Could get your position! Weather data will be available soon..."
      );
      setTimeout(() => {
        setPosition({
          lat: lat,
          lon: lon,
        });
        setIsLoading(false);
        history.push("/home");
      }, 5000);
    },
    [history, setPosition]
  );

  const error = useCallback(() => {
    setMessage(
      "Could not get your position! Bolzano is set as the default location..."
    );
    setTimeout(() => {
      fetchData(
        `${API_URL_LOCATION}Bolzano&limit=1&appid=${API_KEY_WEATHER}`,
        "coordinates"
      );
      console.log("Geolocation denied!");
      setIsLoading(false);
      history.push("/home");
    }, 5000);
  }, [history, fetchData]);

  useEffect(() => {
    // test if geolocation is available
    if ("geolocation" in navigator) {
      // geolocation available
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
      });
    } else {
      // geolocation not available
      setMessage(
        "The browser is not able to get your position! Bolzano is set as the default location..."
      );
      setTimeout(() => {
        fetchData(
          `${API_URL_LOCATION}Bolzano&limit=1&appid=${API_KEY_WEATHER}`,
          "coordinates"
        );
        console.log("Geolocation not available!");
        setIsLoading(false);
        history.push("/home");
      }, 5000);
    }
  }, [error, success, history, fetchData]);

  useEffect(() => {
    if (position.lat && position.lon) {
      fetchData(
        `${API_URL_FORECAST}${position.lat}&lon=${position.lon}&cnt=6&appid=${API_KEY_WEATHER}&units=metric`,
        "weather"
      );
    }
  }, [position, fetchData]);

  return {
    isLoading,
    message,
    errorMessage,
    weatherData,
    position,
  };
};

export default useGeolocation;
