let str1 = " Hussain"
let str2 = "Muhammad"
let str3 = str2 + str1
console.log(str3)  // Muhammad Hussain

// But if we do this
console.log("1" + 2) 
// or
console.log(1 + "2") // both gives 12 as output 
// or
console.log("1" + 2 + 2) // output =  122

// or if 
console.log(1 + 2 + "2") // output =  32

// lets see why this happens
// so in first one case "1" + 2 if first values is string then it converts the second value to string and concatenate them
// in second case 1 + "2" same happens first value is number but second is string so it converts first to string and concatenate them
// in third case "1" + 2 + 2 first value is string so it converts second value to string and concatenate them then again the result is string so it converts the third value to string and concatenate them
// in fourth case 1 + 2 + "2" first two values are number so it adds them then the result is number but the third value is string so it converts the result to string and concatenate them



// some tricky conversions
console.log("4" - "2")  // why is that 2 ? because - operator is only for numbers so it converts both the strings to numbers and then subtracts them
console.log("4" * "2")  // why is that 8 ? because * operator is only for numbers so it converts both the strings to numbers and then multiply them
console.log("4" / "2")  // why is that 2 ? because / operator is only for numbers so it converts both the strings to numbers and then divides them
// also
console.log("4" / "2abc")  // why is that NaN ? because / operator is only for numbers so it converts both the strings to numbers and then divides them but "2abc" cannot be converted to number so it gives NaN
console.log("4" - "2abc")  // why is that NaN ? because - operator is only for numbers so it converts both the strings to numbers and then subtracts them but "2abc" cannot be converted to number so it gives NaN

console.log(+true) // 1 
console.log(+false) // 0

// But remember that these type of conversions create confusion and bugs in the code so avoid them as much as possible and they are not considered good practice also not appreciated by the community