import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { changeFontSizeLegend } from "../../constants";

const TemperatureChart = () => {
  const tempData = [
    { name: "12:00", temp: 290, tempMin: 220, tempMax: 300 },
    { name: "15:00", temp: 330, tempMin: 260, tempMax: 350 },
    { name: "18:00", temp: 360, tempMin: 240, tempMax: 320 },
    { name: "21:00", temp: 250, tempMin: 300, tempMax: 380 },
    { name: "00:00", temp: 210, tempMin: 320, tempMax: 390 },
  ];

  return (
    <ResponsiveContainer width="95%">
      <LineChart width={1000} height={500} data={tempData}>
        <Line type="monotone" dataKey="temp" strokeWidth={3} stroke="#ff4d4d" />
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
          stroke="#ff0000"
        />
        <CartesianGrid stroke="var(--color-white)" strokeDasharray="5 5" />
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
        <YAxis
          tick={{
            fill: "var(--color-white)",
            fontSize: "15px",
            fontWeight: 500,
          }}
          domain={[200, 400]}
          tickLine={{ stroke: "var(--color-white)" }}
          label={{
            value: "T [°C]",
            angle: -90,
            position: "insideLeft",
            fill: "var(--color-white)",
            fontSize: "17px",
            dy: 25,
          }}
        />
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
          formatter={(value) => `${value}°C`}
        />
        <Legend
          verticalAlign="top"
          height={36}
          iconSize={25}
          formatter={changeFontSizeLegend}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TemperatureChart;
