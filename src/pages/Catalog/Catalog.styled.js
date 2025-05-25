import styled from "styled-components";
import { media } from "../../helper/breakPoints.styled";

export const StyledWrapper = styled.div`
  margin-top: 68px;
  padding: 0 120px;

  ${media.tablet} {
    margin-top: 34px;
    padding: 0 60px;
  }

  ${media.mobile} {
    margin-top: 17px;
    padding: 0 30px;
  }
`;
