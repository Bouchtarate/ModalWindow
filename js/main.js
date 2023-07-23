"use strick";

let modalBtn = document.querySelectorAll(".modal");
let modalWindow = document.querySelector(".modal-window");
let overlay = document.querySelector(".overlay");
let header = document.querySelector(".head");
let closeModal = document.querySelector(".close-modal");

const enableModal = () => {
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
  console.log(modalWindow);
};

modalBtn.forEach((element) => {
  element.addEventListener("click", enableModal);
});

const disableModal = () => {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModal.addEventListener("click", disableModal);
overlay.addEventListener("click", disableModal);

document.addEventListener("keydown", function (ev) {
  if (ev.key === "Escape") {
    disableModal();
    console.log("The escape key was pressing");
  }
});
