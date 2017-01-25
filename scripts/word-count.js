'use strict';

var wc = document.querySelector('#word-count');
var wordCount = function wordCount(e) {
	var box = e.target;
	var len = box.value.length;
	var maxLen = parseInt(box.getAttribute('maxlength'));

	if (len < maxLen) {
		wc.innerText = maxLen - len + ' characters remaining.';
	} else {
		wc.innerText = len - maxLen + ' characters over the ' + maxLen + ' character limit.';
	}
};

document.querySelector('#message').addEventListener('input', wordCount);