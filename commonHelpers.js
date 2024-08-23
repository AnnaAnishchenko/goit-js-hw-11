import{i as n}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),u=s=>`
  <li class="gallery-card">
    <img class="gallery-img"
    src="${s.webformatURL}" 
    alt="${s.tags}" />
    <div class="info">
      <p><b>Likes:</b> ${s.likes}</p>
      <p><b>Views:</b> ${s.views}</p>
      <p><b>Comments:</b> ${s.comments}</p>
      <p><b>Downloads:</b> ${s.downloads}</p>
    </div>
  </li>
  `,d=s=>{s.preventDefault();const o=l.elements.user_query.value.trim();if(!o){n.error({title:"Error",message:"Please enter a search query!"});return}c.innerHTML="",fetch(`https://pixabay.com/api/?key=45552769-3540ba49dba2ab2d34c825df8&query=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0){n.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});return}const a=t.hits.map(e=>u(e)).join("");c.innerHTML=a}).catch(t=>{n.error({title:"Error",message:`An error occurred: ${t.message}`})})};l.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
