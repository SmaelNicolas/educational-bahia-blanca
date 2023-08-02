const title = document.querySelector("#titulo");

const callMe = (entries) => {
	let entry = entries[0];
	if (entry.isIntersecting) {
		title.classList.add("active");
	} else {
		title.classList.remove("active");
	}
};

let options = {};

let observer = new IntersectionObserver(callMe, options);

observer.observe(title);
