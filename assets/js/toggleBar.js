
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    document.querySelector('.lateralDirectorio').classList.toggle('active');
    document.querySelector('.contenedorCategoria').classList.toggle('active');

});