import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
// gallery.setAttribute(
//   "style",
//   "list-style-type: none; display: flex; align-items: center; justify-content: space-evenly"
// );
const makeImagesItems = ({ preview, description }) =>
  `<li class = "gallery__items"><img class = "gallery__items-img"  src = "${preview}" alt = "${description}"></li>`;
const imagesItems = galleryItems.map(makeImagesItems).join("");
gallery.insertAdjacentHTML("afterbegin", imagesItems);
console.log(imagesItems);

console.log(galleryItems);
