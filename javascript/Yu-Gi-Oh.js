const sneakConfHeaders = "#[2SneakCardPool]\n!2SneakCardPool\n$whitelist\n"
const preXYZConfHeaders = "#[1PreXYZ_Custom]\n!1PreXYZ_Custom\n$whitelist\n"
let cardpoolMap = new Map()
let convertedYdk = ""

function sneakPeekConverterButton() {
	let ydk = document.getElementById("ydk").value
	ydk = ydk.replace(/#main|#extra|!side/gi, "")
	ydk = ydk.replace(/(^[ \t]*\n)/gm, "")
	ydk = ydk.trim()
	let cardpoolArray = ydk.split("\n")
	cardpoolArray.forEach(convertListToKeyValuePair)
	cardpoolMap.forEach(writeKeyValuePairToTextarea)
	let conf = sneakConfHeaders + convertedYdk
	conf = conf.trim()
	document.getElementById("sneakConf").innerHTML = conf
}
function bannedListConverterButton() {
	let googleSpreadsheetsBannedList = document.getElementById("googleSpreadsheetsBannedList").value
	googleSpreadsheetsBannedList = googleSpreadsheetsBannedList.replace(/passcode	custom	name\n/gi, "")
	googleSpreadsheetsBannedList = googleSpreadsheetsBannedList.replace(/	/gi, " ")
	let conf = preXYZConfHeaders + googleSpreadsheetsBannedList
	conf = conf.trim()
	document.getElementById("bannedListConf").innerHTML = conf
}
function convertListToKeyValuePair(currentCard) {
	if (cardpoolMap.has(currentCard) == true) {
		if (cardpoolMap.get(currentCard) < 3) {
			cardpoolMap.set(currentCard, cardpoolMap.get(currentCard) + 1)
		}
	} else {
		cardpoolMap.set(currentCard, 1)
	}
}
function writeKeyValuePairToTextarea(value, key) {
	convertedYdk += key + " " + value + " cards" + "\n"
}
