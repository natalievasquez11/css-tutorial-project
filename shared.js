var backdrop = document.querySelector('.backdrop');
var selectPlanButton = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var closeModalButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

 
for(let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener('click', function() {
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

backdrop.addEventListener('click', function() {
  mobileNav.classList.remove('open');
  closeModal();
});

if(closeModalButton) {
  closeModalButton.addEventListener('click', closeModal);
}

function closeModal() {
  if(modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});

