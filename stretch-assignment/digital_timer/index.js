const startButton = document.querySelector("#start")
const resetButton = document.querySelector("#reset")
startButton.addEventListener("click", checkIfActive)
resetButton.addEventListener("click", reset)
let active = false
let timer;
function checkIfActive(){
    console.log(active)
    if(active === false){
        digits.forEach(item => item.classList.toggle("redDigit", false))
        active = true
        startTimer()
        startButton.style.backgroundColor = "grey"
        startButton.style.cursor = "not-allowed"
    }
}

function reset(){
active = false
clearInterval(timer)
digits.forEach(item => item.classList.toggle("redDigit", false))
startButton.style.backgroundColor = "green"
startButton.style.cursor = "pointer"

mscount = 0
mhcount = 0
secondCount = 0
secondTensCount = 0
msTens.textContent = "-"
msHundreds.textContent = "-"
secondOnes.textContent = "-"
secondTens.textContent = "-"
}

function startTimer(){
            let start = (function(){ timer = setInterval(update, 10)})()
}


//TIMER LOGIC
const msTens = document.querySelector("#msTens")
const msHundreds = document.querySelector("#msHundreds")
const secondOnes = document.querySelector("#secondOnes")
const secondTens = document.querySelector("#secondTens")
const digits = document.querySelectorAll("div.digit")

//miliseoncds
let mscount = 0
let mhcount = 0
//seconds
let secondCount = 0
let secondTensCount = 0

function update(){
    msTens.textContent = mscount
    msHundreds.textContent = mhcount
    secondOnes.textContent = secondCount
    secondTens.textContent = secondTensCount
    if(secondTensCount === 1){
        active = false
        startButton.style.backgroundColor = "green"
        startButton.style.cursor = "pointer"
        clearInterval(timer)
        digits.forEach(item => item.classList.toggle("redDigit"))
        return
    }else{
        ++mscount
        if(mscount === 10){
            mscount = 0;
            ++mhcount
        }else if(mhcount === 10){
            mscount = 0;
            mhcount = 0;
            ++secondCount
        }else if(secondCount === 10){
            mscount = 0;
            mhcount = 0;
            secondCount = 0;
            ++secondTensCount
        } 
    }
}
