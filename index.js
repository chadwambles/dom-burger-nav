let burger = document.getElementById('burger'),
	 navbar    = document.getElementById('navbar');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	navbar.classList.toggle('is-open');
});
