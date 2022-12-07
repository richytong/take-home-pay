const assert = require('assert')
const takeHomePay = require('.')

describe('calculateFinalIncome', () => {
  it('calculates salary after taxes', done => {
    const initialSalary = 170000
    const myFinalSalary = takeHomePay(initialSalary)
    assert(myFinalSalary < 170000)
    done()
  })
})
