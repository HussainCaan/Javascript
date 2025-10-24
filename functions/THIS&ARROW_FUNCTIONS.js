const user = {
    username: "Hussian",
    price : 999,
    WelcomeMessage: function() {
        console.log(`${this.username} welcome to website`)
        console.log(this) // gives current values of the object
    }
}

// user.WelcomeMessage // nothing happened with this 
// user.WelcomeMessage()
// user.username = "Hassan"
// user.WelcomeMessage() // user name changed to Hassan

// console.log(this) // gives empty parenthesis because there is nothing in global object and browser global object is window object 

function one(){
    let username = "hussain"
    console.log(this.username)// this keyword can't be used in functions only can use in objects
}
// one()

const chai = function (){ // another function creation syntax
    let username = "Hussain"
    console.log(this.username) // this also won't work and give undefined
}

// chai()

// Arrow function syntax
const chai2 = () => {
    let username = "Hussain"
    console.log(this) // this also won't work and give undefined this gives empty parenthesis

}
chai2()


// Arrow functions
// const addtwo =  (num1, num2) => {  // Arrow function syntax
//     return num1 + num2;
// }
// console.log(3,5);

// But arrow function help to create a function in single line like for example -------------------------------------------
const addtwo = (num1, num2) =>  result = num1 + num2 // this will know that we are returning sum of num1 and num2 we don't have to write return keyword in single line function this is the arrow function advantage this is also called implicit return functions when we don't use 'Return keyword' explecitly
// console.log(addtwo(3,5)) // if we use curly braces we have to write return keyword while if no curly brackets we don't have to write return keyword

// Also if we want to return an object from this implicit return function we have to wrap the object around by small brackets (parenthesis)
const object_return = () =>  ({userName : "Hussain"})

console.log(object_return()) 