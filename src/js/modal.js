const refs = {
  openModalBtns: document.querySelectorAll('[data-modal-open]'),
  closeModalBtns: document.querySelectorAll('[data-modal-close]'),
  sendModalBtn: document.querySelector('[data-action="send"'),
  modal: document.querySelector('[data-modal]'),
  modalForm: document.querySelector('.modal-wrapper'),
  gratitudePopup: document.querySelector('.modal-gratitude'),
  spinnerEl: document.querySelector('.spinner'),
};

refs.openModalBtns.forEach(openBtn => {
  openBtn.addEventListener('click', toggleModal);
}); // add function to select all buttons that open modal window

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
    }, 3000); // set time to toogle popup view
  } else {
    refs.modal.classList.toggle('is-hidden');
    setTimeout(() => {
      refs.modalForm.classList.remove('visually-hidden');
      refs.gratitudePopup.classList.add('visually-hidden');
    }, 500);
  }
}
