import styled from "styled-components";

export const PageContainer = styled.div`
  margin-top: 152px;
  padding: 0 120px;
  display: flex;
  gap: 72px;

  @media screen and (max-width: 768px) {
    margin-top: 76px;
    padding: 0 60px;
    gap: 64px;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;
    margin-top: 64px;
    padding: 0 22px;
    gap: 20px;
  }
`;
