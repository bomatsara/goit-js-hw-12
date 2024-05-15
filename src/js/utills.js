export function getFirstIdFromPixabayData(data) {
  return data[0]['id'] ?? null;
}

export function scrollToElementById(elementId) {
  const elementsToScroll = document.querySelectorAll(`[data-image-id="${elementId}"]`);

  if (!elementsToScroll) return;

  const elementToScroll = elementsToScroll[elementsToScroll.length - 1];

  setTimeout(() => {
    elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 200);
}