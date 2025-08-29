document.addEventListener("DOMContentLoaded", () => {
    let attempts = 0;
    let max = 100
    let min = 1
    let mode 

    const submitMessage = document.querySelector("#submit-info"); // feedback area
    const inputCard = document.querySelector("#input-card");
    const numberInput = document.querySelector("#input-form input");
    const numberForm = document.querySelector("#input-form");
    const selectMode = document.querySelector("#input-card select")
    const heading = document.querySelector("h1")

    const attemptsTracker = document.querySelector("#attempts")
    attemptsTracker.innerText = 0
    
    // reset button
    const resetButton = document.createElement("button");
    resetButton.innerText = "Play Again";

    // generate random number between 1 and 100
    const randomNumber = () => Math.floor(Math.random() * (max - min + 1)) + min;
    let num = randomNumber();

    // validation function
    function validateNum(input) {
        if (isNaN(input) || input < min || input > max) {
            submitMessage.textContent = `❌ Invalid input! Enter a number between ${min} and ${max}.`;
            submitMessage.style.color = "red";
            return false;
        }
        return true;
    }

    // game logic
    function gameLogic(input) {
        if (input > num) {
            submitMessage.textContent = "📈 Too High!";
            submitMessage.style.color = "orange";
        } else if (input < num) {
            submitMessage.textContent = "📉 Too Low!";
            submitMessage.style.color = "blue";
        } else {
            submitMessage.textContent = `🎉 You got it in ${attempts} attempt(s)!`;
            submitMessage.style.color = "green";
            inputCard.innerHTML = "" // clear form
            inputCard.append(resetButton); // show reset
        }
    }

    function changeMode(e){
        if(e.target.value === "Hard"){
            min = 1
            max = 1000
            heading.textContent = `Guess a number between ${min} and ${max}`;
            submitMessage.textContent = `🔄 New game started! Guess a number between ${min} and ${max}.`
        }else if(e.target.value === "Easy"){
            min = 1
            max = 100
            heading.textContent = `Guess a number between ${min} and ${max}`;
            submitMessage.textContent = `🔄 New game started! Guess a number between ${min} and ${max}.`
        }
        num = randomNumber()
        console.log("New number:", num);
    }

    function attemptsCount(){
        if(attempts >= 12 && max === 1000){
            submitMessage.textContent = "No more attempts💀Game Over!"
            inputCard.innerHTML = ""
            inputCard.append(resetButton)
        }else if(attempts >= 6 && max === 100){
            submitMessage.textContent = "No more attempts💀Game Over!"
            inputCard.innerHTML = ""
            inputCard.append(resetButton)
        }
    }



    // form submission
    numberForm.addEventListener("submit", (e) => {
        e.preventDefault();
        selectMode.disabled = true
        const guess = parseInt(numberInput.value);
        if (!validateNum(guess)) return;

        attempts++;
        attemptsTracker.innerText = attempts
        gameLogic(guess);
        numberInput.value = ""; // clear after each guess
        attemptsCount()
    });

    // reset game without reload
    resetButton.addEventListener("click", () => {
        attempts = 0;
        attemptsTracker.innerText = attempts
        num = randomNumber();
        submitMessage.textContent = `🔄 New game started! Guess a number between ${min} and ${max}.`;
        submitMessage.style.color = "black";
        inputCard.innerHTML = ""; // clear reset button
        selectMode.disabled = false
        inputCard.append(selectMode,numberForm); // restore form
    });

    selectMode.addEventListener("change",(e)=>{
        changeMode(e)
    })

});
