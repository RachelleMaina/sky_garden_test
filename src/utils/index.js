export const offerBenefit = (price, discount) => {
  return price - (price * discount) / 100;
};

export const formatPrice = price => {
  let p = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return p.substring(0, p.length - 3);
};
