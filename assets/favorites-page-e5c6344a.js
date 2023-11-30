import{n as v,a as x,c as S,b as L,h,d as b,f as w,e as N,g as f}from"./notiflix-notify-aio-4ff1fe5e.js";const I=document.querySelector(".order-btn"),M=document.querySelector(".order-btn-mob"),O=document.querySelector(".modal-close-btn"),C=document.querySelector(".modal-overlay"),j=document.querySelector(".form");I.addEventListener("click",E);M.addEventListener("click",E);O.addEventListener("click",q);j.addEventListener("submit",R);function E(){C.classList.remove("visually-hidden")}function q(){C.classList.add("visually-hidden")}function R(e){e.preventDefault();const t=e.currentTarget.elements.modal_name.value,n=e.currentTarget.elements.modal_phone.value,c=e.currentTarget.elements.modal_email.value,o=e.currentTarget.elements.modal_comment.value;e.currentTarget.reset(),t==""||n==""||c==""?v.Notify.failure("Ensure you input a value in both fields!"):x(t,n,c,o).then(()=>{v.Notify.success("This form has been successfully submitted!"),q()}).catch(d=>{v.Notify.failure("Oops! Something went wrong. Please try again later.")})}function T(e){return e.map(({category:t})=>t).filter((t,n,c)=>c.indexOf(t)===n).sort((t,n)=>t.localeCompare(n)).map(t=>`<button type="button" class="fav-categories-btn">${t}</button>`).join("")}function _(){const e={hero:document.querySelector(".js-fav-hero-section"),categories:document.querySelector(".js-fav-categories-section"),allCategBtn:document.querySelector(".js-fav-all-categ-btn"),categoriesList:document.querySelector(".js-fav-categories-list"),cardsList:document.querySelector(".js-fav-cards-list"),plug:document.querySelector(".js-favorites-plug"),footer:document.querySelector(".js-fav-footer")};t();function t(){e.allCategBtn.removeEventListener("click",s),e.categoriesList.removeEventListener("click",d);const a=JSON.parse(localStorage.getItem("cardsArray"))||[];if(a.length===0){getComputedStyle(e.hero).getPropertyValue("--visible")==="false"&&(e.hero.style.display="none"),e.categories.style.display="none",e.cardsList.style.display="none",e.footer.style.display="none",e.plug.style.display="block";return}if(e.plug.style.display="none",e.categoriesList.innerHTML=T(a),e.cardsList.innerHTML=S(a),L(),h(e.cardsList,a),document.querySelectorAll(".js-btn-heart-active").forEach(l=>l.addEventListener("click",n)),a.map(({category:l})=>l).filter((l,m,B)=>B.indexOf(l)===m).length===1){e.allCategBtn.style.display="none",e.categoriesList.firstChild.classList.add("categ-btn-active");return}e.allCategBtn.addEventListener("click",s),e.categoriesList.addEventListener("click",d)}function n(a){const u=a.currentTarget.parentNode.parentNode.dataset.id,r=JSON.parse(localStorage.getItem("cardsArray"))||[];r.splice(r.indexOf(r.find(l=>l._id===u)),1),localStorage.setItem("cardsArray",JSON.stringify(r)),t()}function c(){const a=[...e.categoriesList.children].filter(m=>m.classList.contains("categ-btn-active")),r=(JSON.parse(localStorage.getItem("cardsArray"))||[]).filter(m=>m.category===a[0].textContent);if(r.length===0){s();return}e.cardsList.innerHTML=S(r),L(),h(e.cardsList,r),document.querySelectorAll(".js-btn-heart-active").forEach(m=>m.addEventListener("click",o))}function o(a){const u=a.currentTarget.parentNode.parentNode.dataset.id,r=JSON.parse(localStorage.getItem("cardsArray"))||[];r.splice(r.indexOf(r.find(l=>l._id===u)),1),localStorage.setItem("cardsArray",JSON.stringify(r)),c()}function d(a){a.target.classList.contains("js-fav-categories-list")||([...a.currentTarget.children].map(u=>u.classList.remove("categ-btn-active")),a.currentTarget.previousElementSibling.classList.remove("categ-btn-active"),a.target.classList.add("categ-btn-active"),c())}function s(){e.allCategBtn.classList.add("categ-btn-active"),[...e.allCategBtn.nextElementSibling.children].map(a=>a.classList.remove("categ-btn-active")),t()}}const i={allCards:document.querySelector(".js-fav-cards-list"),modalCardCont:document.querySelector(".modal-card-markup"),modalBackdrop:document.querySelector(".modal-backdrop"),modalButtonClose:document.querySelector(".modal-btn-close"),giveRatingModalBtn:document.querySelector(".modal-give-rating"),inputStar:document.querySelectorAll(".rating-star")};i.allCards.addEventListener("click",G);function D(){document.querySelectorAll(".stars-block-js").forEach(t=>{const n=parseFloat(t.querySelector(".cards-raiting").textContent),c=Math.round(n);t.querySelectorAll("#stars-full-modal").forEach((d,s)=>{s<c&&d.classList.add("js-stars")})})}function H(){i.modalButtonClose.addEventListener("click",g),i.modalBackdrop.addEventListener("click",p),window.addEventListener("keydown",y),i.modalBackdrop.classList.add("is-open-modal"),document.body.style.overflow="hidden"}function y(e){e.key==="Escape"&&g()}function g(){i.modalButtonClose.removeEventListener("click",g),i.modalBackdrop.removeEventListener("click",p),window.removeEventListener("keydown",y),i.modalBackdrop.classList.remove("is-open-modal"),document.body.style.overflow="auto";const e=document.querySelector(".iframe-video");e.src=""}function p(e){if(e&&e.target===i.modalBackdrop){i.modalButtonClose.removeEventListener("click",g),i.modalBackdrop.removeEventListener("click",p),window.removeEventListener("keydown",y),i.modalBackdrop.classList.remove("is-open-modal"),document.body.style.overflow="auto";const t=document.querySelector(".iframe-video");t.src=""}}function A(){try{let e=localStorage.getItem("cardsArray");return e=e?JSON.parse(e):[],e}catch{return f.Notify.error("Error parsing saved data from localStorage"),[]}}function k(e){localStorage.setItem("cardsArray",JSON.stringify(e))}function J(){const e=document.querySelector(".js-btn-heart-inactive");e&&e.classList.add("visually-hidden")}function F(){const e=document.querySelector(".js-btn-heart-active");e&&e.classList.remove("visually-hidden")}function G(e){const t=e.target.closest(".card-btn");if(t){const c=t.closest(".card").dataset.id;b.Loading.standard("Loading...",{svgColor:"#9bb537"}),w(c).then(o=>{const d=N(o);i.modalCardCont.innerHTML=d,D();const s=document.querySelector(".modal-add-favorite");b.Loading.remove(),s&&(A().find(r=>r._id===c)?(s.textContent="Remove from favorites",F()):(s.textContent="Add to favorites",J()),H(),s.addEventListener("click",P))}).catch(o=>{console.error("Error fetching or rendering data:",o),f.Notify.failure(o.message)})}}function P(e){const t=e.target,n=t.getAttribute("id"),c=K(n),o=A(),d=o.findIndex(s=>s._id===n);d!==-1?(o.splice(d,1),f.Notify.warning("Recipe removed from favorites"),t.textContent="Add to favorites",k(o)):(o.push(c),f.Notify.success("Recipe added to favorites"),t.textContent="Remove from favorites"),k(o)}function K(e){const t={title:document.querySelector(".modal-recipe-name").textContent,description:document.querySelector(".modal-recipe-instructions").textContent,preview:document.querySelector(".iframe-video").getAttribute("poster"),rating:document.querySelector(".modal-stars-rating").textContent,category:document.querySelector(".modal-category-js").textContent};return{_id:e,title:t.title,description:t.description,preview:t.preview,rating:t.rating,category:t.category}}_();
