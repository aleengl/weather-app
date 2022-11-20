import { Tooltip } from "recharts";

const StyledTooltip = (unit) => {
  return (
    <Tooltip
      wrapperStyle={{
        color: "#000",
        outline: "none",
      }}
      contentStyle={{
        fontSize: "15px",
      }}
      labelStyle={{ marginBottom: "10px" }}
      itemStyle={{ color: "#000" }}
      formatter={(value) => `${value}${unit}`}
    />
  );
};

export default StyledTooltip;
