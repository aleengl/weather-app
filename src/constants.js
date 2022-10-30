///////////////////////////////////
//// API
//////////////////////////////////

export const API_URL =
  "https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=";
export const API_KEY = "676cc917d4638f9dae16c8d712dea6be";

///////////////////////////////////
//// DATES
//////////////////////////////////

// current Date
const date = new Date();
const day = `${date.getDate()}`.padStart(2, "0");
const month = `${date.getMonth() + 1}`.padStart(2, "0");
const hours = `${date.getHours()}`.padStart(2, "0");
const minutes = `${date.getMinutes()}`.padStart(2, "0");

export const currentDate = `${day}.${month}.${date.getFullYear()} `;
export const currentTime = `${hours}:${minutes}`;

///////////////////////////////////
//// STYLING
//////////////////////////////////

export const style_search = {
  height: "2.5rem",
  width: "2.5rem",
  fill: "#fff",
  marginLeft: "-4rem",
};

export const style_locationPin = {
  height: "2.5rem",
  width: "2.5rem",
};

export const style_calendar = {
  height: "2.3rem",
  width: "2.3rem",
};

export const style_forecast = {
  height: "3.5rem",
  width: "3.5rem",
  fill: "#fff",
};

export const style_cloudSun = {
  height: "10rem",
  width: "10rem",
};

export const style_cloudRain = {
  height: "3.5rem",
  width: "3.5rem",
};

///////////////////////////////////
//// CHARTS
//////////////////////////////////

export const changeFontSizeLegend = (value) => {
  return <span style={{ fontSize: "17px" }}>{value}</span>;
};

// TODO: components used in more Charts should be defined here and then exported!

///////////////////////////////////
//// MAP CHART
//////////////////////////////////

export const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/italy/italy-regions.json";
