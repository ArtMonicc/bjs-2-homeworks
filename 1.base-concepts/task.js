"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    //return arr;
  } else if (d == 0) {
    arr[0] = -b / (2 * a);
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false;
  }
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let amountPerMonth = S * (P + P / ((1 + P) ** countMonths - 1));
  let totalAmount = amountPerMonth * countMonths;
  return Number(totalAmount.toFixed(2));
}
calculateTotalMortgage(10, 0, 10000, 36);
testCase;
