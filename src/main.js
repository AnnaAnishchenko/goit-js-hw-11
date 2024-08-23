//pixabay.com/api/

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

const createGalleryCardTemplate = imgInfo => {
  return `
  <li class="gallery-card">
  <a href="${imgInfo.largeImageURL}">
     <img class="gallery-img"
      src="${imgInfo.webformatURL}" 
      alt="${imgInfo.tags}" />
  </a>
    <div class="info">
      <p><b>Likes:</b> ${imgInfo.likes}</p>
      <p><b>Views:</b> ${imgInfo.views}</p>
      <p><b>Comments:</b> ${imgInfo.comments}</p>
      <p><b>Downloads:</b> ${imgInfo.downloads}</p>
    </div>
  </li>
  `;
};

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

  // Очищення галереї перед новим пошуком
  galleryEl.innerHTML = '';

  // викликаємо завантажувач
  showLoader();

  // Запит на сервер
  fetch(
    `https://pixabay.com/api/?key=45552769-3540ba49dba2ab2d34c825df8&q=${searchedValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20`
  )
    // перевірка
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    // отримуємо дані
    .then(data => {
      // Перевірка на відсутність результатів
      if (data.hits.length === 0) {
        iziToast.warning({
          title: 'Warning',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
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
