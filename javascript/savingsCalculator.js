document.getElementById("calculateOnSubmit").onsubmit = function (event) {
	event.preventDefault()
	calculateOnSubmit()
	return false
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
		}
	}

	let months = []
	for (let i = 0; i <= monthsToBeConsidered; i++) {
		months[i] = new Month(i)
	}
 	document.getElementById("results").innerHTML=""
	for (let i = 0; i <= monthsToBeConsidered; i++) {
		let newLi = document.createElement("li")
		newLi.innerHTML = `savings afer ${i} month(s) : ${Math.round(months[i].savingsAfterXMonths)}`
		document.getElementById("results").appendChild(newLi)
	}
}
