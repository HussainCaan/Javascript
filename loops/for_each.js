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
    console.log(objects.LanguageName);
    console.log(objects.LanguageFileName);
})