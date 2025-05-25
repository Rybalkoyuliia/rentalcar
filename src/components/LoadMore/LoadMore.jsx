import React from "react";
import { StyledLoadMore, StyledLoadMoreContainer } from "./LoadMore.styled";

const LoadMore = ({ loadMore }) => {
  return (
    <StyledLoadMoreContainer>
      <StyledLoadMore
        onClick={(e) => {
          e.preventDefault();
          loadMore();
        }}
      >
        Load more
      </StyledLoadMore>
    </StyledLoadMoreContainer>
  );
};

export default LoadMore;
