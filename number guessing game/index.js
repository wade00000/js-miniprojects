document.addEventListener("DOMContentLoaded",()=>{
    let attempts = 0

    const submitMessage = document.querySelector("#submit-info")
    const inputCard = document.querySelector("#input-card")
    const numberInput = document.querySelector("#input-form input")

    const resetButton = document.createElement("button")
    resetButton.innerText= "Play Again"
    resetButton.addEventListener("click",()=>{
        location.reload()
    })

    const numberForm = document.querySelector("#input-form")
    numberForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        attempts ++
        validateNum(parseInt(numberInput.value))
        gameLogic(parseInt(numberInput.value))
        
    })

    const randomNumber = () => Math.floor(Math.random() * 101)
    const num = randomNumber()
    


    function validateNum(input){
        let text
        if(isNaN(input) || input < 1 || input > 100){
            text = "Invalid input,it must be a number between 1 and 100"
            alert(text)
        }
        
    }


    function gameLogic(input){
        if(input > num){
            alert("Too High")
        }else if(input < num){
            alert("Too Low")
        }else if(input === num){
            alert(`You got it!!! 🎉🎉🎉 It took you ${attempts} attempt(s)`)
            inputCard.innerHTML = ""
            inputCard.append(resetButton) 
        }
        
    }


















})