// DOM Elements
const modalbg = document.querySelector(".bground");
const openModal = document.querySelectorAll(".modal-btn");
const closeMainModal = document.querySelectorAll(".close")
const closeMercieModal = document.getElementById("button-close")
const x = document.getElementById("myTopnav");


// launch modal event
openModal.forEach((btn) => btn.addEventListener("click", launchModal));
closeMainModal.forEach((cloBtn) => cloBtn.addEventListener("click", closeModal));
closeMercieModal.onclick = function () {
  closeModal()
  finalModal.style.display = "none"
  bookForm.style.display = "block";

}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  if (window.innerWidth <= 768 && !x.classList.contains("movil")) {
    x.classList.add("movil")
  }
  if (window.innerWidth > 768 && x.classList.contains("movil")) {
    x.classList.remove("movil")

  }
}
//close modal and remove the movil classof the navbar
function closeModal() {
  modalbg.style.display = "none";
  x.classList.remove("movil")

}
