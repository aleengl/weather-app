import { ResponsiveContainer, LineChart, Line } from "recharts";
import StyledYAxis from "./chartElements/StyledYAxis";
import StyledXAxis from "./chartElements/StyledXAxis";
import StyledTooltip from "./chartElements/StyledTooltip";
import StyledLegend from "./chartElements/StyledLegend";
import {
  StyledCartesianGrid,
  StyledChartContainer,
} from "../styles/Chart.styled";

const PressureChart = (props) => {
  return (
    <>
      <StyledChartContainer>
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
            {StyledXAxis(props.theme)}
            {StyledYAxis(props.theme, "Pressure (hPa)", 55)}
            {StyledTooltip("hPa", props.theme)}
            {StyledLegend()}
          </LineChart>
        </ResponsiveContainer>
      </StyledChartContainer>
    </>
  );
};

export default PressureChart;
