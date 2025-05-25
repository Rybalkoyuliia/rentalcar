import React from "react";
import { PuffLoader } from "react-spinners";
import { LoaderWrapper } from "./LoaderImg.styled";

const LoaderImg = () => {
  return (
    <LoaderWrapper>
      <PuffLoader color="var(--gray)" />
    </LoaderWrapper>
  );
};

export default LoaderImg;
