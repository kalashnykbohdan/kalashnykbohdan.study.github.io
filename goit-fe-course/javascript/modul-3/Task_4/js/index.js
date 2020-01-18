'use strict';


// ==============================

// Task 4

function countTotalSalary(employees){
    let sum = 0;
    for (const key in employees) {
        sum += employees[key];
    }
    return sum;
}

console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400