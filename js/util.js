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

const getObjectMetadata = (data,id) => {
  const item = data.find((el) => el.id === id);
  return item;
};

const findDublicateItems = (arr) => {
  const sortArray = Array.from(arr).sort();
  for (let i = 0; i <= sortArray.length - 2; i++) {
    if (sortArray[i] === sortArray[i + 1]) {
      return true;
    }
  }
  return false;
};

const isEscape = (evt) => evt.key === 'Escape';

export {getRandomInteger,generateUniqValue,getObjectMetadata,isEscape,findDublicateItems};

