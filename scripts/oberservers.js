const options = {
	root: null,
	threshold: 1,
	rootMargin: "0px 0px -60px 0px",
};
export const observersElements = () => {
	const title = document.querySelector("#titulo");
	const imagesLazy = document.querySelectorAll(".lazy");

	const addUrl = (entries, obs) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.src = entry.target.dataset.src;
				entry.target.classList.remove("lazy");
				obs.unobserve(entry.target);
			}
		});
	};

	const callMe = (entries) => {
		let entry = entries[0];
		if (entry.isIntersecting) {
			entry.target.classList.add("active");
		} else {
			// entry.target.classList.remove("active");
		}
	};

	let observer = new IntersectionObserver(callMe, options);
	let observerImages = new IntersectionObserver(addUrl, options);

	observer.observe(title);

	imagesLazy.forEach((image) => {
		observerImages.observe(image);
	});
};
