let startbutton = document.querySelector(".start")
let stopbutton = document.querySelector(".stop")
// console.log(start.textContent)
let randomColor = () => {
    let hex = "0123456789BCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
// console.log(randomColor())

startbutton.addEventListener("click", () => {
    startbutton.textContent = "Interval started";
    let colorchanging = setInterval(() => {
        let color = randomColor();
        document.body.style.backgroundColor = color;
    }, 500)

    stopbutton.addEventListener("click", () => {
        clearInterval(colorchanging);
        startbutton.textContent = "Start";
    })
})