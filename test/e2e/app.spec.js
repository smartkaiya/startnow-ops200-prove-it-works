const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

const url = 'http://localhost:8888';

const nightmare = new Nightmare({show:true});

describe('End to End Tests', () => {
  let httpServer = null;
  let pageObject = null;


  before((done) => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  after((done) => {
    httpServer.close();
    done();
  });

  // This is where your code is going to go


  it('should contain a <h1> element for the page title', () => { 
    return pageObject
  
      .evaluate(() => document.querySelector('h1').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Mortgage Calculator');
     
      });
  });

  it('should have the correct page title', () =>
  pageObject
    .evaluate(() => document.querySelector('body').innerText)
    .then((text) => {
      expect(text).to.contain('Mortgage Calculator');
    })
);

it('should have an input element with the name of "principal"', () =>
pageObject
  .evaluate(() => document.querySelector('input[name=principal]'))
  .then(input => expect(input).to.exist)
);

it('should have an input element with the name of "interestRate"', () =>
pageObject
  .evaluate(() => document.querySelector('input[name=interestRate]'))
  .then(input => expect(input).to.exist)
);


it('should have an input element with the name of "loanTerm"', () =>
pageObject
  .evaluate(() => document.querySelector('input[name=loanTerm]'))
  .then(input => expect(input).to.exist)
);

  it('should have an input element with the name of "term"', () =>
      pageObject
        .evaluate(() => document.querySelector('select[name=period]'))
        .then(input => expect(input).to.exist)
    );

    it('should have a button with an id of "calculate"', () =>
pageObject
  .evaluate(() => document.querySelector('button[id=calculate]'))
  .then(button=> expect(button).to.exist)
);

it('should have a <p> element with an id of "output"', () =>
pageObject
  .evaluate(() => document.querySelector('p[id=output]'))
  .then(p=> expect(p).to.exist)
);

// it('should calculate monthly payment for 30yr mortgage', () => {
//     mortgage = new Mortgage(450000,4,30,30);
//     expect(mortgage.calcMonthPay()).to.equal('2148.37');
// });

    // it('should correctly calculate mortgage 1', () =>
    // pageObject
    //   .goto(url)
    //   .type('input[name=principal]', 450000)
    //   .type('input[name=interestRate]', 4)
    //   .select('select[name=loanTerm]', 30)
    //   .select('select[name=period]', 30)
    //   .click('button#calculate')
    //   .wait('#output')
    //   .evaluate(() => document.querySelector('#output').innerHTML)
    //   .then((outputText) => {
    //     expect(outputText).to.equal('$2148.37');
    //   })
    // ).timeout(6500);

  it('should correctly calculate mortgage ', () =>
  pageObject
  .wait()
  .type('input[name=principal]', 300000)
  .type('input[name=interestRate]', 3.75)
  .type('input[name=loanTerm]', 30)
  .select('select[name=period]', 12)
  .click('button#calculate')
  .wait('#output')
  .evaluate(() => document.querySelector('#output').innerText)
  .then((outputText) => {
     
    expect(outputText).to.equal('$1389.35');
  })
).timeout(6500);


// it('should correctly calculate mortgage 3', () =>
// pageObject
//   .goto(url)
//   .type('input[name=balance]', 670000)
//   .type('input[name=rate]', 4.25)
//   .select('select[name=term]', 15)
//   .click('button[name=submit]')
//   .wait('#output')
//   .evaluate(() => document.querySelector('#output').innerHTML)
//   .end()
//   .then(result => expect(result).to.contain('5040.27', 'Expected mortgage payment didn\'t match'))
// );



})
