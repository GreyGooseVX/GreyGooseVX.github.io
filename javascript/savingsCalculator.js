document.getElementById("calculateOnSubmit").onsubmit = function (event) {
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
	for (let i = 0; i <= monthsToBeConsidered; i += 6) {
		let newLi = document.createElement("li")
		newLi.innerHTML = `savings afer ${i / 12} year(s) : ${Math.round(months[i].savingsAfterXMonths)}`
		results.appendChild(newLi)

		let newLi2 = document.createElement("li")
		newLi2.innerHTML = `monthly interest afer ${i / 12} year(s) : ${Math.round(months[i].monthlyInterestAfterXMonths)}`
		results.appendChild(newLi2)
	}
}
