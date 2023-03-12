import {getRandomInteger,generateUniqValue} from './util.js';
import {NUMBER_OF_PHOTOS,MIN_LIKES,MAX_LIKES,DESCRIPTIONS,NAMES,MESSAGES,NUMBER_OF_COMMENTS} from './config.js';

const generateUrl = () => {
  const uniqValue = generateUniqValue(1,NUMBER_OF_PHOTOS);
  const idPhotoUrl = uniqValue();
  return `photos/${idPhotoUrl}.jpg`;
};

const getAvatar = () => {
  const uniqValue = generateUniqValue(1,6);
  return `img/avatar-${uniqValue()}.svg`;
};

const getRandomMessages = () => MESSAGES[getRandomInteger(1,MESSAGES.length - 1)];
const createMessage = () => Array.from({length: getRandomInteger(1,2)}, getRandomMessages).join(' ');

const createComment = () => {
  const uniqValue = generateUniqValue(1,10000);
  return {
    id: uniqValue(),
    avatar: getAvatar(),
    message: createMessage(),
    name: NAMES[getRandomInteger(1,NAMES.length - 1)]
  };
};

const createObject = () => {
  const uniqValue = generateUniqValue(1,NUMBER_OF_PHOTOS);
  return {
    id: uniqValue(),
    url: generateUrl(),
    description: DESCRIPTIONS[getRandomInteger(1,DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(MIN_LIKES,MAX_LIKES),
    comments: Array.from({length: getRandomInteger(1,NUMBER_OF_COMMENTS)}, createComment)
  };
};

const generateData = () => (Array.from({length: NUMBER_OF_PHOTOS}, createObject));

export {generateData};
