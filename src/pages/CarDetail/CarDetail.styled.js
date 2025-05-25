import styled from "styled-components";
import { media } from "../../helper/breakPoints.styled";

export const PageContainer = styled.div`
  margin-top: 152px;
  padding: 0 120px;
  display: flex;
  gap: 72px;

  ${media.tablet} {
    margin-top: 76px;
    padding: 0 60px;
    gap: 64px;
    margin-bottom: 60px;
  }

  ${media.mobile} {
    flex-direction: column;
    margin-top: 64px;
    padding: 0 22px;
    gap: 20px;
  }
`;
