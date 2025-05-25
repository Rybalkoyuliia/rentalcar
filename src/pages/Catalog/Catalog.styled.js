import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-top: 68px;
  padding: 0 120px;

  @media screen and (max-width: 768px) {
    margin-top: 34px;
    padding: 0 60px;
  }

  @media screen and (max-width: 360px) {
    margin-top: 17px;
    padding: 0 30px;
  }
`;
