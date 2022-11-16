//Fetch API

"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");

//FUNCTION TO OPEN MODAL
const openModal = (param) => {
  param.addEventListener("click", function () {
    console.log("Open Modal Clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
};

//FUNCTION TO CLOSE MODAL
const closeModal = (param) => {
  param.addEventListener("click", function () {
    console.log("Close Modal Clicked");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
};

//APPLYING TO BTNCLOSEMODAL AND THE OVERLAY
openModal(btnOpenModal);
closeModal(btnCloseModal);
closeModal(overlay);
