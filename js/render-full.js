import { createCommentItem, calcHiddenComments } from './comment-layout.js';
import { COUNT_COMMENTS } from './config.js';

const closeButton = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const buttonLoadMore = document.querySelector('.comments-loader');
const counterComments = document.querySelector('.social__comment-count');

const clearExistsComments = () => {
  document.querySelector('.social__comments').innerHTML = '';
};

const clearExistsСounterComments = () => {
  counterComments.innerHTML = '';
};

const calcAllComments = () => {
  const countAllComments = commentsList.querySelectorAll('.social__comment');
  return countAllComments.length;
};

const calcShowComments = (comments) => {
  const hiddenComments = calcHiddenComments(comments);
  const commentsVisible = calcAllComments() - hiddenComments.length;
  return commentsVisible;
};

const createCommentCounterElement = () => {
  const item = document.createElement('span');
  item.classList.add('comments-count');
  counterComments.appendChild(item);
};

const showFiveComments = (hiddenComments, buttonMoreComments) => {
  hiddenComments.forEach((comment,index) => {
    if ((index <= COUNT_COMMENTS - 1) && (hiddenComments.length > COUNT_COMMENTS)) {
      if (buttonMoreComments.classList.contains('hidden')) {
        buttonMoreComments.classList.remove('hidden');
      }
      comment.classList.remove('hidden');
    } else if (hiddenComments.length <= COUNT_COMMENTS) {
      buttonMoreComments.classList.add('hidden');
      comment.classList.remove('hidden');
    }
  });
  const commentCounterElement = document.querySelector('.big-picture .comments-count');
  commentCounterElement.innerHTML = `${calcShowComments(commentsList)} из <span class="comments-count">${calcAllComments()}</span> комментариев`;
};

const fixBackPage = () => document.querySelector('body').classList.add('modal-open');

const renderPopup = (data) => {
  document.querySelector('.big-picture').classList.remove('hidden');
  document.querySelector('.big-picture .big-picture__img img').setAttribute('src', data.url);
  document.querySelector('.big-picture .likes-count').textContent = data.likes;
  document.querySelector('.big-picture .social__caption').textContent = data.description;
};

const renderComments = (data) => {
  data.comments
    .forEach((comment) => {
      commentsList.appendChild(createCommentItem(comment));
    });
  showFiveComments(calcHiddenComments(commentsList), buttonLoadMore);
};

const onClickMoreCommentsButton = (evt) => {
  evt.preventDefault();
  showFiveComments(calcHiddenComments(commentsList), buttonLoadMore);
};

buttonLoadMore.addEventListener('click', onClickMoreCommentsButton);

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
  fixBackPage();
  renderPopup(data);
  clearExistsСounterComments();
  createCommentCounterElement();
  clearExistsComments();
  renderComments(data);
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', onClickCloseButton);
};

export {openFullImage};
