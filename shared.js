var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button')
var closeModalButton = document.querySelector('.modal__action--negative')
// console.dir(backdrop)
// console.dir(selectPlanButtons);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
       modal.style.display = 'block';
       backdrop.style.display = 'block';    
    });
}




// backdrop.addEventListener('click', function() {
//     modal.style.display = 'none';
//     backdrop.style.display = 'none';    
//     });


// closeModalButton.addEventListener('click', function() {
//     modal.style.display = 'none';
//     backdrop.style.display = 'none';    
//     });

backdrop.addEventListener ("click", closeModal )

closeModalButton.addEventListener ("click", closeModal )


function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}