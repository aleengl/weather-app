import styled from "styled-components";

const Svg = styled.svg`
  height: ${(props) => props.style.height};
  width: ${(props) => props.style.width};
  fill: ${(props) => props.style.fill};
`;

export default Svg;
