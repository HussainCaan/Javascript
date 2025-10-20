// Task 1: To replace HULK with doctor strange
// let marvel_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
// let hulk_index =  marvel_heroes.indexOf("Hulk")

// marvel_heroes[hulk_index]= "Doctor Strange"

// console.log(marvel_heroes)


// Task 2: to create 2 array from concat and spread operator and show both are same
let marvel_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
let DC_heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];
let concat_array = marvel_heroes.concat(DC_heroes)
let dot_array = [...marvel_heroes, ...DC_heroes]
// console.log(concat_array)
// console.log(dot_array)
// console.log(JSON.stringify(concat_array))
// console.log(JSON.stringify(dot_array))


// Task 3: Start from fruits, perform: push, unshift, pop, shift; log array after each step.
let fruits = ["Apple", "Banana", "Cherry"];
let pop_value = fruits.pop()
fruits.push("Date")
fruits.shift()
// console.log(fruits)
fruits.unshift("Elderberry")
// console.log(fruits)

// Task 4: Show slice produces a new array while splice mutates original; write console logs demonstrating both.
let numbers = [1, 2, 3, 4, 5,6,7];
let sliced_array = numbers.slice(1,4) //  orignal array is not changed also the range is not inclusive
// console.log("Orignal array ",numbers)
// console.log("slice array ",sliced_array)
// let spliced_array = numbers.splice(1,4) // orignal array is changed also the range is inclusive
// console.log("Orignal array after splicing ",numbers)  // orignal array is modified and   
// console.log("spliced array ",spliced_array)


// Task 5: Use Array.isArray on several values, Array.from on an object (keys or values), and Array.of on mixed values.
let obj = {name: "hussain", age: 24}
let arr = Array.from(Object.keys(obj))
let arr2 = Array.from(Object.values(obj))
console.log(arr)
console.log(arr2)