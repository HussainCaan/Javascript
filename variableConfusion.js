let score = "33" // String but can be converted to number
let score2 = "44abc"  // String but cannot be converted to number 


console.log(typeof score)

let ValueInNumer = Number(score)

console.log(typeof ValueInNumer)

let ValueInNumer2 = Number(score2)

console.log(ValueInNumer2)  // NaN (Not a Number) but still javascript considers it as number type
console.log(typeof ValueInNumer2)  // number