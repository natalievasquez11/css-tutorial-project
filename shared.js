var backdrop = document.querySelector('.backdrop');
var selectPlanButton = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var closeModalButton = document.querySelector('.modal__action--negative');
 
for(let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener('click', function() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

backdrop.addEventListener('click', closeModal);
closeModalButton.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}


