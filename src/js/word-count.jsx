var wc = document.querySelector('#word-count')
var wordCount = e => {
	let box = e.target
	let len = box.value.length
	let maxLen = parseInt(box.getAttribute('maxlength'))

	if (len < maxLen){
		wc.innerText = `${maxLen - len} characters remaining.`
	} else {
		wc.innerText = `${len - maxLen} characters over the ${maxLen} character limit.`
	}
}

document.querySelector('#message').addEventListener('input', wordCount)



