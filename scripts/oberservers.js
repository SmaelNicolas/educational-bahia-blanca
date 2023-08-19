const options = {
	root: null,
	threshold: 1,
	rootMargin: "0px 0px 0px 0px",
};
const options2 = {
	root: null,
	threshold: 1,
	rootMargin: "0px 0px 100px 0px",
};
export const observersElements = () => {
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

	let observerImages = new IntersectionObserver(addUrl, options);

	imagesLazy.forEach((image) => {
		observerImages.observe(image);
	});

	const iconBounce = document.querySelectorAll(".appear");

	const addClass = (entries, obs) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("heartbeat");
				obs.unobserve(entry.target);
			}
		});
	};
	let observerIconBounce = new IntersectionObserver(addClass, options2);
	iconBounce.forEach((icon) => {
		observerIconBounce.observe(icon);
	});
};
