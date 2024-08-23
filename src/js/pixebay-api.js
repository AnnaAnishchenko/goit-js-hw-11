const BASE_URL = 'https://pixabay.com/api';
const API_KEY = 'your_api_key';

export const fetchPhotos = searchedQuery => {
  const urlParams = new URLSearchParams({
    key: '45552769-3540ba49dba2ab2d34c825df8',
    q: searchedQuery,
    orientation: 'horizontal',
    per_page: 20,
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}/?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
