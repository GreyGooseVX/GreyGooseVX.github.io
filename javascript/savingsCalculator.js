function calculateButton() {
	const startAmount = Number(document.getElementById("startAmount").value)
	const monthlySavings = Number(document.getElementById("monthlySavings").value)
	const yearlyInterest = Number(document.getElementById("yearlyInterest").value)
	const monthlyInterestMultipler = Math.pow(yearlyInterest + 1, 1 / 12)
	const yearsToBeConsidered = Number(document.getElementById("yearsToBeConsidered").value)
	const monthsToBeConsidered = yearsToBeConsidered * 12

	class Month {
		constructor(currentMonth) {
			if (currentMonth > 0) {
				this.savingsAfterXMonths =
					(months[currentMonth - 1].savingsAfterXMonths + monthlySavings) * monthlyInterestMultipler
			} else {
				this.savingsAfterXMonths = startAmount
			}
		}
	}

	let months = []
	for (let i = 0; i <= monthsToBeConsidered; i++) {
		months[i] = new Month(i)
	}
	for (let i = 0; i <= monthsToBeConsidered; i++) {
		console.log(`savings afer ${i} month(s) : `)
		console.log(Math.round(months[i].savingsAfterXMonths))
	}
	document.getElementById("results").innerHTML = Math.round(months[monthsToBeConsidered].savingsAfterXMonths)
}
