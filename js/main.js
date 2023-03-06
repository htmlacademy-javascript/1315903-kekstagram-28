const NUMBER_OF_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 250;
const DESCRIPTIONS = [
  'На фото запечатлен потрясающий вид с воздуха на нашу планету из космоса.',
  'Искривление Земли заметно, на изображении преобладают оттенки синего, зеленого и коричневого.',
  'Видны большие водоемы, в том числе океаны, моря и реки, а также обширные земельные просторы, от пустынь до лесов и гор. Континенты узнаваемы, с четко видимыми береговыми линиями и границами, давая ощущение масштаба и разнообразия нашего мира',
  'Солнечный свет светит на Земле, вызывая теплое свечение и создавая яркие контрасты между светом и тенью.',
  'Фотография - напоминание о красоте и сложности нашей планеты, и призыв сохранить и защитить ее для будущих поколений.',
  'На фото изображён панорамный вид на обширный и разнообразный мир, запечатлённый с высокой точки зрения.',
  'С этой точки зрения, можно увидеть обширный ландшафт скатывающихся холмов, пышных лесов, извилистых рек и возвышающихся горных хребтов, простирающихся, насколько может видеть глаз.',
  'Цвета сцены насыщены и разнообразны, с оттенками зеленого, синего, коричневого и белого, доминирующими на виде. ',
  'Вдали можно увидеть несколько городов, каждый со своей уникальной архитектурой и городскими ландшафтами, а также суетные порты и гавани, соединяющие разные части света.',
  'На фотографии запечатлена суть мировой красоты, сложности и разнообразия, напоминающие нам о множестве чудес, которые можно встретить на нашей планете.'
];
const NAMES = [
  'Александр',
  'Андрей',
  'Алексей',
  'Владимир',
  'Вадим',
  'Денис',
  'Кирилл',
  'Илья',
  'Роман'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

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

const generateUrl = () => {
  const uniqValue = generateUniqValue(1,NUMBER_OF_PHOTOS);
  const idPhotoUrl = uniqValue();
  return `photos/${idPhotoUrl}.jpg`;
};

const getAvatar = () => {
  const uniqValue = generateUniqValue(MIN_LIKES,MAX_LIKES);
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
    comments: Array.from({length: 2}, createComment)
  };
};

const generateObjectsArray = () => (Array.from({length: NUMBER_OF_PHOTOS}, createObject));

generateObjectsArray();
