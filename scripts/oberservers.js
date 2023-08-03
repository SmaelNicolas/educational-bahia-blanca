const options = {
	root: null,
	threshold: 1,
	rootMargin: "0px 0px -80px 0px",
};
export const observersElements = () => {
	const title = document.querySelector("#titulo");

	const callMe = (entries) => {
		let entry = entries[0];
		if (entry.isIntersecting) {
			entry.target.classList.add("active");
		} else {
			// entry.target.classList.remove("active");
		}
	};

	let observer = new IntersectionObserver(callMe, options);

	observer.observe(title);
};
