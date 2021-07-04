const menuToggle = document.querySelector("#nav__toggle");
const menu = document.querySelector(".nav__menu");
menuToggle.addEventListener("click", (e) => {
	console.log(menu.classList);
	menu.classList.toggle("active");
});
