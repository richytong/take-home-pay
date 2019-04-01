const TAX_BRACKETS = [
  [0.1, 0],
  [0.12, 9700],
  [0.22, 39475],
  [0.24, 84200],
  [0.32, 160725],
  [0.35, 204100],
  [0.37, 510300],
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

module.exports = calculateFinalIncome
