import React from "react";
import { PropagateLoader } from "react-spinners";
import { StyledLoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoaderContainer>
      <PropagateLoader color="var(--button)" size={20} />
    </StyledLoaderContainer>
  );
};

export default Loader;
