function convertButton() {
	let ydk = document.getElementById("ydk").value
	const confHeaders = "#[2SneakCardPool]\n!2SneakCardPool\n$whitelist\n"
	ydk = ydk.replace(/#main\n|#extra\n|!side\n/gi, "")

	const cardpoolArray = ["a", "b", "c"]
	cardpoolArray.foreach((element) => console.log(element))

	const array1 = ["a", "b", "c"]
	array1.foreach((element) => console.log(element))
}
