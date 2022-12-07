const TAX_BRACKETS = [
  [0.1, 0],
  [0.12, 10275],
  [0.22, 41775],
  [0.24, 89075],
  [0.32, 170050],
  [0.35, 215950],
  [0.37, 539900],
]

const salariesAndBracketAmounts = []
TAX_BRACKETS.forEach((entry, idx) => {
  if (idx === 0) return
  const prevEntry = TAX_BRACKETS[idx - 1]
  const [rate, lowerCutoff] = prevEntry
  const [nextRate, upperCutoff] = entry
  const amount = rate * (upperCutoff - lowerCutoff)
  salariesAndBracketAmounts.push([upperCutoff, amount, nextRate])
})

const calculateFinalIncome = (salary) => {
  let subBracketTaxOwed = 0
  let prevCutoff
  let myRate
  salariesAndBracketAmounts.forEach((entry, idx) => {
    const [salaryCutoff, bracketAmountOwed, rate] = entry
    if (salaryCutoff > salary) return
    subBracketTaxOwed += bracketAmountOwed
    prevCutoff = salaryCutoff
    myRate = rate
  })
  const myBracketTaxOwed = (salary - prevCutoff) * myRate
  return salary - subBracketTaxOwed - myBracketTaxOwed
}

if (process.argv[1] == __filename) {
  const finalIncome = calculateFinalIncome(process.argv[2]) // node index.js 45000
  console.log(finalIncome)
}

module.exports = calculateFinalIncome
