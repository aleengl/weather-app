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

const PressureChart = () => {
  const pressureData = [
    { name: "12:00", pressure: 290, seaLevel: 220, groundLevel: 300 },
    { name: "15:00", pressure: 320, seaLevel: 200, groundLevel: 350 },
    { name: "18:00", pressure: 260, seaLevel: 170, groundLevel: 400 },
    { name: "21:00", pressure: 300, seaLevel: 150, groundLevel: 330 },
    { name: "00:00", pressure: 330, seaLevel: 210, groundLevel: 310 },
  ];

  return (
    <ResponsiveContainer width="95%">
      <LineChart width={1000} height={500} data={pressureData}>
        <Line
          type="monotone"
          dataKey="pressure"
          strokeWidth={3}
          stroke="#c2d0e1"
        />
        <Line
          type="monotone"
          dataKey="seaLevel"
          strokeWidth={3}
          stroke="#e1c2d0"
        />
        <Line
          type="monotone"
          dataKey="groundLevel"
          strokeWidth={3}
          stroke="#d0e1c2"
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
            value: "Pressure [hPa]",
            angle: -90,
            position: "insideLeft",
            fill: "var(--color-white)",
            fontSize: "17px",
            dy: 65,
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
          formatter={(value) => `${value} hPa`}
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

export default PressureChart;
