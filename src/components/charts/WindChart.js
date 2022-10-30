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

const WindChart = () => {
  const windData = [
    { name: "12:00", speed: 10, gust: 35, deg: 10 },
    { name: "15:00", speed: 30, gust: 55, deg: 330 },
    { name: "18:00", speed: 5, gust: 8, deg: 214 },
    { name: "21:00", speed: 60, gust: 110, deg: 150 },
    { name: "00:00", speed: 90, gust: 130, deg: 85 },
  ];

  return (
    <ResponsiveContainer width="95%">
      <div>
        <LineChart width={900} height={200} data={windData} syncId="1">
          <Line
            type="monotone"
            dataKey="speed"
            stroke="#bfd6d9"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="gust"
            stroke="#94a6a8"
            strokeWidth={3}
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
              value: "speed [km/h]",
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
              border: "2px solid black",
            }}
            contentStyle={{
              fontSize: "15px",
            }}
            labelStyle={{ marginBottom: "10px" }}
            formatter={(value) => `${value} km/h`}
          />
          <Legend
            verticalAlign="top"
            height={36}
            iconSize={25}
            formatter={changeFontSizeLegend}
          />
        </LineChart>
        <LineChart width={900} height={200} data={windData} syncId="1">
          <Line
            type="monotone"
            dataKey="deg"
            stroke="#cccccc"
            strokeWidth={3}
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
              value: "direction [deg]",
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
            formatter={(value) => `${value}°`}
          />
          <Legend
            verticalAlign="top"
            height={36}
            iconSize={25}
            formatter={changeFontSizeLegend}
          />
        </LineChart>
      </div>
    </ResponsiveContainer>
  );
};

export default WindChart;
