const startButton = document.querySelector("#start")
startButton.addEventListener("click", startTimer)
function startTimer(){
    let digits = setInterval(update, 10)
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
        clearInterval(digits)
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
