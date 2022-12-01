import { Tooltip } from "recharts";

const StyledTooltip = (unit, theme) => {
  return (
    <Tooltip
      wrapperStyle={{
        color: `${theme.colors.black}`,
        outline: "none",
      }}
      contentStyle={{
        fontSize: "12px",
      }}
      labelStyle={{ marginBottom: "10px" }}
      itemStyle={{ color: `${theme.colors.black}` }}
      formatter={(value) => `${value}${unit}`}
    />
  );
};

export default StyledTooltip;
