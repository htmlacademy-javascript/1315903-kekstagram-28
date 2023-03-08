const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const generateUniqValue = (minElements,maxElements) => {
  const arr = [];
  return function getValue() {
    let value = getRandomInteger(minElements,maxElements);
    if (arr.length >= maxElements) {
      return null;
    }
    while (arr.includes(value)) {
      value = getRandomInteger(minElements,maxElements);
    }
    arr.push(value);
    return value;
  };
};

export {getRandomInteger,generateUniqValue};
