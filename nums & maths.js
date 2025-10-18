let value = 100
console.log(value)  // 100
console.log(typeof value)  // number

let balance = new Number(100); // creates a Number object which will store in heap memory because of new keyword
console.log(balance)  // [Number: 100]
console.log(typeof balance)  // object

console.log(value.toString().length)
console.log(balance.toFixed(2)) // to convert number to string with fixed decimal points

let otherBalance = Number(250.9678) // creates a Number which will store in stack memory (because no new keyword is used)
console.log(otherBalance.toPrecision(3)) // Value can be between 1 to 21 and return string representing the number to specified precision

let hundred = 1000000000
console.log(hundred.toLocaleString('en-PK')) // 100,000  // adds commas according to locale

// Maths functions
console.log(Math.abs(-50)) // 50
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.7)) // 4
console.log(Math.round(4.5)) // 5
console.log(Math.round(4.4)) // 4
console.log(Math.max(1, 4, 2, 8, 3)) // 8
console.log(Math.min(1, 4, 2, 8, 3)) // 1
console.log(Math.pow(2, 3)) // 8
console.log(Math.sqrt(64)) // 8
console.log(Math.random().toFixed(2)) // random number between 0 and 1
console.log((Math.random().toFixed(2) * 100)) // random number between 0 and 100
console.log(Math.floor(Math.random() * 100) + 1) // random number between 1 and 100
console.log(Math.sin(0)) // 0
console.log(Math.cos(0)) // 1
console.log(Math.log(1)) // 0
console.log(Math.log10(100)) // 2 // log base 10 of 100 is 2

let min = 10
let max = 50
console.log(Math.floor(Math.random() * (max - min + 1) + min )) // random number between min and max (both inclusive)

// Remember that Math object methods are static methods and we cannot create instance of Math object
// let mathObj = new Math()  // this will give error