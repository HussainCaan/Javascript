const newuser = new Object() // this is single object and not object literal also it's a constructor function furthermore it's created in heap memory
const user = {} // this is object literal and it's created in stack memory

// console.log(newuser) // {}
// console.log(user) // {}

const regualarUser = {
    fullName: { // object in a object
        firstName: "Hussain",
        lastName: "Khan"
    },
    email : "p229270@pwr.nu.edu.pk"

}

// console.log(regualarUser.fullName.firstName , regualarUser.fullName.lastName, regualarUser.email) // Hussain Khan

// Object combining or merging
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }
const obj3 = { ...obj1, ...obj2 } // this will merge both objects into one object as b is common in both objects it will take the value from obj2 and will ignore the value from obj1
// console.log("spread operator",obj3)
// console.log("Before assign ",obj1)
const obj4 = Object.assign({}, obj1, obj2) // if we give empty object then it will create a new object and will store it there and the source objects will not change
// console.log(obj4)
// console.log("after assign but with a parenthesis for target",obj1)
const obj5 = Object.assign(obj1, obj2)  // here the target is obj1 so obj1 will get changed and will store the combined result in itself
// console.log(obj5)
// console.log("Afrer assign obj1",obj1)
// console.log("Afrer assign obj2",obj2)

const object_keys = Object.keys(regualarUser)
const object_values = Object.values(regualarUser)
// console.log(object_keys) // [ 'fullName', 'email' ]
// console.log(object_values) // [ { firstName: 'Hussain', lastName: 'Khan' }, 'p229270@pwr.nu.edu.pk' ]
console.log(object_keys[0])
console.log(object_values[1])