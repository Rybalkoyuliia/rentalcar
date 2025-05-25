const rawPrices = ["30", "40", "50", "60", "70", "80"];

export const priceOptions = rawPrices.map((price) => ({
  value: price,
  label: price,
}));
