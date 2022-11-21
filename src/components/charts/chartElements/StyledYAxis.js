import { YAxis } from "recharts";

const StyledYAxis = (theme, parameter, shiftY) => {
  return (
    <YAxis
      type="number"
      domain={["auto", "auto"]}
      tick={{
        fill: `${theme.colors.white}`,
        fontSize: "15px",
        fontWeight: 500,
      }}
      tickLine={{ stroke: `${theme.colors.white}` }}
      label={{
        value: `${parameter}`,
        angle: -90,
        position: "insideLeft",
        fill: `${theme.colors.white}`,
        fontSize: "17px",
        dy: shiftY,
      }}
      allowDecimals={false}
    />
  );
};

export default StyledYAxis;
