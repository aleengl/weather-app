import styled from "styled-components";

export const Backdrop = styled.div`
  ${({ theme }) => `
  position: ${theme.position.fixed};
  top: ${theme.position.distanceFromBorder};
  left: ${theme.position.distanceFromBorder};
  right: ${theme.position.distanceFromBorder};
  bottom: ${theme.position.distanceFromBorder};
  `}
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

export const ModalContainer = styled.div`
  width: 60%;
  font-size: 2rem;
  ${({ theme }) => `
  position: ${theme.position.fixed};
  `}
  top: 20%;
  left: 50%;
  transform: ${({ theme }) => theme.transform};
  z-index: 9999;
  color: ${({ theme }) => theme.colors.black};
`;
