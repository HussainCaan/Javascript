let marvel_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
// console.log("Original Marvel Heroes Array: ", marvel_heroes);
let DC_heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];
// console.log("Original DC Heroes Array: ", DC_heroes);

// marvel_heroes.push(DC_heroes) // it will add the DC_heroes array as an element in the marvel_heroes array will not merge both arrays
// console.log("After Pushing DC Heroes into Marvel Heroes: ", marvel_heroes);

// To merge both arrays we can use concat method
// let all_heroes = marvel_heroes.concat(DC_heroes); // it will merge both arrays into a new array
// console.log("All Heroes after merging both arrays using concat: ", all_heroes);

// But instead concat there is a more easy way which is called spread operator
let new_heroes = [...marvel_heroes, ...DC_heroes]; // it's easy because in concat we can give only one array but here we can give multiple arrays with ... and array name
// console.log(new_heroes)

let anotherarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
let realarray = anotherarray.flat(Infinity) // flat method is used to flatten the array
// console.log(realarray)
// console.log(realarray.sort())

console.log(Array.isArray("Hussain"))
console.log(Array.from({name: "hussain"})) // Here we have to tell that from what we want to make an array from keys or values of an object

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;
console.log(Array.of(score1, score2, score3, score4, score5)); // .of create an array from the given values
