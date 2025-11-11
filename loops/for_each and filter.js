const coding = ["Hussian", "Hassan", "Arbab", "Sudais"]
// coding.forEach(function (item) { console.log(item) }) // In parenthesis write a call back function. (A call back function is a function without a name)

// coding.forEach((val) => { console.log(val) })// arrow function

printme = (item) =>{
    console.log(item)
}

// coding.forEach(printme) // Created an arrow function then call it using for each loop. NOTE: Don't execute the function just give the reference [Don't add ()].

// coding.forEach((item, index, arr)=> {console.log(item, index, arr)}) // For each can take more than one parameter like item, index and complete array.

// OBJECTS INSIDE ARRAY
let myCoding = [
    {"LanguageName": "Javascript",
      "LanguageFileName": "js"
    },
    {"LanguageName": "python",
      "LanguageFileName": "py"
    },
    {"LanguageName": "C++",
      "LanguageFileName": "cpp"
    },
]
// Accessing Objects inside array using for each loop.

myCoding.forEach((objects)=>{
    // console.log(objects.LanguageName);
    // console.log(objects.LanguageFileName);
})


// Returning something from foreach loop
//  foreach loop does not return any thing 

let values1  =  myCoding.forEach((item)=> {
    return item.LanguageFileName
})

// console.log(values1) // will give undefined

// But what I have to return the array values or have to do some other operations on those values? That can also be done like so 
// Below functions

const mynums = [1,2,3,4,5,6,7,8,9];
let values = mynums.filter((num)=> num > 4 ) // filters are used for returning values
// console.log(values) // Also the values are returning because we did not write those inside a scope and it's an implicit return. But I we started a scope then we have to explicitly return those values

// For example

const newvalues = mynums.filter((num)=>{
    return num > 4
})
// console.log(newvalues) // We used scope for explicit return.

// If we have to do the same thing with foreach 
const newarray = [] // first create an empty array  
mynums.forEach((num)=>{
    if (num > 4) {
        newarray.push(num) // Here we are making another array then also a condition check so more code.
    }
})
// console.log(newarray)


const users = [
  { id: 1, name: "Ali Khan", age: 25, email: "ali.khan@example.com", country: "Pakistan", isActive: true },
  { id: 2, name: "Sara Ahmed", age: 28, email: "sara.ahmed@example.com", country: "UAE", isActive: false },
  { id: 3, name: "John Smith", age: 31, email: "john.smith@example.com", country: "USA", isActive: true },
  { id: 4, name: "Emma Brown", age: 22, email: "emma.brown@example.com", country: "UK", isActive: true },
  { id: 5, name: "Hassan Raza", age: 27, email: "hassan.raza@example.com", country: "Pakistan", isActive: false },
  { id: 6, name: "Sophia Lee", age: 30, email: "sophia.lee@example.com", country: "South Korea", isActive: true },
  { id: 7, name: "David Miller", age: 34, email: "david.miller@example.com", country: "Canada", isActive: true },
  { id: 8, name: "Fatima Noor", age: 26, email: "fatima.noor@example.com", country: "Saudi Arabia", isActive: false },
  { id: 9, name: "Liam Johnson", age: 29, email: "liam.johnson@example.com", country: "Australia", isActive: true },
  { id: 10, name: "Olivia Davis", age: 23, email: "olivia.davis@example.com", country: "UK", isActive: true },
  { id: 11, name: "Noah Wilson", age: 32, email: "noah.wilson@example.com", country: "USA", isActive: false },
  { id: 12, name: "Ayesha Tariq", age: 24, email: "ayesha.tariq@example.com", country: "Pakistan", isActive: true },
  { id: 13, name: "Mason Taylor", age: 27, email: "mason.taylor@example.com", country: "Canada", isActive: true },
  { id: 14, name: "Isabella Martin", age: 29, email: "isabella.martin@example.com", country: "France", isActive: false },
  { id: 15, name: "Mohammed Ali", age: 33, email: "mohammed.ali@example.com", country: "UAE", isActive: true },
  { id: 16, name: "Charlotte White", age: 21, email: "charlotte.white@example.com", country: "UK", isActive: true },
  { id: 17, name: "Ethan Green", age: 35, email: "ethan.green@example.com", country: "USA", isActive: false },
  { id: 18, name: "Zara Imran", age: 26, email: "zara.imran@example.com", country: "Pakistan", isActive: true },
  { id: 19, name: "Lucas Harris", age: 28, email: "lucas.harris@example.com", country: "Australia", isActive: true },
  { id: 20, name: "Emily Clark", age: 30, email: "emily.clark@example.com", country: "Canada", isActive: false }
];

let userfilter = users.filter((eachuser)=> (eachuser.age > 30 || eachuser.country == 'Pakistan') && eachuser.isActive == 1  ) // This is use when we get data from database and then can use filters like this

console.log(userfilter)

