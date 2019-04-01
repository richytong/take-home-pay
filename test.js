const assert = require('assert')
const takeHomePay = require('.')

describe('calculateFinalIncome', () => {
  it('calcs 134283.5 for input of 170000', (done) => {
    const myFinalSalary = takeHomePay(170000)
    assert.strictEqual(myFinalSalary, 134283.5)
    done()
  })
})
