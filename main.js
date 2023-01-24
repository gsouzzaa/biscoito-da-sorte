//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)

const fortune = [
    "Sua próxima viagem será para Vancouver",
    "Sua próxima viagem será para Tailândia",
    "Sua próxima viagem será para Paris",
    "Sua próxima viagem será para Bruxelas",
    "Sua próxima viagem será para Londres",
    "Sua próxima viagem será para Praga"
]  

//Eventos
fortuneCookie.addEventListener('click', handleOpenClick)
btnReset.addEventListener('click', handleResetClick)
    
//Funções
function handleOpenClick(event) {
    toggleScreen()
    pickFortune()
}

function handleResetClick() {
    toggleScreen()
}

function pickFortune() {
    let allFortunes = fortune.length
    let randomNumber = Math.floor(Math.random() * allFortunes)  
    screen2.querySelector("p").innerText = `${fortune[randomNumber]}`
}


function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
