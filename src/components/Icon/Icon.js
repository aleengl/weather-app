import Svg from "../styles/Icon.styled";

const Icon = ({ file, icon, style }) => {
  return (
    <Svg style={style}>
      <use xlinkHref={`${file}#${icon}`}></use>
    </Svg>
  );
};

export default Icon;
