export const handleNavigation = () => {
	const allLinks = document.querySelectorAll(".header--navigation--li");
	const ArrayLinks = Array.from(allLinks);

	ArrayLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			ArrayLinks.forEach((link) => {
				link.classList.remove("header--navigation--li--active");
			});
			link.classList.add("header--navigation--li--active");
		});
	});

	const allLinksMobile = document.querySelectorAll(".header--navigation--li");
	const ArrayLinksMobile = Array.from(allLinksMobile);
	const buttonMenu = document.querySelector(".header--mobile--nav--close");
	const menuMobile = document.querySelector("#header--mobile--nav--ul");

	buttonMenu.addEventListener("click", () => {
		buttonMenu.classList.toggle("open");
		menuMobile.classList.toggle("active");
	});

	ArrayLinksMobile.forEach((link) => {
		link.addEventListener("click", (e) => {
			ArrayLinksMobile.forEach((link) => {
				link.classList.remove("header--navigation--li--active");
			});
			link.classList.add("header--navigation--li--active");
			buttonMenu.classList.toggle("open");
			menuMobile.classList.toggle("active");
		});
	});

	const logoHeader = document.querySelector(".header--image");
	const logoHeaderMobile = document.querySelector(
		".header--mobile--nav--image"
	);
	logoHeader.addEventListener("click", () => {
		window.scrollTo(0, 0);
	});
	logoHeaderMobile.addEventListener("click", () => {
		window.scrollTo(0, 0);
	});
};
