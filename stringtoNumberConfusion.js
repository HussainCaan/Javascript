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