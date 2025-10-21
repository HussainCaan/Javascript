// Object Literals

const mysym = Symbol("id")

const user = {
    name: "Hussain",
    age : 24,
    [mysym]: "22p9270", // if we want to use it as symbol we have to write it in square brackets
    "last Name": "Khan", // this can't be access through dot notation can only be access through bracket notation
    city: "Mardan",
    country: "Pakistan",
    email: "p229270@pwr.nu.edu.pk",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    greeting(){
        console.log("Hello " + this.name)
        return "Greeting completed" // this was added after the below console.log(user.greeting()) gave undefined
    }
}

// console.log(user.email)
// console.log(user["email"])
// console.log(user.lastname) // Undefined result
// console.log(user["last Name"]) // Khan
// console.log(user[mysym]) 
// console.log(typeof user.mysym) // it's type is string not symbol and we want symbol as it's datatype when we don't use brackets arround it in object
// console.log(typeof user[mysym]) 
// console.log(Object.getOwnPropertySymbols(user))

// Object.freeze(user) // this will only freeze the object from further modification of its properties but it won't give any errors if we try to change it but just won't propagate it
// user.email = "Hussaincaan@pwr.nu.edu.pk"
// console.log(user)// Email not changed still p229270@pwr.nu.edu.pk

// user.greeting = function(){
//     console.log("Hello " + this.name)
// }

user.greeting()
console.log(user.greeting())// this will print Hello Hussain and return undefined because greeting function is not returning anything but when we return something in function it will return that value