const closeBtnEl = document.querySelector('.close-btn')

closeBtnEl.addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('active');
})