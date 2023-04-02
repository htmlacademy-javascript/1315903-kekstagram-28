import { DEFAULT_VALUE_SCALE } from './config.js';
import { imagePreview } from './upload-form.js';

const lessScale = document.querySelector('.scale__control--smaller');
const moreScale = document.querySelector('.scale__control--bigger');
const valueScale = document.querySelector('.scale__control--value');

const setDefaultValue = () => {
  valueScale.value = `${String(DEFAULT_VALUE_SCALE)}%`;
};

setDefaultValue();

const getCurrentValueScale = () => parseInt(document.querySelector('.scale__control--value').value, 10);

const onClickZoomOutButton = () => {
  const newValue = getCurrentValueScale() - 25;
  if (newValue <= 25) {
    valueScale.value = '25%';
    imagePreview.style.transform = 'scale(0.25)';
  } else {
    valueScale.value = `${String(newValue)}%`;
    imagePreview.style.transform = `scale(${newValue / 100})`;
  }
};

const onClickZoomInButton = () => {
  const newValue = getCurrentValueScale() + 25;
  if (newValue >= 100) {
    valueScale.value = '100%';
    imagePreview.style.transform = 'scale(1)';
  } else {
    valueScale.value = `${String(newValue)}%`;
    imagePreview.style.transform = `scale(${newValue / 100})`;
  }
};

lessScale.addEventListener('click', onClickZoomOutButton);
moreScale.addEventListener('click', onClickZoomInButton);

export { lessScale, moreScale, onClickZoomInButton, onClickZoomOutButton };
