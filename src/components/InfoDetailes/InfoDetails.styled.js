import styled from "styled-components";

export const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 8px;
  h2 {
    font-size: clamp(16px, 2.5vw, 20px);
    color: var(--main);
    font-weight: 600;
    line-height: 32px;
  }
  p {
    font-size: 16px;
    font-size: clamp(12px, 2.5vw, 16px);
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
    font-size: clamp(12px, 1vw + 0.5rem, 16px);
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 14px;
    gap: 4px;

    p:last-child {
      margin-left: 20px;
    }
  }
`;

export const StyledPrice = styled.p`
  color: var(--button);
  font-size: 24px;
  font-size: clamp(20px, 1vw, 24px);
  font-weight: 600;
  margin-bottom: 32px;
  line-height: 32px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 14px;
  }
`;

export const StyledDesc = styled.p`
  font-size: clamp(12px, 1vw, 16px);
  color: var(--main);
  font-weight: 500;
  margin-bottom: 68px;
  line-height: 20px;
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const StyledListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 110px;
  @media screen and (max-width: 768px) {
    gap: 40px;
  }
  h3 {
    font-size: clamp(16px, 1vw, 20px);
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 24px;
    @media screen and (max-width: 768px) {
      margin-bottom: 12px;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    li {
      display: flex;
      gap: 8px;
      font-size: clamp(12px, 1vw, 16px);
      font-weight: 500;
      line-height: 20px;
    }
    @media screen and (max-width: 768px) {
      gap: 4px;
    }
  }
`;
