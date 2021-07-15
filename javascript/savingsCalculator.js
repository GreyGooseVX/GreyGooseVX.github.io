document.getElementById("calculateOnSubmit").onsubmit = (event) => {
	event.preventDefault()
	calculateOnSubmit()
}

function calculateOnSubmit() {
	const startAmount = Number(document.getElementById("startAmount").value)
	const monthlySavings = Number(document.getElementById("monthlySavings").value)
	const effectiveYearlyReturns =
		Number(document.getElementById("yearlyReturns").value) - Number(document.getElementById("yearlyInflation").value)
	const monthlyReturnsMultipler = Math.pow(effectiveYearlyReturns + 1, 1 / 12)
	const yearsToBeConsidered = Number(document.getElementById("yearsToBeConsidered").value)
	const monthsToBeConsidered = yearsToBeConsidered * 12
	const outputInterval = Number(document.getElementById("outputInterval").value)

	class Month {
		constructor(currentMonth) {
			if (currentMonth > 0) {
				this.savingsAfterXMonths =
					(months[currentMonth - 1].savingsAfterXMonths + monthlySavings) * monthlyReturnsMultipler
			} else {
				this.savingsAfterXMonths = startAmount
			}
			this.monthlyReturnsAfterXMonths = this.savingsAfterXMonths * (monthlyReturnsMultipler - 1)
		}
	}

	let months = []
	for (let i = 0; i <= monthsToBeConsidered; i++) {
		months[i] = new Month(i)
	}
	let results = document.getElementById("results")
	results.innerHTML = ""
	let newLi = document.createElement("div")
	newLi.className += "list-group-item list-group-item-action"
	newLi.innerHTML = `effective yearly returns : ${effectiveYearlyReturns}`
	results.appendChild(newLi)
	for (let i = 0; i <= monthsToBeConsidered; i += outputInterval) {
		let newLi = document.createElement("div")
		newLi.className += "list-group-item list-group-item-action"
		newLi.innerHTML = `savings after ${i / 12} year(s) : ${Math.round(months[i].savingsAfterXMonths)}
		<br> monthly returns after ${i / 12} year(s) : ${Math.round(months[i].monthlyReturnsAfterXMonths)}`
		results.appendChild(newLi)
	}
}
