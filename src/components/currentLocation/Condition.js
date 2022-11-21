import sprite_symbols from "../../img/sprite_symbols.svg";
import { StyledCondition } from "../styles/Condition.styled";
import { StyleCloudSun } from "../styles/Icon.styled";

const Condition = (props) => {
  return (
    <StyledCondition>
      <div>
        {props.icon ? (
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt="icon of the weather condition"
          />
        ) : (
          <StyleCloudSun>
            <use xlinkHref={`${sprite_symbols}#${"icon-cloud-sun"}`}></use>
          </StyleCloudSun>
        )}
      </div>
      <p>{props.temperature ? `${props.temperature.toFixed(1)}°C` : "15°C"}</p>
      <span>{props.description ? props.description : "sun"}</span>
    </StyledCondition>
  );
};

export default Condition;
