// for of
// it's used for objects and high order arrays iterations mainly

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }

let nameinstring = "Hussain Khan";
// for (const char of nameinstring) {
//     if(char === " "){
//         continue;
//     }
//     console.log(char)
// }


// MAPS // Read documentation
let map = new Map;
map.set("PK", "Pakistan");
map.set("FR", "France");
// console.log(map)
// for (const [key, value] of map) {
//     console.log(key , " " , value)
// }

// for (const key of map) {
//     console.log(key)
// }


let myobj = {
    game1 : "NFS",
    game2 : "Valorant"
}

// for (const key of myobj) {
//     console.log(key)
// } // Object not iteratable by this loop and have some other ways for itereation