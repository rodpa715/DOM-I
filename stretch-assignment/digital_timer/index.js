const startButton = document.querySelector("button")
startButton.addEventListener("click", checkIfActive)
let active = false
function checkIfActive(){
    console.log(active)
    if(active === false){
        active = true
        startTimer()
        startButton.style.backgroundColor = "grey"
        startButton.style.cursor = "not-allowed"
    }
}
function startTimer(){
            let digits = (function(){setInterval(update, 10)})()
}


//TIMER LOGIC
const msTens = document.querySelector("#msTens")
const msHundreds = document.querySelector("#msHundreds")
const secondOnes = document.querySelector("#secondOnes")
const secondTens = document.querySelector("#secondTens")

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
