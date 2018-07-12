const expect = require('chai').expect;
const Calculator = require('../../src/js/lib/Calculator');

describe('Calculator', () => {
  let calculator = null;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should have an add function', () => {
    expect(calculator.add).to.exist;
  });

  it('should add 2 + 2 together correctly', () => {
    expect(calculator.add(2, 2)).to.equal(4);
  });


  it('should have an subtract function', () => {
    expect(calculator.subtract).to.exist;
  });

  it('should subtract 4 - 2 together correctly', () => {
    expect(calculator.subtract(4, 2)).to.equal(2);
  });

  it('should have an multiply function', () => {
    expect(calculator.multiply).to.exist;
  });

  it('should multiply 4 * 2 together correctly', () => {
    expect(calculator.multiply(4, 2)).to.equal(8);
  });

it('should have an divide function', () => {
    expect(calculator.divide).to.exist;
  });

  it('should divide 4 / 2 together correctly', () => {
    expect(calculator.divide(4, 2)).to.equal(2);
  });



});