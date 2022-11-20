import { ResponsiveContainer, LineChart, Line } from "recharts";
import StyledYAxis from "./chartElements/StyledYAxis";
import StyledXAxis from "./chartElements/StyledXAxis";
import StyledTooltip from "./chartElements/StyledTooltip";
import StyledLegend from "./chartElements/StyledLegend";
import { StyledCartesianGrid } from "../styles/Chart.styled";

const PressureChart = (props) => {
  return (
    <ResponsiveContainer width="95%">
      <LineChart width={1000} height={500} data={props.data}>
        <Line
          type="monotone"
          dataKey="sea_level"
          strokeWidth={3}
          stroke="#C6D0D6"
        />
        <Line
          type="monotone"
          dataKey="grnd_level"
          strokeWidth={3}
          stroke="#d0e1c2"
        />
        <StyledCartesianGrid strokeDasharray="5 5" />
        {StyledXAxis(props.data[0].theme)}
        {StyledYAxis(props.data[0].theme, "Pressure (hPa)", 65)}
        {StyledTooltip("hPa")}
        {StyledLegend()}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PressureChart;
