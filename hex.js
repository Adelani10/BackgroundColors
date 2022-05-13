const randomDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let btn = document.getElementById("btn");
let span = document.querySelector(".span");

btn.addEventListener("click", function(){
    let hex = "#"
    for (let i = 0; i<6; i++){
    hex += randomDigits[getRandomNumber()]
    }
    span.textContent = hex
    document.body.style.backgroundColor = hex
})

function getRandomNumber(){
    return Math.floor(Math.random() * randomDigits.length)
}