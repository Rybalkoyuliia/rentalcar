import styled from "styled-components";

export const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 8px;
  h2 {
    font-size: 24px;
    color: var(--main);
    font-weight: 600;
    line-height: 32px;
  }
  p {
    font-size: 16px;
    color: var(--gray);
    font-weight: 500;
    line-height: 20px;
  }
`;

export const StyledDescriptionWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  p {
    display: flex;
    gap: 4px;
    line-height: 20px;
  }
`;

export const StyledPrice = styled.p`
  color: var(--button);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
  line-height: 32px;
`;

export const StyledDesc = styled.p`
  font-size: 16px;
  color: var(--main);
  font-weight: 500;
  margin-bottom: 68px;
  line-height: 20px;
`;

export const StyledListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 110px;
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 24px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    li {
      display: flex;
      gap: 8px;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
    }
  }
`;
