import {getRandomInteger,generateUniqValue} from './util.js';
import {NUMBER_OF_PHOTOS,MIN_LIKES,MAX_LIKES,DESCRIPTIONS,NAMES,MESSAGES,NUMBER_OF_COMMENTS} from './config.js';

const uniqIdPhoto = generateUniqValue(1,NUMBER_OF_PHOTOS);
const uniqIdComment = generateUniqValue(1,10000);
const uniqIdObject = generateUniqValue(1,NUMBER_OF_PHOTOS);

const generateUrl = () => {
  const idPhotoUrl = uniqIdPhoto();
  return `photos/${idPhotoUrl}.jpg`;
};

const getAvatar = () => {
  const value = getRandomInteger(1,6);
  return `img/avatar-${value}.svg`;
};

const getRandomMessages = () => MESSAGES[getRandomInteger(1,MESSAGES.length - 1)];
const createMessage = () => Array.from({length: getRandomInteger(1,2)}, getRandomMessages).join(' ');

const createComment = () => ({
  id: uniqIdComment(),
  avatar: getAvatar(),
  message: createMessage(),
  name: NAMES[getRandomInteger(1,NAMES.length - 1)]
});

const createObject = () => ({
  id: uniqIdObject(),
  url: generateUrl(),
  description: DESCRIPTIONS[getRandomInteger(1,DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(MIN_LIKES,MAX_LIKES),
  comments: Array.from({length: getRandomInteger(1,NUMBER_OF_COMMENTS)}, createComment)
});

const generateData = () => (Array.from({length: NUMBER_OF_PHOTOS}, createObject));

const dataArray = generateData();

export {dataArray};
