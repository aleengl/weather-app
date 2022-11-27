import { Container } from "../styles/Station.styled";
import sprite_icons from "../../img/sprite_icons.svg";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import { API_URL_TIME, API_KEY_LOCATION } from "../../constants";
import { StyleLocationPin, StyleCalendar } from "../styles/Icon.styled";

const Station = (props) => {
  const { errorMessage, sendRequest: fetchTime, time } = useHttp();

  useEffect(() => {
    if (props.city) {
      fetchTime(
        `${API_URL_TIME}${API_KEY_LOCATION}&location=${props.city}`,
        "time"
      );
    }
  }, [props.city, fetchTime]);

  // optional chaining => only if time exists => read datetime property
  // otherwise undefined will be returned
  const dateIndex = time?.datetime && time?.datetime.indexOf(" ");

  return (
    <Container>
      <div>
        <StyleLocationPin>
          <use xlinkHref={`${sprite_icons}#${"icon-location-pin"}`}></use>
        </StyleLocationPin>
        <span>{props.city}</span>
      </div>
      <div>
        <StyleCalendar>
          <use xlinkHref={`${sprite_icons}#${"icon-calendar"}`}></use>
        </StyleCalendar>
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : time?.datetime ? (
          <p>
            {time?.datetime.substring(0, dateIndex)}
            <span>
              {time?.datetime.substring(dateIndex, time?.datetime.length - 3)}
            </span>
          </p>
        ) : (
          <p>N/A</p>
        )}
      </div>
    </Container>
  );
};

export default Station;
