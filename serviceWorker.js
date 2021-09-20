const portfolioAssets = "rehan-portfolio-v1";
const assets = [
	"/",
	"/index.html",
	"/css/style.css",
	"/css/plugins.css",
	"/css/colors.css",
	"/css/font/xcon.eot",
	"/css/font/xcon.svg",
	"/css/font/xcon.ttf",
	"/css/font/xcon.woff",
	"/css/font/xcon.woff2",
	"/js/ie8.js",
	"/js/init.js",
	"/js/jquery.js",
	"/js/jquery.js",
	"/js/modernizr.custom.js",
	"/js/plugins.js",
	"/video/1-1.m4v",
	"/img/about/2.m4v",
	"/img/about/4.png",
	"/img/logo/dark.png",
	"/img/logo/apple-touch-icon.png",
	"/img/logo/favicon-16x16.png",
	"/img/logo/favicon-32x32.png",
	"/img/logo/logo.png",
	"/img/news/1.webp",
	"/img/news/2.jpg",
	"/img/news/3.webp",
	"/img/sign.png",
	"/img/portfolio/1-1.png",
	"/img/portfolio/1-2.png",
	"/img/portfolio/1-3.png",
	"/img/portfolio/1.png",
	"/img/portfolio/3.png",
	"/img/portfolio/3-1.png",
	"/img/portfolio/3-2.png",
	"/img/portfolio/3-3.png",
	"/img/portfolio/4.png",
	"/img/portfolio/4-1.png",
	"/img/portfolio/4-2.png",
	"/img/portfolio/4-3.png",
	"/img/portfolio/5.png",
	"/img/portfolio/5-1.png",
	"/img/portfolio/5-2.png",
	"/img/portfolio/5-3.png",
	"/img/portfolio/6.png",
	"/img/portfolio/6-1.png",
	"/img/portfolio/6-2.png",
	"/img/portfolio/6-3.png",
	"/img/thumbs/1-1.jpg",
	"/img/thumbs/3-4.jpg",
	"/img/thumbs/4-2.jpg",
	"/img/thumbs/4-3.jpg",
];

self.addEventListener("install", (installEvent) => {
	installEvent.waitUntil(
		caches.open(portfolioAssets).then((cache) => {
			cache.addAll(assets);
		})
	);
});

self.addEventListener("fetch", (fetchEvent) => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then((res) => {
			return res || fetch(fetchEvent.request);
		})
	);
});
