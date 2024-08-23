import{S as u,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),d=t=>`
  <li class="gallery-card">
  <a href="${t.largeImageURL}">
     <img class="gallery-img"
      src="${t.webformatURL}" 
      alt="${t.tags}" />
  </a>
    <div class="info">
      <p><b>Likes:</b> ${t.likes}</p>
      <p><b>Views:</b> ${t.views}</p>
      <p><b>Comments:</b> ${t.comments}</p>
      <p><b>Downloads:</b> ${t.downloads}</p>
    </div>
  </li>
  `;let m=new u(".js-gallery a",{captionsData:"alt",captionDelay:250});const p=t=>{t.preventDefault();const a=c.elements.user_query.value.trim();if(!a){n.error({title:"Error",message:"Please enter a search query!"});return}l.innerHTML="",fetch(`https://pixabay.com/api/?key=45552769-3540ba49dba2ab2d34c825df8&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{if(s.hits.length===0){n.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});return}const o=s.hits.map(e=>d(e)).join("");l.innerHTML=o,m.refresh()}).catch(s=>{n.error({title:"Error",message:`An error occurred: ${s.message}`})})};c.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
