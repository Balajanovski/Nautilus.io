'use strict';

var qs = function qs(q) {
	return document.querySelector(q);
};
var ne = function ne(el) {
	return document.createElement(el);
};

var nav = qs('nav');
var compare = qs('[href="#compare"]');

var compareLinks = [{ title: "Back",
	href: "#back"
}, { title: "Bootstrap",
	href: "Bootstrap.html"
}, { title: "Foundation",
	href: "Foundation.html"
}];
var normalLinks = [{ title: "About",
	href: "about.html"
}, { title: "Contribute",
	href: "contribute.html"
}, { title: "Compare",
	href: "#compare"
}, { title: "Contact us",
	href: "contact.html"
}];

var switchBack = function switchBack(e) {
	return switchNav(e, normalLinks);
};
var switchTo = function switchTo(e) {
	return switchNav(e, compareLinks);
};

var switchNav = function switchNav(e) {
	var links = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : compareLinks;

	e.preventDefault();
	nav.innerHTML = '';
	links.forEach(function (link) {
		var a = ne('a');
		a.href = link.href;
		if (link.href.indexOf('#back') == 0) {
			a.addEventListener('click', switchBack);
		} else if (link.href.indexOf('#compare') == 0) {
			a.addEventListener('click', switchTo);
		}
		a.innerText = link.title;
		nav.appendChild(a);
	});
};

compare.addEventListener('click', switchNav);