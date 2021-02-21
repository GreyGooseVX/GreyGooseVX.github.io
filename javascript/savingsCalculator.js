document.getElementById("calculateOnSubmit").onsubmit = (event) => {
	event.preventDefault()
	calculateOnSubmit()
}

function calculateOnSubmit() {
	const startAmount = Number(document.getElementById("startAmount").value)
	const monthlySavings = Number(document.getElementById("monthlySavings").value)
	const yearlyInterest = Number(document.getElementById("yearlyInterest").value)
	const monthlyInterestMultipler = Math.pow(yearlyInterest + 1, 1 / 12)
	const yearsToBeConsidered = Number(document.getElementById("yearsToBeConsidered").value)
	const monthsToBeConsidered = yearsToBeConsidered * 12
	const outputInterval = Number(document.getElementById("outputInterval").value)

	class Month {
		constructor(currentMonth) {
			if (currentMonth > 0) {
				this.savingsAfterXMonths =
					(months[currentMonth - 1].savingsAfterXMonths + monthlySavings) * monthlyInterestMultipler
			} else {
				this.savingsAfterXMonths = startAmount
			}
			this.monthlyInterestAfterXMonths = this.savingsAfterXMonths * (monthlyInterestMultipler - 1)
		}
	}

	let months = []
	for (let i = 0; i <= monthsToBeConsidered; i++) {
		months[i] = new Month(i)
	}
	let results = document.getElementById("results")
	results.innerHTML = ""
	for (let i = 0; i <= monthsToBeConsidered; i += outputInterval) {
		let newLi = document.createElement("div")
		newLi.className += "list-group-item list-group-item-action"
		newLi.innerHTML = `savings afer ${i / 12} year(s) : ${Math.round(months[i].savingsAfterXMonths)}
		<br> monthly interest afer ${i / 12} year(s) : ${Math.round(months[i].monthlyInterestAfterXMonths)}`
		results.appendChild(newLi)
	}
}
