import { clearExistsСounterComments, createCommentCounterElement, clearExistsComments, renderComments, onClickMoreCommentsButton, buttonLoadMore } from './comment-layout.js';

const buttonClose = document.querySelector('.big-picture__cancel');

const fixBackPage = () => document.querySelector('body').classList.add('modal-open');

const renderPopup = (data) => {
  document.querySelector('.big-picture').classList.remove('hidden');
  document.querySelector('.big-picture .big-picture__img img').setAttribute('src', data.url);
  document.querySelector('.big-picture .likes-count').textContent = data.likes;
  document.querySelector('.big-picture .social__caption').textContent = data.description;
};

buttonLoadMore.addEventListener('click', onClickMoreCommentsButton);

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

const onClickButtonClose = (evt) => {
  evt.preventDefault();
  closePopup();
};

function closePopup () {
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  buttonClose.removeEventListener('click', onClickButtonClose);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const openFullImage = (data) => {
  fixBackPage();
  renderPopup(data);
  clearExistsСounterComments();
  createCommentCounterElement();
  clearExistsComments();
  renderComments(data);
  document.addEventListener('keydown', onDocumentKeydown);
  buttonClose.addEventListener('click', onClickButtonClose);
};

export {openFullImage};
