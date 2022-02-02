
const radiosListButton = document.querySelectorAll('.cardPlan__radio')
const color = () =>{
    radiosListButton.forEach(elementRadio => elementRadio.parentElement.classList.remove('bg-color')) 
    const element = document.querySelector('.cardPlan__radio:checked').parentElement
    element.classList.add('bg-color');
}


radiosListButton.forEach(elementRadio => elementRadio.addEventListener('click', color)) 