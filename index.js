const headerMenu = document.querySelector(".header__menu");

const handleModalEvent = e => {
	const btn = e.target.closest(".modal-btn");
	if (!btn) return;
	const mobileNav = headerMenu.querySelector(".mobile__nav");

	mobileNav.classList.toggle("toggle-display");
	// console.log(mobileNav);
};
headerMenu.addEventListener("click", handleModalEvent);
// console.log(headerMenu);

// const width = window.innerWidth;
// if (width === 800) {
// 	console.log("yes");
// }
// console.log(width);
