try {
	fetch("https://cloudflare-quic.com/b/headers")
		.then((res) => res.json())
		.then((data) => {
			const countryCode = data.headers["Cf-Ipcountry"];
			let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
			const countryName = regionNames.of(countryCode);
			const messageDiv = document.getElementById("message");
			messageDiv.placeholder =
				countryCode === "CA"
					? `Thanks for Visiting. Hey, I just saw you are from ${countryName}. I am migrating to Canada and I'd love to know more about you and your work.`
					: `message`;
		});
} catch (error) {
	console.log("Cannot Access Country Code");
}
