let arrTeste = ['1']
arrTeste.push('items')           /* [ '1', 'items' ] */
arrTeste.push(...'items')        /*[ '1', 'i', 't', 'e', 'm', 's' ] */
arrTeste.pop()                    /* – extracts an item from the end, */
arrTeste.shift()                  /* – extracts an item from the beginning, */
arrTeste.unshift(...'items')      /* – adds items to the beginning. */
console.log(arrTeste);
/* ... three dots */


/* 1. Combine Arrays (Concatenate Arrays) */

var arr11 = ['two', 'three'];
var arr22 = ['one', ...arr11, 'four', 'five'];


// arr22 = ["one", "two", "three", "four", "five"]


/* 2. Copying Arrays

When we wanted a copy of an array, we used to have the Array.prototype.slice() method. But, you can do the same with the spread operator. */

var arr = [1,2,3];
var arr2 = [...arr];
// arr2 = [1,2,3]




/* 3. Calling Functions without Apply */
/* In ES5, to pass an array of two numbers to the doStuff() function, you often use the Function.prototype.apply() method as follows: */

function doStuff (x, y, z) {}
var args = [0, 1, 2];

// Call the function, passing args
doStuff.apply(null, args);

/* However, by using the spread operator, you can pass an array into the function. */

doStuff(...args);






/* 4. Destructuring Arrays */

/* You can use destructuring and the rest operator together to extract the information into variables as you'd like them: */

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }




/* 5. Function Arguments as Rest Parameters

ES6 also has three dots (...) which indicates a rest parameter that collects all remaining arguments of a function into an array.
 */

function f(a, b, ...args) {
  console.log(args);
}

f(1, 2, 3, 4, 5); // [3, 4, 5]

/* 6. Using Math Functions

Any function where spread is used as the argument can be used by functions that can accept any number of arguments. */

let numbers = [9, 4, 7, 1];
Math.min(...numbers); // 1

/* 7. Combining Two Objects

You can use the spread operator to combine two objects. This is an easy and cleaner way to do it. */

var carType = {
  model: 'Toyota',
  yom: '1995'
};

var carFuel = 'Petrol';

var carData = {
  ...carType,
  carFuel
}

console.log(carData);
// {
//  model: 'Toyota',
//  yom: '1995',
//  carFuel = 'Petrol'
// }

/* 
8. Separate a String into Separate Characters

You can use the spread operator to spread a string into separate characters.
 */

let chars = ['A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]