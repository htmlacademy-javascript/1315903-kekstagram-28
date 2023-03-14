import {generateData} from './create-data.js';
import {openFullImage,closeFullImage} from './render-full.js';

const getThumbnailsFragment = (template, data) => {
  const pictureListFragment = document.createDocumentFragment();
  data.forEach((element) => {
    const picture = template.cloneNode(true);
    picture.querySelector('.picture__img').setAttribute('src', element.url);
    picture.querySelector('.picture__likes').textContent = element.likes;
    picture.querySelector('.picture__comments').textContent = element.comments.length;
    pictureListFragment.appendChild(picture);
    openFullImage(picture, element);
    closeFullImage();
  });
  return pictureListFragment;
};

const renderThumbnails = () => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictures = document.querySelector('.pictures');
  const dataArray = generateData();
  return pictures.appendChild(getThumbnailsFragment(pictureTemplate,dataArray));
};

export {renderThumbnails};

