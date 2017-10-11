export const formatCurrency = (number, currency) => {
  if (!currency) { currency = 'MXN'; }
  const amount = new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(number);

  return `${amount}`;
};
export const objectToArray = (object) => Object.keys(object).map((key) => [ object[ key ] ]);

export const isEmpty = (object) => object === undefined || Object.keys(object).length === 0;

export const isEmptyArray = (array) => !Array.isArray(array) || !array.length;
