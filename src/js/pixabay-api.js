import { iziToastOptions } from './options.js';
import { getImagesEl } from './render-functions.js';
import { getFirstIdFromPixabayData, scrollToElementById } from './utills.js';
import { formEl, imagesEl, loadMoreBtnEl } from './dom-elements.js';
import axios from 'axios';

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

let lightbox;
let pagCurrentPage = 1;
const pagPerPage = 15;

function enableLightbox() {
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('#images .image-link', {
      captions: true,
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  }
}

async function getPixabayResponse(searchString) {
  return await axios.get('https://pixabay.com/api/', {
    params: {
      key: '43799735-9794f2fe47020c8ff64ba54b4',
      q: searchString,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: pagCurrentPage,
      per_page: pagPerPage,
    },
  });
}

async function imagesAction(searchString, isNewSearch = false) {
  if (isNewSearch) {
    pagCurrentPage = 1;
    imagesEl.innerHTML = '';
  }

  try {
    const pixabay = await getPixabayResponse(searchString);
    const { hits, totalHits } = pixabay.data;

    if (totalHits < 1) {
      iziToast.error(iziToastOptions.error_no_data);
      formEl.reset();
      return;
    }

    const idToScroll = getFirstIdFromPixabayData(hits);
    const totalPages = Math.ceil(totalHits / pagPerPage);
    loadMoreBtnEl.remove();

    if (isNewSearch) {
      imagesEl.innerHTML = getImagesEl(hits);
    } else {
      imagesEl.insertAdjacentHTML('beforeend', getImagesEl(hits));
    }

    if (idToScroll) {
      scrollToElementById(idToScroll);
    }

    if (pagCurrentPage < totalPages) {
      imagesEl.appendChild(loadMoreBtnEl);
      pagCurrentPage++;
    } else {
      if (!isNewSearch) {
        iziToast.info(iziToastOptions.end_of_search);
      }

      formEl.reset();
      pagCurrentPage = 1;
    }

    enableLightbox();
  } catch (error) {
    console.log(error);
    iziToast.error(iziToastOptions.request_error);
  }
}

export default imagesAction;