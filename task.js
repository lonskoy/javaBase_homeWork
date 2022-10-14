'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let root = 0 ; //корни//
  let root1 = 0;
  let root2 = 0;

  let d = b**2-4*a*c; //Дискрименант//

  if (d === 0) {
    root = -b/(2*a);
    arr.push(root);
  }

  if (d > 0) {
    root1 = (-b - Math.sqrt(d)/(2*a));
    root2 = (-b + Math.sqrt(d)/(2*a));
    arr.push(root1.toFixed(2), root2.toFixed(2));
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  let yearCredit = date.getFullYear(); //До какого года кредит//
  let monthCredit = date.getMonth();   //До какого месяца кредит//
  var datObj = new Date(); 
  let yearToDay = datObj.getFullYear(); //Текущий год//
  let monthToDay = datObj.getMonth();   //Текущий месяц//
  let yearComparison = yearCredit - yearToDay; //Вычисление разницы в годах//
  let creditTime = yearComparison * 12 - monthToDay + monthCredit; //Вычисление времени кредита в месяцах//
  let creditBody = amount - contribution; //Вычисление тела кредита//
  let percentMonth = percent / 12; //Вычисление процентной ставки за месяц//
  let totalAmount = creditBody + (((creditBody/100)*percentMonth)*creditTime); // Не понял формулу из примера, написал свою//

  return totalAmount.toFixed(2); //За чем то приводим число к двузначному после запятой, хотя оно всегда будет целым...//
}
