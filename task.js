'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = 0; //дискриминант//
  let root = 0 ; //корни//
  let root1 = 0;
  let root2 = 0;

  d = b**2-4*a*c;
  if (d < 0) {
    arr = 0;
  } 

  if (d = 0) {
    root = -b/(2*a);
    arr.push(root);
  }

  if (d > 0) {
    root1 = (-b + Math.sqrt(d)/(2*a));
    root2 - (-b - Math.sqrt(d)/(2*a));
    arr.push(root1, root2);
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
