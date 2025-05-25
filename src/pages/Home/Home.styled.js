import styled from "styled-components";
import backgroundImg from "../../assets/TitleVehicle.png";

export const MainContainer = styled.div`
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 60px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
`;

export const FrontContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: clamp(24px, 5vw, 60px);
  color: var(--white);
  text-align: center;
`;

export const Slogan = styled.p`
  font-weight: var(--font-boolen-weight);
  font-size: 24px;
  font-size: clamp(16px, 2.5vw, 24px);
  text-align: center;

  color: var(--white);
`;
