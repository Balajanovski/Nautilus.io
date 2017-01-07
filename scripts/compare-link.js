/*
$(document).ready(function(){
    var $nav = $("nav");
    var $body = $("body");
    $body.on("click", "#compare-link", function(e){
        e.preventDefault();
        $nav.html("<a class=\"nav-link\" id=\"back-link\" href=\"#\">Back</a>" +
            "<a class=\"nav-link\" id=\"bootstrap-link\" href=\"#\">Bootstrap</a>" +
            "<a class=\"nav-link\" id=\"foundation-link\" href=\"#\">Foundation</a>");
    });

    $body.on("click", "#back-link", function(e){
        e.preventDefault();
        $nav.html('<a class="nav-link" id="about-link" href="about.html">About</a>' +
                              '<a class="nav-link" id="contribute-link" href="contribute.html">Contribute</a>' +
                              '<a class="nav-link" id="compare-link" href="#">How we compare with:</a>' +
                              '<a class="nav-link" id="contact-link" href="contact.html">Contact Us</a>');
    });
});
*/
// var compareBack = document.querySelector('#back').addEventListener('click', back)
var nav = document.querySelector('nav')
var compare = (e) => {
	e.preventDefault()
	nav.innerHTML = [
		'<a class=nav-link id=back>Back</a>',
		'<a class=nav-link id=bootstrap>Bootstrap</a>',
		'<a class=nav-link id=foundation>Foundation</a>'
	].join('')
	document.querySelector('#back').addEventListener('click', back)
}
var back = (e) => {
	e.preventDefault()
	nav.innerHTML = [
		'<a class=nav-link id=about href="about.html">About</a>',
		'<a class=nav-link id=compare>How we compare...</a>',
		'<a class=nav-link id=contribute href="contribute.html">Contribute</a>',
		'<a class=nav-link id=contact href="contact.html">Contact us</a>'
	].join('')
	document.querySelector('#compare').addEventListener('click', compare)
}
var compareWith = document.querySelector('#compare').addEventListener('click', compare)
