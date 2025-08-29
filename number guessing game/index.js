document.addEventListener("DOMContentLoaded", () => {
    let attempts = 0;

    const submitMessage = document.querySelector("#submit-info"); // feedback area
    const inputCard = document.querySelector("#input-card");
    const numberInput = document.querySelector("#input-form input");
    const numberForm = document.querySelector("#input-form");

    // reset button
    const resetButton = document.createElement("button");
    resetButton.innerText = "Play Again";

    // generate random number between 1 and 100
    const randomNumber = () => Math.floor(Math.random() * 100) + 1;
    let num = randomNumber();

    // validation function
    function validateNum(input) {
        if (isNaN(input) || input < 1 || input > 100) {
            submitMessage.textContent = "❌ Invalid input! Enter a number between 1 and 100.";
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
            inputCard.innerHTML = ""; // clear form
            inputCard.append(resetButton); // show reset
        }
    }

    // form submission
    numberForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const guess = parseInt(numberInput.value);
        if (!validateNum(guess)) return;

        attempts++;
        gameLogic(guess);
        numberInput.value = ""; // clear after each guess
    });

    // reset game without reload
    resetButton.addEventListener("click", () => {
        attempts = 0;
        num = randomNumber();
        submitMessage.textContent = "🔄 New game started! Guess a number between 1 and 100.";
        submitMessage.style.color = "black";
        inputCard.innerHTML = ""; // clear reset button
        inputCard.append(numberForm); // restore form
    });

});
