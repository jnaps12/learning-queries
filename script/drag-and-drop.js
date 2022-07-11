const dropzones = document.querySelectorAll(".dropzone");
const board = document.querySelector(".board");
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

function dragstart() {
  // console.log('dragstart')
  this.classList.add("is-dragging");
}

function drag() {
  // console.log('drag');
}

function dragend() {
  // console.log('dragend');
  this.classList.remove("is-dragging");
}

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});

function dragenter() {}

function dragover(event) {
  event.preventDefault();
  this.classList.add("over");
}

function dragleave() {
  this.classList.remove("over");
}

function drop(event) {
  event.preventDefault();
  this.classList.remove("over");
  const cardBeingDragged = document.querySelector(".is-dragging");

  // this = dropzone
  this.appendChild(cardBeingDragged);
}
