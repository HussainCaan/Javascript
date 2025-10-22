function addtwonumbers(number1, number2){
    return Number(number1) + Number(number2);
}
// console.log(addtwonumbers(1, 2));
// console.log(addtwonumbers("1", 4)); // as 1 is string it takes 4 also as string
// // but what if
// console.log(addtwonumbers("a", 4)); // As a is given we will give 
let result = addtwonumbers(3,5);
// console.log(result)

function LoginUser(userName){
    if(userName === undefined || !userName){
        return "Username is required" // this will end this function with this return
    }
    return `${userName} just logged in`
}

// let message = LoginUser("Hussain");
let testifNoArgument = LoginUser();
// console.log(message)
console.log(testifNoArgument) // will return undefined