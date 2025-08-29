document.addEventListener("DOMContentLoaded",()=>{
const timer = document.querySelector("#timer")
const timeInput = document.querySelector("#time-input")
const h2 = document.querySelector("#timer h2")
h2.textContent = 0


let interval
let timeLeft

const timeForm = document.querySelector("#time-form")
timeForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    startTimer(timeInput.value)
    timeForm.reset()
    
})

const pauseButton = document.querySelector("#pause")
pauseButton.disabled = true
pauseButton.addEventListener("click",()=>{
    clearInterval(interval)
    interval = null
    pauseButton.disabled = true
    resumeButton.disabled = false
})

const resumeButton = document.querySelector("#resume")
resumeButton.disabled = true
resumeButton.addEventListener("click",()=>{
    interval = setInterval(() => {
        timeLeft --
        h2.textContent = timeLeft
        if(timeLeft === 0){stopTimer()}
        
    }, 1000);
    resumeButton.disabled = true
    pauseButton.disabled = false
})

const resetButton = document.querySelector("#reset")
resetButton.disabled = true
resetButton.addEventListener("click",()=>{
    clearInterval(interval)
    interval = null
    timeLeft = 0
    h2.textContent = timeLeft
    resumeButton.disabled = true
    pauseButton.disabled = true
    resetButton.disabled = true
})

function startTimer(timeInSecs){
    timeLeft = parseInt(timeInSecs,10)
    h2.textContent = timeLeft
    interval = setInterval(() => {
        timeLeft --
        h2.textContent = timeLeft
        if(timeLeft === 0){stopTimer(interval)}
        
    }, 1000);
    pauseButton.disabled = false
    resetButton.disabled = false
    
}

function stopTimer(){
    clearInterval(interval)
    interval = null
    alert("Time's Up")
}

})