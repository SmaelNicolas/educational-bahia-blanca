import { observersElements } from "./scripts/oberservers.js";

observersElements();

const buttonMenu = document.querySelector(".header--mobile--nav--close");
const menuMobile = document.querySelector("#header--mobile--nav--ul");

buttonMenu.addEventListener("click", () => {
	buttonMenu.classList.toggle("open");
	menuMobile.classList.toggle("active");
});
