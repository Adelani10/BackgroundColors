const bgColor = ["magenta", "blue", "rgba(174, 18, 44, 0.851)", "green", "darkslateblue", "darkgrey"]

let btn = document.getElementById("btn")
let span = document.querySelector(".span")

btn.addEventListener("click", function(){
    let josh = bgColor[getRandomColor()]
    span.textContent = josh
    document.body.style.backgroundColor = josh

})

function getRandomColor(){
    return Math.floor(Math.random() * bgColor.length)
}