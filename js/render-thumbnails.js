import {generateData} from './create-data.js';
import {openFullImage,closeFullImage} from './render-full.js';

const renderThumbnails = () => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictures = document.querySelector('.pictures');
  const dataArray = generateData();
  const pictureListFragment = document.createDocumentFragment();
  dataArray.forEach((element) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').setAttribute('src', element.url);
    picture.querySelector('.picture__likes').textContent = element.likes;
    picture.querySelector('.picture__comments').textContent = element.comments.length;
    pictureListFragment.appendChild(picture);
    openFullImage(picture, element);
    closeFullImage();
  });
  return pictures.appendChild(pictureListFragment);
};

export {renderThumbnails};

