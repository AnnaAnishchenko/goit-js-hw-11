export const createGalleryCardTemplate = imgInfo => {
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
