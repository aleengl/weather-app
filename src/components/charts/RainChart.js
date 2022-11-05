import { useContext } from "react";
import { ResponsiveContainer, BarChart, Bar, LabelList } from "recharts";
import { cartesianGrid, xAxis, axis, tip, legend } from "../../constants";
import WeatherContext from "../../store/weather-context";

const RainChart = () => {
  const weather = useContext(WeatherContext);

  console.log(weather);

  const rainData = [
    { name: "12:00", rainSum: 30 },
    { name: "15:00", rainSum: 50 },
    { name: "18:00", rainSum: 70 },
    { name: "21:00", rainSum: 10 },
    { name: "00:00", rainSum: 0 },
  ];

  const yAxis = axis("mm", 20);
  const tooltip = tip("mm");

  return (
    <ResponsiveContainer width="95%">
      <BarChart height={1000} width={500} data={rainData}>
        {cartesianGrid}
        {xAxis}
        {yAxis}
        {tooltip}
        {legend}
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
