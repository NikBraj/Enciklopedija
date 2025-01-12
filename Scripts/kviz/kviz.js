const questions = [
    {
        question: "Kolika je masa Panzera IV u tonama?",
        answers: ["25", "27", "30", "21"],
        correct: 0
    },
    {
        question: "Koje je godine Leopard II uveden u uporabu?",
        answers: ["1970.", "1967.", "1975.", "1979."],
        correct: 3
    },
    {
        question: "Kako se zvao najpoznatiji britanski tenk iz Prvog svjetskog rata?",
        answers: ["Mark I", "Mark II", "Char B1", "Abrams"],
        correct: 0
    },
    {
        question: "Koliko je iznosila maksimalna brzina tenka T-55?",
        answers: ["43 km/h", "46 km/h", "50 km/h", "54 km/h"],
        correct: 2
    },
    {
        question: "Koliko članova posade ima američki Abrams?",
        answers: ["5", "3", "2", "4"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");
const quizContent = document.getElementById("quiz-content");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const homeButton = document.getElementById("home-btn");

function startQuiz() {
    
    currentQuestionIndex = 0;
    score = 0;

    
    startScreen.style.display = "none";
    quizContent.style.display = "block";
    resultElement.style.display = "none";
    feedbackElement.style.display = "none";
    answersElement.style.display = "block";
    questionElement.style.display = "block";

    
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(index));
        answersElement.appendChild(button);
    });
}

function resetState() {
    feedbackElement.style.display = "none";
    answersElement.innerHTML = "";
}

function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".answer-btn");

    
    buttons.forEach(button => button.classList.add("disabled"));

    
    if (selectedIndex === question.correct) {
        score++;
        feedbackElement.textContent = "Točno!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = `Netočno! Točan odgovor je: ${question.answers[question.correct]}`;
        feedbackElement.style.color = "red";
    }

    feedbackElement.style.display = "block";

    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 2000);
}

function showResult() {
    feedbackElement.style.display = "none";
    questionElement.style.display = "none";
    answersElement.style.display = "none";
    resultElement.style.display = "block";
    scoreElement.textContent = `Osvojio si ${score} od ${questions.length} bodova!`;
}


startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", () => {
    
    quizContent.style.display = "none";
    startScreen.style.display = "block";
});


homeButton.addEventListener("click", () => {
    window.location.href = "../../Home.html";
});