export const openLinksHandler = () => {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	const allLinks = document.querySelectorAll(".open--link");
	const arrayOfLinks = Array.from(allLinks);

	arrayOfLinks.forEach((link) => {
		let url = link.dataset.link;
		link.addEventListener("click", () => {
			openInNewTab(url);
		});
	});
};
