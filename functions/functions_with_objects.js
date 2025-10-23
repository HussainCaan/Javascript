function calculate_cart_price(val1,val2,...num1){ // rest operator 
    return val1,val2,num1
}

// let val1,val2,rest_operator = calculate_cart_price(200,400,100);
// console.log(rest_operator,val1,val2)

let user = {
    name: "Husain",
    age: 24,
    Dept: "Ai"
}

function handleObject(anyobject){
    let {Dept} = anyobject;
    let {name} = anyobject
    console.log(`User name is ${name} from ${Dept} Department`);
}
handleObject(user)

let array = [200,400,500,600]

function return2ndValue(get_array){
    return get_array[1];
}
console.log(return2ndValue(array))
