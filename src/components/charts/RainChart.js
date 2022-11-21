import { ResponsiveContainer, BarChart, Bar, LabelList } from "recharts";
import StyledYAxis from "./chartElements/StyledYAxis";
import StyledXAxis from "./chartElements/StyledXAxis";
import StyledTooltip from "./chartElements/StyledTooltip";
import StyledLegend from "./chartElements/StyledLegend";
import { StyledCartesianGrid } from "../styles/Chart.styled";

const RainChart = (props) => {
  return (
    <ResponsiveContainer width="95%">
      <BarChart height={1000} width={500} data={props.data}>
        <StyledCartesianGrid strokeDasharray="5 5" />
        {StyledXAxis(props.theme)}
        {StyledYAxis(props.theme, "Rain sum (mm)", 55)}
        {StyledTooltip("mm")}
        {StyledLegend()}
        <Bar dataKey="rain" fill="#94D8F0">
          <LabelList
            dataKey={props.data.rain}
            position="top"
            style={{
              fill: props.theme.colors.white,
              fontSize: 17,
            }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RainChart;
