'use strict';

function solveEquation(a, b, c) {
  const discriminant = (b ** 2) - (4 * a * c);

  if (discriminant < 0) {
    return [];
  }

  if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  }

  const sqrtDiscriminant = Math.sqrt(discriminant);
  const firstRoot = (-b + sqrtDiscriminant) / (2 * a);
  const secondRoot = (-b - sqrtDiscriminant) / (2 * a);

  return [firstRoot, secondRoot];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const convertToNumber = (value) => {
    if (typeof value === 'number') {
      return value;
    }

    if (typeof value === 'string') {
      return Number(value);
    }

    return NaN;
  };

  const percentValue = convertToNumber(percent);
  const contributionValue = convertToNumber(contribution);
  const amountValue = convertToNumber(amount);
  const monthsValue = convertToNumber(countMonths);

  const isValid = [percentValue, contributionValue, amountValue, monthsValue]
    .every(Number.isFinite);

  if (!isValid || monthsValue <= 0) {
    return false;
  }

  const loanBody = amountValue - contributionValue;

  if (loanBody <= 0) {
    return 0;
  }

  const monthlyRate = (percentValue / 100) / 12;

  let monthlyPayment;

  if (monthlyRate === 0) {
    monthlyPayment = loanBody / monthsValue;
  } else {
    monthlyPayment = loanBody * (
      monthlyRate + (monthlyRate / (((1 + monthlyRate) ** monthsValue) - 1))
    );
  }

  const totalPayment = monthlyPayment * monthsValue;

  return Number(totalPayment.toFixed(2));
}