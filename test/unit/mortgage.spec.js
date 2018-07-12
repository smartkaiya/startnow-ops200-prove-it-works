const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortage = null;

    beforeEach(() => {
        mortgage = new Mortgage();
});

it('should have a calcMonthPay function', () => {
    expect(mortgage.calcMonthPay).to.exist;
 });

 it('should calculate monthly payment for 30yr mortgage', () => {
    mortgage = new Mortgage(450000,4,30,12);
    expect(mortgage.calcMonthPay()).to.equal('2148.37');
});

it('should calculate monthly payment for 15yr mortgage', () => {
    mortgage = new Mortgage(450000,4,15,12);
    expect(mortgage.calcMonthPay()).to.equal('3328.60');
});


});