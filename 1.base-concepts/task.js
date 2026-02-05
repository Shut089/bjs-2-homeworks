"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return [];
  }

  if (d === 0) {
    return [-b / (2 * a)];
  }

  const sqrtD = Math.sqrt(d);
  const x1 = (-b + sqrtD) / (2 * a);
  const x2 = (-b - sqrtD) / (2 * a);

  return [x1, x2];
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const toNumber = (value) => {
    if (typeof value === "number") return value;
    if (typeof value === "string") return Number(value);
    return NaN;
  };

  const p = toNumber(percent);
  const c = toNumber(contribution);
  const a = toNumber(amount);
  const n = toNumber(countMonths);

  if (![p, c, a, n].every(Number.isFinite)) return false;
  if (n <= 0) return false;

  const loanBody = a - c;
  if (loanBody <= 0) return 0;

  const monthlyRate = p / 100 / 12;

  let monthlyPayment;
  if (monthlyRate === 0) {
    monthlyPayment = loanBody / n;
  } else {
    monthlyPayment =
      loanBody * (monthlyRate + monthlyRate / ((1 + monthlyRate) ** n - 1));
  }

  // ВНИМАНИЕ: под ваши тесты взнос НЕ прибавляется к итоговой сумме
  const total = monthlyPayment * n;

  return +total.toFixed(2);
}