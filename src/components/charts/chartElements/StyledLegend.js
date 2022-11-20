import { Legend } from "recharts";

const StyledLegend = () => {
  const changeFontSizeLegend = (value) => (
    <span style={{ fontSize: "17px" }}>{value}</span>
  );

  return (
    <Legend
      verticalAlign="top"
      height={36}
      iconSize={25}
      formatter={changeFontSizeLegend}
    />
  );
};

export default StyledLegend;
