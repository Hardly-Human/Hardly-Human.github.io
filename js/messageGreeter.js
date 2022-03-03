function display_message(message, time_out, color, duration) {
	styles = [
		{
			background: "hsla(165, 60%, 11%, 1)",
			background:
				"linear-gradient(90deg, hsla(165, 60%, 11%, 1) 0%, hsla(149, 54%, 31%, 1) 100%)",
		},
		{
			background: "#8E0E00",
			background: "linear-gradient(to right, #1F1C18, #8E0E00)",
		},
		{
			background: "#ff7878",
			background: "linear-gradient(315deg, #ff7878 0%, #ff0000 74%)",
		},
		{
			background: "hsla(189, 86%, 64%, 1)",
			background:
				"linear-gradient(90deg, hsla(189, 86%, 64%, 1) 0%, hsla(277, 67%, 77%, 1) 50%, hsla(218, 88%, 59%, 1) 100%)",
		},
		{
			background: "#000000",
			background: "linear-gradient(147deg, #000000 0%, #04619f 74%)",
		},
	];

	setTimeout(() => {
		Toastify({
			text: message,
			duration: duration,
			destination: "http://127.0.0.1:5501/index.html",
			newWindow: true,
			close: false,
			gravity: "bottom", // `top` or `bottom`
			position: "right", // `left`, `center` or `right`
			stopOnFocus: false, // Prevents dismissing of toast on hover
			style: styles[color],
			onClick: function () {}, // Callback after click
		}).showToast();
	}, time_out);
}

$(document).ready(function () {
	if (window.scrollY == 0) {
		display_message("👋 Hi, I am Zeek!", 1500, 0, 4000);
		display_message("Rehan's Virtual Assistant 🤖", 2500, 0, 4000);
		display_message(
			"I will be your companion in this journey 🚀",
			3500,
			0,
			4000
		);
	}
});

$(document).ready(function () {
	var count = 0;
	$("#avatar").click(function () {
		count += 1;

		if (count > 2) {
			display_message("💀 Please Stop!! That is an image.", 0, 1, 1000);
		}
	});
});

$(document).ready(function () {
	var count = 0;
	$("#hamburger").click(function () {
		count += 1;

		if (count > 2) {
			display_message("😎 That sounds Dope!!", 0, 2, 1000);
		}
	});
});

$(document).ready(function () {
	count = 0;
	$(".icons ul li a").hover(
		function () {
			title = $(this).attr("title");
			console.log(title);
			display_message(title, 0, 4, 1000);
		},
		() => {}
	);
});

COUNT = 0;

$(window).scroll(function () {
	if ($(window).scrollTop() + window.innerHeight == $(document).height()) {
		display_message("🙌 Thanks for Visiting.", 0, 0, 2000);

		if (COUNT < 1) {
			get_location();
		}
		COUNT += 1;
	}
});

function get_location() {
	fetch("https://api.ipregistry.co/?key=8imnisuf1vl9yuxv")
		.then(function (response) {
			return response.json();
		})
		.then(function (payload) {
			display_message(
				`Hey, Are you from ${payload.location.city}.`,
				0,
				0,
				5000
			);

			display_message(
				"👈 Would love to have a converstion with you, let's connect!!",
				1000,
				1,
				5000
			);

			display_message("🤟 Peace Out", 2000, 0, 5000);
		});
}
