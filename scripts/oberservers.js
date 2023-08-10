const options = {
	root: null,
	threshold: 1,
	rootMargin: "0px 0px 0px 0px",
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

	const logoImages = document.querySelector("#logo");
	const logoHeader = document.querySelector(".header--image");
	const logoHeaderMobile = document.querySelector(
		".header--mobile--nav--image"
	);

	const changePosition = (entries, obs) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				logoHeader.classList.add("lazyLogo");
				logoHeaderMobile.classList.add("lazyLogo");
			} else {
				logoHeader.classList.remove("lazyLogo");
				logoHeaderMobile.classList.remove("lazyLogo");
			}
		});
	};

	let oberverLogo = new IntersectionObserver(changePosition, options);
	oberverLogo.observe(logoImages);
};
