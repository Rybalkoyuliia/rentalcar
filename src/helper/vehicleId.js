export const specId = (string) => {
  let matches = string.match(/(\d+)/);
  if (matches) {
    return matches[0];
  }
};
