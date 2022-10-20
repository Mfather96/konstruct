

const burgerButton = document.querySelector('.burger-button');

burgerButton.addEventListener('click', ()=>{
		document.querySelector('.burger_list').classList.toggle('open');
		burgerButton.classList.toggle('open');
})