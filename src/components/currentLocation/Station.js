import { Container } from "../styles/Station.styled";
import Icon from "../Icon/Icon";
import sprite_icons from "../../img/sprite_icons.svg";
import {
  style_locationPin,
  style_calendar,
  currentDate,
  currentTime,
} from "../../constants";

const Station = () => {
  return (
    <Container>
      <div>
        <Icon
          file={sprite_icons}
          icon="icon-location-pin"
          style={style_locationPin}
        />
        <span>Florida, US</span>
      </div>
      <div>
        <Icon file={sprite_icons} icon="icon-calendar" style={style_calendar} />
        <p>
          {currentDate}
          <span>{currentTime}</span>
        </p>
      </div>
    </Container>
  );
};

export default Station;
