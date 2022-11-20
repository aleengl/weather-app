import { XAxis } from "recharts";

const StyledXAxis = (theme) => {
  return (
    <XAxis
      dataKey="time"
      tick={{
        fill: `${theme.colors.white}`,
        fontSize: "15px",
        fontWeight: 500,
      }}
      tickLine={{ stroke: `${theme.colors.white}` }}
      height={55}
      label={{
        value: "local time",
        position: "insideBottom",
        fill: `${theme.colors.white}`,
        fontSize: "17px",
      }}
    />
  );
};

export default StyledXAxis;
