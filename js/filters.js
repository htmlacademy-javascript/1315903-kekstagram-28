import { imagePreview } from './upload-form.js';

const effectList = document.querySelector('.effects__list');
const sliderValue = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const hiddenSliderRange = () => {
  sliderContainer.classList.add('visually-hidden');
  slider.classList.add('visually-hidden');
};

hiddenSliderRange();

const filters = {
  chrome: {
    effect : 'grayscale',
    min: 0,
    max: 1,
    step: 0.1
  },
  sepia: {
    effect : 'sepia',
    min: 0,
    max: 1,
    step: 0.1
  },
  marvin: {
    effect : 'invert',
    min: 0,
    max: 100,
    step: 1
  },
  phobos: {
    effect : 'blur',
    min: 0,
    max: 3,
    step: 0.1
  },
  heat: {
    effect : 'brightness',
    min: 1,
    max: 3,
    step: 0.1
  }
};

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
});

const applyLevelFilter = (type, stepFilterValue) => {
  if (type === 'invert') {
    imagePreview.style.filter = `${type}(${stepFilterValue}%)`;
  } else if (type === 'blur') {
    imagePreview.style.filter = `${type}(${stepFilterValue}px)`;
  } else {
    imagePreview.style.filter = `${type}(${stepFilterValue})`;
  }
};

slider.noUiSlider.on('update', () => {
  sliderValue.value = slider.noUiSlider.get();
});

slider.noUiSlider.on('change', () => {
  const selectedFilter = effectList.querySelectorAll('input:checked')[0].value;
  applyLevelFilter(filters[`${selectedFilter}`].effect, sliderValue.value);
});

const applyFilter = (filter) => {
  imagePreview.removeAttribute('class');
  imagePreview.classList.add(`effects__preview--${filter}`);
};

const updateSlider = (filterName) => {
  slider.noUiSlider.updateOptions({
    range: {
      min: filters[filterName].min,
      max: filters[filterName].max
    },
    start: filters[filterName].max,
    step: filters[filterName].step
  });
};

const onClickFilter = (evt) => {
  if(evt.target.tagName.toUpperCase() === 'INPUT') {
    const typeFilter = evt.target.value;
    if (typeFilter !== 'none') {
      sliderContainer.classList.remove('visually-hidden');
      slider.classList.remove('visually-hidden');
      applyFilter(typeFilter);
      updateSlider(typeFilter);
    } else {
      sliderContainer.classList.add('visually-hidden');
      slider.classList.add('visually-hidden');
    }
    if (imagePreview.style) {
      imagePreview.removeAttribute('style');
    }
  }
};

effectList.addEventListener('click', onClickFilter);

export { onClickFilter, effectList };

