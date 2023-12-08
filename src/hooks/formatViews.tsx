export const formatNumberDecimal = (number: number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + " jt";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + " rb";
  } else {
    return number.toString();
  }
};
