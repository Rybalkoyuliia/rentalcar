const breakpoints = {
  desktop: "1128px",
  tablet: "768px",
  mobile: "480px",
  minMobile: "320px",
};

export const media = {
  mobile: `@media screen and (min-width: ${breakpoints.minMobile}) and (max-width: ${breakpoints.mobile})`,
  tablet: `@media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop})`,
};
