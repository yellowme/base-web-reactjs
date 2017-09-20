export function formatCurrency(number, currency) {
  if (!currency) { currency = 'MXN'; }
  let amount = new Intl.NumberFormat('en-US', {style: 'currency', currency}).format(number);
  return `${amount}`;
}

export function objectToArray(object) {
  return Object.keys(object).map(function(key) {
    return [ object[ key ] ];
  });
}

export function isEmpty(object) {
  return object === undefined || Object.keys(object).length === 0;
}

export function isEmptyArray(array) {
  return !Array.isArray(array) || !array.length;
}