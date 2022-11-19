import { CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

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

export const style_cloudSun = {
  height: "10rem",
  width: "10rem",
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
    dataKey="time"
    tick={{
      fill: "var(--color-white)",
      fontSize: "15px",
      fontWeight: 500,
    }}
    tickLine={{ stroke: "var(--color-white)" }}
    height={55}
    label={{
      value: "local time",
      position: "insideBottom",
      fill: "var(--color-white)",
      fontSize: "17px",
    }}
  />
);

export const axis = (parameter, shiftY) => (
  <YAxis
    type="number"
    domain={["auto", "auto"]}
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
    allowDecimals={false}
  />
);

export const tip = (unit) => (
  <Tooltip
    wrapperStyle={{
      color: "#000",
      outline: "none",
    }}
    contentStyle={{
      fontSize: "15px",
    }}
    labelStyle={{ marginBottom: "10px" }}
    itemStyle={{ color: "#000" }}
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
