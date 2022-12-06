import styled from "styled-components";
import { CartesianGrid } from "recharts";

export const StyledChart = styled.div`
  position: relative;
  flex: 1 1;
  height: 43rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    // 1760px
    height: 50rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet_landscape[0]}) {
    flex: 0 1 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet_portrait}) {
    height: 55rem;
  }
`;

export const StyledCartesianGrid = styled(CartesianGrid)`
  stroke: ${({ theme }) => theme.colors.white};
`;
// need to access the displayName so that using styled components is possible
StyledCartesianGrid.displayName = CartesianGrid.displayName;

export const StyledChartContainer = styled.div`
  height: 40rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    // 1760px
    height: 50rem;
  }
`;
