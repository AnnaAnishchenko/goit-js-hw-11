//pixabay.com/api/

import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixebay-api.js';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

// Створюємо екземпляр SimpleLightbox
let lightbox = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

//функції для показу  завантажувача
const showLoader = () => {
  loaderEl.style.display = 'block';
};

//функції для приховування завантажувача
const hideLoader = () => {
  loaderEl.style.display = 'none';
};

const onSearchFormSubmit = event => {
  // відміна дії за замовчуванням
  event.preventDefault();

  //значення елемента форми
  const searchedValue = searchFormEl.elements.user_query.value.trim();

  // Перевірка на порожній запит
  if (!searchedValue) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query!' });
    return;
  }

  // викликаємо завантажувач
  showLoader();

  // Запит на сервер
  fetchPhotos(searchedValue)
    // отримуємо дані
    .then(data => {
      // Перевірка на відсутність результатів
      if (data.hits.length === 0) {
        iziToast.warning({
          title: 'Warning',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        // Очищення галереї перед новим пошуком
        galleryEl.innerHTML = '';
        searchFormEl.reset();

        return;
      }

      // Перебираємо масив, додаємо всі елементи
      const galleryCardsTemplate = data.hits
        .map(imgDetails => createGalleryCardTemplate(imgDetails))
        .join('');

      // Додаємо в розмітку HTML
      galleryEl.innerHTML = galleryCardsTemplate;

      // Оновлюємо галерею SimpleLightbox
      lightbox.refresh();
    })
    // ловимо помилку
    .catch(err => {
      iziToast.error({
        title: 'Error',
        message: `An error occurred: ${err.message}`,
      });
    })
    .finally(() => {
      // Приховуємо завантажувач після завершення запиту
      hideLoader();
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
