let btn = document.querySelector(".btn")
let para = document.querySelector(".para")
let input = document.querySelector("#number-input")
// console.log(input)
// console.log(typeof btn)
// btn = Number(btn)
// console.log(typeof btn)
let min = 1;
let max = 100;
let random = Math.floor(Math.random() * (max - min + 1) + 1)
console.log(random)
let attempts = 0

function handleGuess(){
    let input_val = Number(input.value)
    if (Number.isNaN(input_val)) {
        para.textContent = "Please enter a valid number"
        return
    }

    attempts += 1
    if (input_val > random) {
        para.textContent = `You have chosen a higher number. No of attempts: ${attempts}`
    } else if (input_val < random) {
        para.textContent = `You have chosen a lower number. No of Attempts: ${attempts}`
    } else {
        para.textContent = `You have guessed the number in ${attempts} attempts`
        btn.disabled = true
    }
}
btn.addEventListener("click", (e) => {
    e.preventDefault()  // Stop form submission
    handleGuess()
})

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault()  // Stop form submission
        handleGuess()
    }
})