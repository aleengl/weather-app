import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

///////////////////////////////////
//// API
////////////////////////////////7/

export const API_URL =
  "https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=";
export const API_KEY = "676cc917d4638f9dae16c8d712dea6be";

///////////////////////////////////
//// DATES
////////////////////////////////7/

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
////////////////////////////////7/

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

///////////////////////////////////
//// TEMPERATURE CHART
//////////////////////////////////

const data = [
  { name: "12:00", temp: 290, tempMin: 220, tempMax: 300 },
  { name: "15:00", temp: 330, tempMin: 260, tempMax: 350 },
  { name: "18:00", temp: 360, tempMin: 240, tempMax: 320 },
  { name: "21:00", temp: 250, tempMin: 300, tempMax: 380 },
  { name: "00:00", temp: 210, tempMin: 320, tempMax: 390 },
];

const changeFontSizeLegend = (value) => {
  return <span style={{ fontSize: "17px" }}>{value}</span>;
};

export const renderLineChart = (
  <ResponsiveContainer width="95%">
    <LineChart width={1000} height={500} data={data}>
      <Line type="monotone" dataKey="temp" strokeWidth={3} stroke="#ff3333" />
      <Line
        type="monotone"
        dataKey="tempMin"
        strokeWidth={3}
        stroke="#8080ff"
      />
      <Line
        type="monotone"
        dataKey="tempMax"
        strokeWidth={3}
        stroke="#f00000"
      />
      <CartesianGrid stroke="#fff" strokeDasharray="5 5" />
      <XAxis
        dataKey="name"
        tick={{ fill: "#fff", fontSize: "15px", fontWeight: 500 }}
        tickLine={{ stroke: "#fff" }}
        height={55}
        label={{
          value: "t [3h]",
          position: "insideBottom",
          fill: "#fff",
          fontSize: "17px",
        }}
      />
      <YAxis
        tick={{ fill: "#fff", fontSize: "15px", fontWeight: 500 }}
        domain={[200, 400]}
        tickLine={{ stroke: "#fff" }}
        label={{
          value: "T [°C]",
          angle: -90,
          position: "insideLeft",
          fill: "#fff",
          fontSize: "17px",
          dy: 25,
        }}
      />
      <Tooltip />
      <Legend
        verticalAlign="top"
        height={36}
        iconSize={25}
        formatter={changeFontSizeLegend}
      />
    </LineChart>
  </ResponsiveContainer>
);

// TODO: format the ToolTip!

///////////////////////////////////
//// PRESSURE CHART
//////////////////////////////////

///////////////////////////////////
//// MAP CHART
////////////////////////////////7/

export const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/italy/italy-regions.json";


