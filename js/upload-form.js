import { isEscape, findDublicateItems } from './util.js';
import './scale.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const uploadModalWindow = document.querySelector('.img-upload__overlay');
const buttonCancelUpload = document.querySelector('#upload-cancel');
const hashtag = uploadModalWindow.querySelector('.text__hashtags');
const textDescription = uploadModalWindow.querySelector('.text__description');


const getMessage = (type) => {
  const messageFragment = document.createDocumentFragment();
  const infoMessage = document.querySelector(`#${type}`).cloneNode(true).content.querySelector(`.${type}`);
  messageFragment.appendChild(infoMessage);
  return document.body.appendChild(messageFragment);
};

const isShowError = () => {
  if (document.body.querySelector('.error')) {
    return true;
  }
  return false;
};

const isShowSuccess = () => {
  if (document.body.querySelector('.success')) {
    return true;
  }
  return false;
};

const removeErrorMessage = () => {
  if (isShowError()) {
    document.querySelector('.error').remove();
  }
};

const removeSuccessMessage = () => {
  if (isShowSuccess()) {
    document.querySelector('.success').remove();
  }
};

const onChangeForm = () => {
  uploadModalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const onClickButtonCancel = () => {
  uploadModalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onClickButtonCancel);
  document.removeEventListener('click', onClickButtonCancel);
  uploadFile.value = '';
};

const onKeydownEsc = (evt) => {
  if(isEscape(evt) && !(document.body.querySelector('.error'))) {
    if(evt.target === hashtag || evt.target === textDescription) {
      return;
    }
    onClickButtonCancel();
  } else if (isEscape(evt) && (document.querySelector('.error__button'))) {
    removeErrorMessage();
  }
};

uploadFile.addEventListener('change', onChangeForm);
buttonCancelUpload.addEventListener('click', onClickButtonCancel);
document.addEventListener('keydown', onKeydownEsc);

const pristine = new Pristine(uploadForm);

const validateHashtagField = (item) => {
  if (item.length === 0) {
    return true;
  }
  const arrayHashtag = item.split(' ');
  const Regexp = /^#[a-zа-я0-9]{1,19}$/i;
  if (arrayHashtag.length > 5 || findDublicateItems(arrayHashtag)) {
    return false;
  }
  for (let i = 0; i <= arrayHashtag.length - 1; i++) {
    if (Regexp.test(arrayHashtag[i]) === false) {
      return false;
    }
  }
  return true;
};

pristine.addValidator(hashtag, validateHashtagField, 'Неверно указан хэштег');

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
    getMessage('error');
    const errorButton = document.querySelector('.error__button');
    errorButton.addEventListener('click', removeErrorMessage);
  } else {
    evt.preventDefault();
    getMessage('success');
    const successButton = document.querySelector('.success__button');
    successButton.addEventListener('click', removeErrorMessage);
  }
});

document.addEventListener('click', () => {
  if (isShowError) {
    removeErrorMessage();
  }
});

document.addEventListener('click', () => {
  if (isShowSuccess) {
    removeSuccessMessage();
  }
});
