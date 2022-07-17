import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const makeImagesItems = ({ preview, description, original }) =>
  `<div class="gallery__item"><a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
const imagesItems = galleryItems.map(makeImagesItems).join("");
gallery.insertAdjacentHTML("afterbegin", imagesItems);

gallery.addEventListener("click", clickItemGallery);
function clickItemGallery(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return console.log("missed");
  }
  const modal = basicLightbox.create(
    `<img width="800" height="600"
        src="${event.target.dataset.source}">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onPressKeyESC);
      },
      onClose: () => {
        window.removeEventListener("keydown", onPressKeyESC);
      },
    }
  );
  modal.show();

  function onPressKeyESC(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }
}
