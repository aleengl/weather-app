///////////////////////////////////
//// API
//////////////////////////////////

export const API_KEY_WEATHER = "676cc917d4638f9dae16c8d712dea6be";
export const API_KEY_LOCATION = "4840096b0b564aadaba0eec338d0543b";

export const API_URL_FORECAST =
  "https://api.openweathermap.org/data/2.5/forecast?lat=";

export const API_URL_LOCATION =
  "http://api.openweathermap.org/geo/1.0/direct?q=";

export const API_URL_TIME =
  "https://timezone.abstractapi.com/v1/current_time/?api_key=";

///////////////////////////////////
//// STYLING
//////////////////////////////////

export const style_locationPin = {
  height: "2.5rem",
  width: "2.5rem",
};

export const style_calendar = {
  height: "2.3rem",
  width: "2.3rem",
};

export const style_cloudSun = {
  height: "10rem",
  width: "10rem",
};

///////////////////////////////////
//// MAP CHART
//////////////////////////////////

export const centeredMap = [46.89, 11.43]; // coordinates of Sterzing to center the map when first rendering it

export const PopupContent = () => {
  return (
    <div>
      <p>Name of the Station</p>
      <p>Longitude</p>
      <p>Latitude</p>
    </div>
  );
};
