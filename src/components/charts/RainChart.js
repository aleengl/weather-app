import { ResponsiveContainer, BarChart, Bar, LabelList } from "recharts";
import { cartesianGrid, xAxis, axis, tip, legend } from "../../constants";

const RainChart = (props) => {
  console.log(props.data);

  const yAxis = axis("Rain sum (mm)", 55);
  const tooltip = tip("mm");

  return (
    <ResponsiveContainer width="95%">
      <BarChart height={1000} width={500} data={props.data}>
        {cartesianGrid}
        {xAxis}
        {yAxis}
        {tooltip}
        {legend}
        <Bar dataKey="rain" fill="#394f89">
          <LabelList
            dataKey={props.data.rain}
            position="top"
            style={{ fill: "var(--color-white)", fontSize: 17 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RainChart;
