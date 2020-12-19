function convertButton() {
	let ydk = document.getElementById("ydk").value
	const confHeaders = "#[2SneakCardPool]\n!2SneakCardPool\n$whitelist\n"
	ydk = ydk.replace(/#main|#extra|!side/gi, "")
	ydk = ydk.replace(/(^[ \t]*\n)/gm, "")
	ydk = ydk.trim()
	let cardpoolArray = ydk.split("\n")
	let cardpoolMap = new Map()
	let convertedYdk = ""
	cardpoolArray.forEach(convert)
	cardpoolMap.forEach(logMap)
	let conf = confHeaders + convertedYdk
	//const conf = ydk
	conf = conf.trim()
	document.getElementById("conf").innerHTML = conf

	function convert(currentCard) {
		if (cardpoolMap.has(currentCard) == true) {
			if (cardpoolMap.get(currentCard) < 3) {
				cardpoolMap.set(currentCard, cardpoolMap.get(currentCard) + 1)
			}
		} else {
			cardpoolMap.set(currentCard, 1)
		}
	}

	function logMap(value, key) {
		convertedYdk += key + " " + value + "\n"
	}
}
