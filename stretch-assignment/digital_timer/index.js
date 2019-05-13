
const msTens = document.querySelector("#msTens")
const msHundreds = document.querySelector("#msHundreds")
const secondOnes = document.querySelector("#secondOnes")
const secondTens = document.querySelector("#secondTens")
let digits = setInterval(update, 10)

let mscount = 0
let mhcount = 0

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
