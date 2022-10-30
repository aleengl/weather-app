import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  LabelList,
  Tooltip,
  Legend,
} from "recharts";
import { changeFontSizeLegend } from "../../constants";

const RainChart = () => {
  const rainData = [
    { name: "12:00", rainSum: 30 },
    { name: "15:00", rainSum: 50 },
    { name: "18:00", rainSum: 70 },
    { name: "21:00", rainSum: 10 },
    { name: "00:00", rainSum: 0 },
  ];

  return (
    <ResponsiveContainer width="95%">
      <BarChart height={1000} width={500} data={rainData}>
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
            value: "mm",
            angle: -90,
            position: "insideLeft",
            fill: "var(--color-white)",
            fontSize: "17px",
            dy: 20,
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
          formatter={(value) => `${value} mm`}
          cursor={{ fill: "#6172a1" }}
        />
        <Legend
          verticalAlign="top"
          height={36}
          iconSize={25}
          formatter={changeFontSizeLegend}
        />
        <Bar dataKey="rainSum" fill="#394f89">
          <LabelList
            dataKey="rainSum"
            position="top"
            style={{ fill: "var(--color-white)", fontSize: 17 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RainChart;
