'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

function toggleModal() {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
}

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', toggleModal);
  btnCloseModal.addEventListener('click', toggleModal);
  overlay.addEventListener('click', toggleModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (!modal.classList.contains('hidden')) {
        toggleModal();
      }
    }
  });
}
