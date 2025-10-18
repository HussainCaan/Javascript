// Stack (primitive), Heap (non-primitive) memory allocation in JavaScript
let num1 = 10; // stored in stack memory
let num2 = num1; // copied value from num1 to num2 (stack memory)
console.log(num1); // 10
console.log(num2); // 10
num2 = 20; // changing num2 does not affect num1
console.log(num1); // 10
console.log(num2); // 20

let obj1 = { name: "Hussain" , email:"hussain@.com"}; // stored in heap memory
let obj2 = obj1; // copied reference from obj1 to obj2 (stack memory)
console.log(obj1.name); // Hussain
console.log(obj2.name); // Hussain
obj2.name = "Muhammad"; // changing obj2 affects obj1
console.log(obj1.name); // Muhammad
console.log(obj2.name); // Muhammad

// To create a copy of an object without reference, we can use Object.assign() or spread operator to create a new object
let obj3 = Object.assign({}, obj1); // creates a shallow copy of obj1
obj3.name = "Ali";  // changing obj3 does not affect obj1
console.log(obj1.name); // Muhammad
console.log(obj3.name); // Ali
