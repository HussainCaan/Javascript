let buttons = document.querySelectorAll(".btn")
// console.log(blue)
let buttons_array = Array.from(buttons)
// console.log(buttons_array)

buttons_array.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        if(btn.textContent == "Light Blue"){
            document.body.style.backgroundColor = "lightblue" 
        }
        else if(btn.textContent == "Green"){
            document.body.style.backgroundColor = "lightgreen" 

        }
        else if(btn.textContent == "Black"){
            document.body.style.backgroundColor = "black" 
            document.body.style.color = "white"
        }
        else if(btn.textContent == "Yellow"){
            document.body.style.backgroundColor = "yellow" 
            document.body.style.color = "black"
        }
    })
})
