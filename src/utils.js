const objectToString = (object = {}) => {
  if (typeof object === String) {
    return object;
  }
  const toString = (key) => `${key}: ${object[key]}`;
  return Object.keys(object).map(toString).join(';');
};

export {objectToString};
