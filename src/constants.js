import { CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

///////////////////////////////////
//// API
//////////////////////////////////

export const API_KEY = "676cc917d4638f9dae16c8d712dea6be";

export const API_URL_FORECAST =
  "https://api.openweathermap.org/data/2.5/forecast?lat=";

export const API_URL_LOCATION =
  "http://api.openweathermap.org/geo/1.0/direct?q=";

///////////////////////////////////
//// DATES
//////////////////////////////////

// current Date
const date = new Date();
const day = `${date.getUTCDate()}`.padStart(2, "0");
const month = `${date.getUTCMonth() + 1}`.padStart(2, "0");

export const currentDate = `${day}.${month}.${date.getUTCFullYear()} `;
export const hours = date.getUTCHours();
export const minutes = `${date.getUTCMinutes()}`.padStart(2, "0");

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

export const cartesianGrid = (
  <CartesianGrid stroke="var(--color-white)" strokeDasharray="5 5" />
);

export const changeFontSizeLegend = (value) => (
  <span style={{ fontSize: "17px" }}>{value}</span>
);

export const xAxis = (
  <XAxis
    dataKey="name"
    tick={{
      fill: "var(--color-white)",
      fontSize: "15px",
      fontWeight: 500,
    }}
    tickLine={{ stroke: "var(--color-white)" }}
    height={55}
    label={{
      value: "t [3h]",
      position: "insideBottom",
      fill: "var(--color-white)",
      fontSize: "17px",
    }}
  />
);

export const axis = (parameter, shiftY) => (
  <YAxis
    tick={{
      fill: "var(--color-white)",
      fontSize: "15px",
      fontWeight: 500,
    }}
    tickLine={{ stroke: "var(--color-white)" }}
    label={{
      value: `${parameter}`,
      angle: -90,
      position: "insideLeft",
      fill: "var(--color-white)",
      fontSize: "17px",
      dy: shiftY,
    }}
  />
);

export const tip = (unit) => (
  <Tooltip
    wrapperStyle={{
      color: "#000",
      outline: "none",
      border: "2px solid #000",
    }}
    contentStyle={{
      fontSize: "15px",
    }}
    labelStyle={{ marginBottom: "10px" }}
    formatter={(value) => `${value}${unit}`}
  />
);

export const legend = (
  <Legend
    verticalAlign="top"
    height={36}
    iconSize={25}
    formatter={changeFontSizeLegend}
  />
);

///////////////////////////////////
//// MAP CHART
//////////////////////////////////

export const centeredMap = [46.89, 11.43]; // coordinates of Sterzing
// Bolzano as default if Geolocation API not available or fetching user position failed
export const defaultLocation = {
  lat: 46.3,
  long: 11.21,
};

export const PopupContent = () => {
  return (
    <div>
      <p>Name of the Station</p>
      <p>Longitude</p>
      <p>Latitude</p>
    </div>
  );
};
