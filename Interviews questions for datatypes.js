// On the basis of how we store data and how we can access it, there are two main types of data structures: Primitive and Non-primitive data types.
// Primitive data types are the most are call by value. They are not objects and do not have methods. Examples of primitive data types include:
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol  // introduced in ES6 to create unique identifiers for objects
// 7. BigInt  // introduced in ES11 to represent integers with arbitrary precision

// Non-primitive data types are call by reference. They are objects and have methods. Examples of non-primitive data types include:
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp

//Javascript is dynamically typed language, which means we don't need to declare the data type of a variable explicitly. The data type is determined automatically based on the value assigned to the variable.

let array = [1,'Hussain',true, {name: 'Hussain', age: 23}]; // array is non-primitive data type
console.log(array[3].name)
console.log(array[3].age)
console.log(typeof array) 
