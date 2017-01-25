'use strict';

var wc = document.querySelector('#word-count');
var wordCount = function wordCount(e) {
	var box = e.target;
	var len = box.value.length;
	var maxLen = parseInt(box.getAttribute('maxlength'));

	if (len <= maxLen) {
		wc.innerText = maxLen - len + ' character' + (maxLen - len == 1 ? '' : 's') + ' remaining.';
	} else {
		wc.innerText = len - maxLen + ' character' + (len - maxLen == 1 ? '' : 's') + ' over the ' + maxLen + ' character limit.';
	}
};

document.querySelector('#message').addEventListener('input', wordCount);