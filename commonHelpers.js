import{S as d,i}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),m=t=>`
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
  `;let p=new d(".js-gallery a",{captionsData:"alt",captionDelay:250});const y=()=>{u.style.display="block"},f=()=>{u.style.display="none"},h=t=>{t.preventDefault();const o=c.elements.user_query.value.trim();if(!o){i.error({title:"Error",message:"Please enter a search query!"});return}n.innerHTML="",y(),fetch(`https://pixabay.com/api/?key=45552769-3540ba49dba2ab2d34c825df8&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{if(s.hits.length===0){i.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});return}const a=s.hits.map(e=>m(e)).join("");n.innerHTML=a,p.refresh()}).catch(s=>{i.error({title:"Error",message:`An error occurred: ${s.message}`})}).finally(()=>{f()})};c.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
