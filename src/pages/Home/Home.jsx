import React from "react";
import Button from "../../components/Button/Button";
import {
  FrontContainer,
  MainContainer,
  Slogan,
  Title,
  TitleContainer,
} from "./Home.styled";

const Home = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <FrontContainer>
          <Title>Find your perfect rental car</Title>
          <Slogan>Reliable and budget-friendly rentals for any journey</Slogan>
        </FrontContainer>
        <Button text="Catalog" to="catalog" />
      </TitleContainer>
    </MainContainer>
  );
};

export default Home;
