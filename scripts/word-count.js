/**/
$(document).ready(function(){
    $("#message").keydown(function(){
        var max_length = 500 - $("#message").val().length;
        if (max_length === NaN)
            $("#word-count").text(max_length + " characters left");
        else
            $("#word-count").text(max_length + " characters left");
    });
   $("#message").keyup(function(){
        var max_length = 500 - $("#message").val().length;
        if (max_length === NaN)
            $("#word-count").text(max_length + " characters left");
        else
            $("#word-count").text(max_length + " characters left");
    });
});
/**/
/* i'll fix later /*
const message = document.querySelector('#message')
const messageMax = parseInt(message.getAttribute('maxlength'))
var counter = document.querySelector('#word-count').textContent
var countWord = function(event){
	var messageTemp = document.querySelector('#message')
	if (messageTemp.value.length <= messageMax) {
		counter = (messageMax - messageTemp.value.length) + ' characters available'
	} else {
		counter = (messageTemp.value.length - messageMax) + ' over the limit!'
	}
}
message.addEventListener('input', countWord)
message.addEventListener('keyup', countWord)
/**/
