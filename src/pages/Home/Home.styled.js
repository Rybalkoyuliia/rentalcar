import styled from "styled-components";
import backgroundImg from "../../assets/TitleVehicle.png";

export const MainContainer = styled.div`
  min-height: 100vh;
  padding-top: 60px;
  padding-bottom: 60px;

  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-bottom: 60px;
`;

export const FrontContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 60px;
  color: var(--white);
`;

export const Slogan = styled.p`
  font-weight: var(--font-boolen-weight);
  font-size: 24px;
  color: var(--white);
`;
