import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
} from "recharts";
import { changeFontSizeLegend } from "../../constants";

const HumidityChart = () => {
  const humidityData = [
    { name: "12:00", humidity: 30 },
    { name: "15:00", humidity: 50 },
    { name: "18:00", humidity: 70 },
    { name: "21:00", humidity: 10 },
    { name: "00:00", humidity: 20 },
  ];

  return (
    <ResponsiveContainer width="95%">
      <AreaChart height={1000} width={500} data={humidityData}>
        <defs>
          <linearGradient>
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="var(--color-white)" strokeDasharray="5 5" />
        <XAxis
          dataKey="name"
          tick={{
            fill: "var(--color-white)",
            fontSize: "15px",
            fontWeight: 500,
          }}
          tickLine={{ stroke: "var(--color-white)" }}
          height={50}
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
          tickLine={{ stroke: "var(--color-white)" }}
          label={{
            value: "Humidity [%]",
            angle: -90,
            position: "insideLeft",
            fill: "var(--color-white)",
            fontSize: "17px",
            dy: 55,
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
          formatter={(value) => `${value}%`}
        />
        <Legend
          verticalAlign="top"
          height={36}
          iconSize={25}
          formatter={changeFontSizeLegend}
        />
        <Area
          type="monotone"
          dataKey="humidity"
          stroke="#82ca9d"
          fill="rgba(91, 141, 110, .5)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default HumidityChart;
