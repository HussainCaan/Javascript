// const PromiseOne = new Promise(function(resolve, reject){ // Promise take a callback function with two argument one for if rejected and other for if not rejected
//     // Do a async task
//     // i-e DataBase call, Cryptography, network call
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     }, 1000)
// })

// PromiseOne.then(function(){
//     console.log("Promise one cosumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Another Promise");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Async 2 resolved");
// })


// const PromiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){ 
//         resolve({username: "Hussain", Email:"Hussain@example.com "});
//     },1000)
// })

// PromiseThree.then(function(user){
//     console.log(user)
// })


const PromiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ user1: "hussaincaan", password: "123" });
        }
        else {
            reject(`Error: Something went Wrong`)
        }
    }, 1000)
})

PromiseFour.
    then(function (user) {
        return user.user1
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (err) {
        console.log(err);
    })
// console.log(`Username: ${username}`)