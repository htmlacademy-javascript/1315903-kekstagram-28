import {generateObjectsArray} from './create-data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const dataArray = generateObjectsArray();
const pictureListFragment = document.createDocumentFragment();

dataArray.forEach((element) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').setAttribute('src', element.url);
  picture.querySelector('.picture__likes').textContent = element.likes;
  picture.querySelector('.picture__comments').textContent = element.comments.length;
  pictureListFragment.appendChild(picture);
});

pictures.appendChild(pictureListFragment);

