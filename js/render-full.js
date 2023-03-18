import { createCommentItem } from './comment-layout.js';

const closeButton = document.querySelector('.big-picture__cancel');

const clearExistsComments = () => {
  document.querySelector('.social__comments').innerHTML = '';
};

const hiddenCommentCout = () => {
  document.querySelector('.social__comment-count').classList.add('hidden');
};

const hiddenCommentsLoader = () => {
  document.querySelector('.comments-loader').classList.add('hidden');
};

const fixedBackPage = () => document.querySelector('body').classList.add('modal-open');

const renderPopup = (data) => {
  document.querySelector('.big-picture').classList.remove('hidden');
  document.querySelector('.big-picture .big-picture__img img').setAttribute('src', data.url);
  document.querySelector('.big-picture .likes-count').textContent = data.likes;
  document.querySelector('.big-picture .comments-count').textContent = data.comments.length;
  document.querySelector('.big-picture .social__caption').textContent = data.description;
};

const renderComments = (data) => {
  data.comments
    .forEach((comment) => document.querySelector('.social__comments').appendChild(createCommentItem(comment)));
};


const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

const onClickCloseButton = (evt) => {
  evt.preventDefault();
  closePopup();
};

function closePopup () {
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  closeButton.removeEventListener('click', onClickCloseButton);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const openFullImage = (data) => {
  fixedBackPage();
  hiddenCommentCout();
  hiddenCommentsLoader();
  renderPopup(data);
  clearExistsComments();
  renderComments(data);
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', onClickCloseButton);
};

export {openFullImage};
