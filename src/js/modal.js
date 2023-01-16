const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtns: document.querySelectorAll('[data-modal-close]'),
  sendModalBtn: document.querySelector('[data-action="send"'),
  modal: document.querySelector('[data-modal]'),
  modalForm: document.querySelector('.modal-wrapper'),
  gratitudePopup: document.querySelector('.modal-gratitude'),
  spinnerEl: document.querySelector('.spinner'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', toggleModal);
});
refs.sendModalBtn.addEventListener('click', toggleModal);

function toggleModal(event) {
  event.preventDefault();
  if (event.target.dataset.action === 'send') {
    refs.spinnerEl.classList.remove('visually-hidden');
    refs.modalForm.classList.add('visually-hidden');
    setTimeout(() => {
      refs.gratitudePopup.classList.remove('visually-hidden');
      refs.spinnerEl.classList.add('visually-hidden');
    }, 3000);
  } else {
    refs.modal.classList.toggle('is-hidden');
    setTimeout(() => {
      refs.modalForm.classList.remove('visually-hidden');
      refs.gratitudePopup.classList.add('visually-hidden');
    }, 500);
  }
}
