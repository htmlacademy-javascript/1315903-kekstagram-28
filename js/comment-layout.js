import { COUNT_COMMENTS } from './config.js';

const commentsList = document.querySelector('.social__comments');
const buttonLoadMore = document.querySelector('.comments-loader');
const counterComments = document.querySelector('.social__comment-count');

const clearExistsСounterComments = () => {
  counterComments.innerHTML = '';
};

const calcAllComments = () => {
  const countAllComments = commentsList.querySelectorAll('.social__comment');
  return countAllComments.length;
};

const clearExistsComments = () => {
  document.querySelector('.social__comments').innerHTML = '';
};

const calcHiddenComments = (comments) => {
  const currentHiddenComments = comments.querySelectorAll('.hidden');
  return currentHiddenComments;
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

const createSocialPictureLayout = (data) => {
  const socialPicture = document.createElement('img');
  socialPicture.classList.add('social__picture');
  socialPicture.setAttribute('src', data.avatar);
  socialPicture.setAttribute('alt', data.name);
  socialPicture.setAttribute('width', 35);
  socialPicture.setAttribute('height', 35);
  return socialPicture;
};

const createTextCommentLayout = (data) => {
  const textComment = document.createElement('p');
  textComment.classList.add('social__text');
  textComment.textContent = data.message;
  return textComment;
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

const createCommentItem = (data) => {
  const commentFragment = document.createDocumentFragment();
  const commentItem = document.createElement('li');
  commentItem.classList.add('social__comment');
  commentItem.classList.add('hidden');
  commentItem.appendChild(createSocialPictureLayout(data));
  commentItem.appendChild(createTextCommentLayout(data));
  commentFragment.appendChild(commentItem);
  return commentFragment;
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

export { clearExistsСounterComments, createCommentCounterElement, clearExistsComments, renderComments, onClickMoreCommentsButton, buttonLoadMore };
