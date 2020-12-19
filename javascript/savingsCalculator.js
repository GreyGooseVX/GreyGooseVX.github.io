function calculate() {
	const startAmount = Number(document.getElementById("startAmount").value)
	const monthlySavings = Number(document.getElementById("monthlySavings").value)
	const yearlyInterest = Number(document.getElementById("yearlyInterest").value)
	const yearsToBeConsidered = Number(document.getElementById("yearsToBeConsidered").value)
	const interval = document.getElementById("interval").value
   const monthsToBeConsidered = yearsToBeConsidered * 12
   let currentMonth = 2


   class savingsRegister {
      constructor(currentMonth) {
        this.currentMonth = currentMonth;
        this.savingsAtEndOfMonth = startAmount + monthlySavings * currentMonth;
      }
    }
   let month1 = new savingsRegister (currentMonth)

	/*for (let i = 1; i <= monthsToBeConsidered; i++) {
		console.log(i)
	}*/
	document.getElementById("results").innerHTML = month1.savingsAtEndOfMonth
}
