
(() => {
    const statusRadio = document.querySelector('.cardPlan__radio:checked').value;
    if(statusRadio === 'on'){
        document.querySelector('.cardPlan__radio:checked').parentElement.parentElement.classList.add('bg-color');
        document.querySelector('.cardPlan__id').classList.add('text-white');
        document.querySelector('.cardPlan__cantidad').classList.add('text-white');
        document.querySelector('.cardPlan__ejecutivo').classList.add('text-white');
        document.querySelector('.cardPlan__precio').classList.add('text-white');   
    }
})();



const radiosListButton = document.querySelectorAll('.cardPlan__radio')

const color = () =>{
    radiosListButton.forEach(elementRadio => {
        elementRadio.parentElement.parentElement.classList.remove('bg-color');
        elementRadio.parentElement.parentElement.childNodes[1].classList.remove('text-white');
        elementRadio.parentElement.parentElement.childNodes[3].childNodes[3].classList.remove('text-white');
        elementRadio.parentElement.parentElement.childNodes[5].classList.remove('text-white');
        elementRadio.parentElement.parentElement.childNodes[7].classList.remove('text-white');
    }) 
    const element = document.querySelector('.cardPlan__radio:checked').parentElement.parentElement
    element.classList.add('bg-color');
    element.childNodes[1].classList.add('text-white');
    element.childNodes[3].childNodes[3].classList.add('text-white');
    element.childNodes[5].classList.add('text-white');
    element.childNodes[7].classList.add('text-white');

}


radiosListButton.forEach(elementRadio => elementRadio.addEventListener('click', color)) 