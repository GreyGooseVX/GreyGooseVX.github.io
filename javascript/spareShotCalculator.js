document.getElementById("calculateOnSubmit").onsubmit = (event) => {
	event.preventDefault()
	calculateOnSubmit()
}

function calculateOnSubmit() {
	const magazineSize = document.getElementById("magazineSize").value
	const spareShotProbability = document.getElementById("spareShotProbability").value
	const testRuns = document.getElementById("testRuns").value
	const effectiveMagazineSize = calculateEffectiveMagazineSize(spareShotProbability, magazineSize, testRuns)
	document.getElementById("result").innerHTML = effectiveMagazineSize
}
function calculateEffectiveMagazineSize(spareShotProbability, magazineSize, testRuns) {
	let totalShotsFired = 0
	for (let i = 1; i <= testRuns; i++) {
		for (let j = 1; j <= magazineSize; ) {
			totalShotsFired++
			let spareShotRNG = Math.random()
			if (spareShotRNG > spareShotProbability) j++
		}
	}
	return totalShotsFired / testRuns
}
