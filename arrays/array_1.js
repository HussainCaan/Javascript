let myarray = [10, 20, 30, 40, 50];
// Also
let newarray = new Array(10, 20, 30, 40, 50); // Using Array constructor to create an array and it will store it in heap memory

// console.log(myarray[2]); // Accessing the third element (index 2) which is 30

myarray[4] = 60; // Modifying the fifth element (index 4) to 60
// console.log(myarray); // Output the modified array

// In javascript, arrays are dynamic and can hold elements of different types
myarray[5] = "Hello"; // Adding a string element at index 5
// console.log(myarray); // Output the array with mixed types

// Also when we do copying in javascript it will copy the reference not the value (Shallow copy)
let myarray2 = myarray;
myarray2[3] = "World"; // Modifying the fourth element (index 3) in myarray2 to "World"
// console.log(myarray); // Output the original array to see the change

// Javascript Methods for arrays
let fruits = ["Apple", "Banana", "Cherry"];
let order = [1, 2, 3];
// console.log(fruits.length); // Get the length of the array

fruits.push("Date"); // Add an element to the end of the array
// console.log(fruits); // Output the array after push
fruits.push("Elderberry", "Fig"); // Add multiple elements to the end of the array
// console.log(fruits); // Output the array after multiple pushes
fruits.pop(); // Remove the last element from the array
// console.log(fruits); // Output the array after pop

// Quetionaries Methods

let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(9)); // Check if 9 is in the array (true) , return type is boolean
// console.log(arr.indexOf(4)); // Get the index of 4 in the array (3), return type is number
// console.log(arr.indexOf(9)); // Get the index of 9 in the array (-1, not found), return type is number

let newarrr = arr.join(" "); // Join the array elements into a string with " " as separator
// console.log(newarrr); // Output the joined string
// console.log(typeof newarrr); // Output the type of newarrr which is string
console.log("A ", arr)
let myn1 = arr.slice(1, 4); // Slice the array from index 1 to 4 (not including 4)
console.log("B ",myn1); // Output the sliced array
// console.log(typeof myn1); // Output the type of myn1 which is array
let myn2 = arr.splice(1, 4); // Splice the array from index 1, remove 4 elements and return the removed elements also it includes the last element also for example here it will remove 2,3,4,5 (5 is on index 4)
console.log("C ",myn2); // Output the spliced elements
console.log("D ",arr); // Output the modified original array after splice