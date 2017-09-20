export const ruleRequiredCustom = (message = 'Porfavor ingresa un valor.') => {
  return {required: true, message};
};

export const ruleMinCustom = (min, message) => {

  let minRule = {type: 'string', min};
  if (message) {
    minRule.message = message;
  }
  return minRule;
};

export const ruleMaxCustom = (max, message) => {

  let maxRule = {type: 'string', max};
  if (message) {
    maxRule.message = message;
  }
  return maxRule;
};

export const ruleEmailCustom = (message = 'Porfavor ingresa tu email.') => {
  return {type: 'email', message};
};

const transformUrl = (value) => {
  if (value === undefined || value === '') {
    return value;
  }
  if (!value.match(/^https?:\/\/+/g)) {
    return 'http://' + value;
  }
  return value;
};

export const ruleUrlCustom = (message = 'Please input a valid URL', transform = transformUrl) => {
  return {type: 'url', message, transform};
};

export const ruleArrayRange = (min = 1, max = 3, message = 'Choose between 1 or 3 options') => {
  return {type: 'array', min, max, message};
};

export const ruleMin6 = {min: 6, message: 'At least 6 characters.'};
export const ruleRequired = {required: true, message: 'Porfavor ingresa un valor.'};
export const ruleEmail = {type: 'email', message: 'Porfavor ingresa tu email.'};
export const ruleUrl = ruleUrlCustom();
