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

const calcHiddenComments = (commentsList) => {
  const currentHiddenComments = commentsList.querySelectorAll('.hidden');
  return currentHiddenComments;
};

export { createCommentItem, calcHiddenComments };
