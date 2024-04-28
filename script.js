const puzzles = [
    { question: "Decrypt this message: VGUVDG", answer: "THREAT", hint: "Use a simple Caesar cipher (shift by -2)." },
    { question: "What is the missing number in the sequence: 2, 3, 5, 7, __?", answer: "11", hint: "These are prime numbers." }
];
let currentPuzzle = 0;

function submitAnswer() {
    const userAnswer = document.getElementById('userInput').value.toUpperCase();
    if (userAnswer === puzzles[currentPuzzle].answer) {
        document.getElementById('feedback').textContent = 'Correct! On to the next challenge.';
        currentPuzzle++;
        if (currentPuzzle < puzzles.length) {
            displayPuzzle();
        } else {
            document.getElementById('storyText').textContent = 'Congratulations, you have prevented the cyber attack!';
            document.getElementById('puzzleContainer').style.display = 'none';
            document.getElementById('hintContainer').style.display = 'none';
        }
    } else {
        document.getElementById('feedback').textContent = 'Incorrect, try again!';
    }
}

function showHint() {
    document.getElementById('hintText').textContent = puzzles[currentPuzzle].hint;
}

function displayPuzzle() {
    document.getElementById('puzzleText').textContent = puzzles[currentPuzzle].question;
    document.getElementById('userInput').value = '';
    document.getElementById('hintText').textContent = '';
}

window.onload = displayPuzzle;

