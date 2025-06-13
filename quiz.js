function checkAnswer() {
    const correctAnswer = "4";

    // Select the checked input element
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');

    let userAnswer = null;
    if (selectedRadio !== null) {
        userAnswer = selectedRadio.value;
    }

    if (userAnswer === null) {
        document.getElementById("feedback").textContent = "Please select an answer.";
    } else if (userAnswer === correctAnswer) {  // <-- This line explicitly compares strings
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);

