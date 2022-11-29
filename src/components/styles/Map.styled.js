import styled from "styled-components";
import { MapContainer, Popup } from "react-leaflet";

export const Container = styled.div`
  background-image: ${({ theme }) => theme.background.gradient};
  border-radius: 10px;
  padding: 2rem 3rem;

  grid-column: 1 / -1;
`;

export const MyMap = styled(MapContainer)`
  height: 700px;
  font-size: 1.5rem;
`;

export const StyledPopup = styled(Popup)`
  font-size: 1.5rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  p {
    margin: 0 0 1rem 0;

    span {
      font-weight: bold;
    }
  }
`;
