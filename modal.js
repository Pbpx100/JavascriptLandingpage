// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close")
const closeBtnModal = document.getElementById("button-close")
const x = document.getElementById("myTopnav");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((cloBtn) => cloBtn.addEventListener("click", closeModal));
closeBtnModal.onclick = function () {
  closeModal()
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

