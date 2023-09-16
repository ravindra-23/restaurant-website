AOS.init({
	duration: 1000,
    offset: 100,
});


// Get references to the mobile menu and toggle button
const mobileMenu = document.querySelector(".header_menu");
const mobileMenuToggle = document.querySelector(".header_menu-mobile");

// Add a click event listener to the toggle button
mobileMenuToggle.addEventListener("click", function () {

	const visibility = mobileMenu.getAttribute('data-visible');

	if(visibility === 'false') {
        mobileMenu.setAttribute('data-visible', true);
        mobileMenuToggle.setAttribute('aria-expanded', true);
    } else {
        mobileMenu.setAttribute('data-visible', false);
        mobileMenuToggle.setAttribute('aria-expanded', false);
    }
});