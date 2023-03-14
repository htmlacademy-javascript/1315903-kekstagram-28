import {createCommentItem} from './comment-layout.js';

const openFullImage = (item, data) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('body').classList.add('modal-open');
    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('.big-picture').classList.remove('hidden');
    document.querySelector('.big-picture .big-picture__img img').setAttribute('src', data.url);
    document.querySelector('.big-picture .likes-count').textContent = data.likes;
    document.querySelector('.big-picture .comments-count').textContent = data.comments.length;
    document.querySelector('.big-picture .social__caption').textContent = data.description;
    document.querySelector('.social__comments').innerHTML = '';
    data.comments.forEach((comment) => document.querySelector('.social__comments').appendChild(createCommentItem(comment)));
  });
};

const closeFullImage = () => {
  const closeButton = document.querySelector('.big-picture__cancel');
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      document.querySelector('.big-picture').classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
    }
  });
  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.big-picture').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  });
};

export {openFullImage, closeFullImage};
