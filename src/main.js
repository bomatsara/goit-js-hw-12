import imagesAction from './js/pixabay-api.js';
import { formEl, loaderEl, imagesEl, searchStringInput, loadMoreBtnEl } from './js/dom-elements.js';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', event => {
  formEl.addEventListener('submit', async event => {
    event.preventDefault();

    formEl.after(loaderEl);
    const searchString = searchStringInput.value;

    await imagesAction(searchString, true);

    loaderEl.remove();
  });

  loadMoreBtnEl.addEventListener('click', async () => {
    const searchString = searchStringInput.value;

    loadMoreBtnEl.classList.add('loading');

    await imagesAction(searchString);

    loadMoreBtnEl.classList.remove('loading');
  });
});