const baseIziToastOptions = {
  error: {
    position: 'topRight',
    class: 'error',
    color: 'white',
    timeout: 3000,
  },
  info: {
    position: 'topRight',
    timeout: 3000,
  },
};

export const MASSAGES = {
  loading: 'Loading images, please wait...',
  no_data: 'Sorry, there are no images matching your search query. Please try again!',
  request_error: 'Error during requesting',
  end_of_search: 'We\'re sorry, but you\'ve reached the end of search results.',
};

export const iziToastOptions = {
  error_no_data: {
    message: MASSAGES.no_data,
    ...baseIziToastOptions.error,
  },
  request_error: {
    message: MASSAGES.request_error,
    ...baseIziToastOptions.error,
  },
  end_of_search: {
    message: MASSAGES.end_of_search,
    ...baseIziToastOptions.info,
  },
};