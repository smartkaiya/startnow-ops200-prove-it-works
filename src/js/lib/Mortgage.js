module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this.principal = principal;
      this.interest = interest;
      this.term = term;
      this.period = period;
    }
  
    calcMonthPay() {
      const monthlyInterestRate = (this.interest / 100) / this.period
      const numberOfPayments = this.term * this.period
      const compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)
      const interestQuotient = (monthlyInterestRate * compoundedInterestRate) / ( (Math.pow((1 + monthlyInterestRate), numberOfPayments)) - 1)
      const monthlyPayment = this.principal * interestQuotient
      console.log(monthlyPayment)
      return monthlyPayment.toFixed(2)
    }
  }