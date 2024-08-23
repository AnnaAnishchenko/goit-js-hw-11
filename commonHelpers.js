import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=r=>`
  <li class="gallery-card">
  <a href="${r.largeImageURL}">
     <img class="gallery-img"
      src="${r.webformatURL}" 
      alt="${r.tags}" />
  </a>
    <div class="info">
      <p><b>Likes:</b> ${r.likes}</p>
      <p><b>Views:</b> ${r.views}</p>
      <p><b>Comments:</b> ${r.comments}</p>
      <p><b>Downloads:</b> ${r.downloads}</p>
    </div>
  </li>
  `,p="https://pixabay.com/api",h=r=>{const o=new URLSearchParams({key:"45552769-3540ba49dba2ab2d34c825df8",q:r,orientation:"horizontal",per_page:20,safesearch:"true"});return fetch(`${p}/?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},i=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader");let f=new d(".js-gallery a",{captionsData:"alt",captionDelay:250});const y=()=>{u.style.display="block"},g=()=>{u.style.display="none"},b=r=>{r.preventDefault();const o=i.elements.user_query.value.trim();if(!o){l.error({title:"Error",message:"Please enter a search query!"});return}y(),h(o).then(s=>{if(s.hits.length===0){l.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",i.reset();return}const a=s.hits.map(e=>m(e)).join("");c.innerHTML=a,f.refresh()}).catch(s=>{l.error({title:"Error",message:`An error occurred: ${s.message}`})}).finally(()=>{g()})};i.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
