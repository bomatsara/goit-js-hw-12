import { getLoader, getLoadMoreBtnEl } from './render-functions.js';
import { MASSAGES } from './options.js';

export const formEl = document.querySelector('#search-form');
export const loaderEl = getLoader(MASSAGES.loading);
export const imagesEl = document.querySelector('#images');
export const loadMoreBtnEl = getLoadMoreBtnEl();
export const searchStringInput = formEl.querySelector('input[name="search"]');