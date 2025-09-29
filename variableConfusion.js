let score = "33" // String but can be converted to number
let score2 = "44abc"  // String but cannot be converted to number 


console.log(typeof score)

let ValueInNumer = Number(score)

console.log(typeof ValueInNumer)

let ValueInNumer2 = Number(score2)

console.log(ValueInNumer2)  // NaN (Not a Number) but still javascript considers it as number type
console.log(typeof ValueInNumer2)  // number


// 33 -=> 33
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let loggedIn = "1"  // what does it give when converted to boolean

let loggedIn2 = "0"  // what does it give when converted to boolean

console.log(Boolean(loggedIn))  // true
console.log(Boolean(loggedIn2))  // true

// In boolean conversion, all the values are considered true except "", 0, null, undefined, NaN