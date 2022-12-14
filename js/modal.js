(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    //  scrollLock: document.querySelector("[data-hidden]"),
   //  scrollLock: document.querySelector("[data-hidden]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
//   refs.scrollLock.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("hero__is-hidden");
   //  refs.scrollLock.classList.toggle("overflow");
  }
})();
