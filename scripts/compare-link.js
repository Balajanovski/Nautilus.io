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
