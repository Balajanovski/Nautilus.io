const qs = q => document.querySelector(q)
const ne = el => document.createElement(el)


var nav = qs('nav')
var compare = qs('[href="#compare"]')


const compareLinks = [
	{	title: "Back",
		href: "#back"
	},{	title: "Bootstrap",
		href: "Bootstrap.html"
	},{	title: "Foundation",
		href: "Foundation.html"
	}
]
const normalLinks = [
	{	title: "About",
		href: "about.html"
	},{	title: "Contribute",
		href: "contribute.html"
	},{	title: "Compare",
		href: "#compare"
	},{	title: "Contact us",
		href: "contact.html"
	}
]

var switchBack	= e => switchNav(e, normalLinks)
var switchTo	= e => switchNav(e, compareLinks)

var switchNav =	(e, links = compareLinks) => {
	e.preventDefault()
	nav.innerHTML = ''
	links.forEach(link => {
		var a = ne('a')
		a.href = link.href
		if (link.href.indexOf('#back') == 0){
			a.addEventListener('click', switchBack)
		} else if (link.href.indexOf('#compare') == 0){
			a.addEventListener('click', switchTo)
		}
		a.innerText = link.title
		nav.appendChild(a)
	})
}

compare.addEventListener('click', switchNav)

