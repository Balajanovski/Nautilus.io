var wc = document.querySelector('#word-count')
var wordCount = e => {
	let box = e.target
	let len = box.value.length
	let maxLen = parseInt(box.getAttribute('maxlength'))

	if (len <= maxLen){
		wc.innerText = `${maxLen - len} character${(maxLen - len) == 1 ? '' : 's'} remaining.`
	} else {
		wc.innerText = `${len - maxLen} character${(len - maxLen) == 1 ? '' : 's'} over the ${maxLen} character limit.`
	}
}

document.querySelector('#message').addEventListener('input', wordCount)



