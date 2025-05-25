import React from "react";
import { StyledNotFound } from "./NotFound.styled";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <StyledNotFound>
      <div>
        <svg width="200" height="200">
          <use href="/sprite.svg#broken-car" />
        </svg>
      </div>
      <h1>404</h1>
      <p>
        Oops! The car you're looking for is out of service or never existed.
      </p>
      <Link to="/">⬅ Back to Home</Link>
    </StyledNotFound>
  );
};

export default NotFound;
