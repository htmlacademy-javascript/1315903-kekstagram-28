import { dataArray } from './create-data.js';
import { openFullImage } from './render-full.js';
import { getObjectMetadata } from './util.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const getThumbnailsFragment = (template, data) => {
  const pictureListFragment = document.createDocumentFragment();
  data.forEach((element) => {
    const picture = template.cloneNode(true);
    picture.dataset.id = element.id;
    picture.querySelector('.picture__img').setAttribute('src', element.url);
    picture.querySelector('.picture__likes').textContent = element.likes;
    picture.querySelector('.picture__comments').textContent = element.comments.length;
    pictureListFragment.appendChild(picture);
  });
  return pictureListFragment;
};

const renderThumbnails = () => pictures.appendChild(getThumbnailsFragment(pictureTemplate,dataArray));

const openPopup = (evt) => {
  const thumbnail = evt.target.closest('[data-id]');
  if (!thumbnail) {
    return;
  }
  const idClickedImage = Number(thumbnail.dataset.id);
  const dataClickedImage = getObjectMetadata(dataArray,idClickedImage);
  return openFullImage(dataClickedImage);
};

pictures.addEventListener('click', openPopup);

export {renderThumbnails};

