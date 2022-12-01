import { ResponsiveContainer, LineChart, Line } from "recharts";
import StyledYAxis from "./chartElements/StyledYAxis";
import StyledXAxis from "./chartElements/StyledXAxis";
import StyledTooltip from "./chartElements/StyledTooltip";
import StyledLegend from "./chartElements/StyledLegend";
import {
  StyledCartesianGrid,
  StyledChartContainer,
} from "../styles/Chart.styled";

const TemperatureChart = (props) => {
  return (
    <>
      <StyledChartContainer>
        <ResponsiveContainer width="95%">
          <LineChart width={1000} height={500} data={props.data}>
            <Line
              type="monotone"
              dataKey="temp"
              strokeWidth={3}
              stroke="#E2DEF0"
            />
            <Line
              type="monotone"
              dataKey="temp_min"
              strokeWidth={3}
              stroke="#94D8F0"
            />
            <StyledCartesianGrid strokeDasharray="5 5" />
            {StyledXAxis(props.theme)}
            {StyledYAxis(props.theme, "Temperature (°C)", 65)}
            {StyledTooltip("°C", props.theme)}
            {StyledLegend()}
          </LineChart>
        </ResponsiveContainer>
      </StyledChartContainer>
    </>
  );
};

export default TemperatureChart;
