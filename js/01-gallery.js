import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const makeImagesItems = ({ preview, description, original }) =>
  `<li class = "gallery__item">
  <img class = "gallery__image"  data-set = "${original}" src = "${preview}" alt = "${description}" ></li>`;
const imagesItems = galleryItems.map(makeImagesItems).join("");
gallery.insertAdjacentHTML("afterbegin", imagesItems);

gallery.addEventListener("click", clickItemGallery);
function clickItemGallery(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target);
}
