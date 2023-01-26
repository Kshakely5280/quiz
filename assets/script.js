var quizData = [
    {
        questions: "Commonly used data types DO NOT include:",
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
        correct: "c",
    },
    {
        questions: "the condition in an if / else statement is encclosed within ___.",
        a: "Quotes",
        b: "Curly Brackets",
        c: "parenthesis",
        d: "Square Brackets",
        correct: "c",
    },
    {
        questions: "Arrays in JavaScript can be used to store ____.",
        a: "Numbers and Strings",
        b: "Other arrays",
        c: "Booleans",
        d: "All of the above",
        correct: "d",

    },
    {
        questions: "String values must be enclosed within ___ when being assigned to variables",
        a: "Commas",
        b: "Curly Brackets",
        c: "Quotes",
        d: "Parenthesis",
        correct: "c",
    },
    {
        questions: "A very useful tool used during development and debugging for printing content to the debugger is",
        a: "Javascript",
        b: "Terminal",
        c: "For loops",
        d: "console log",
        correct: "d",
    },
];

var quiz = document.getElementById('quiz');
var answerEl = document.querySelectorAll('.answer');
var questionsEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitBtn = document.getElementById('submit');
var timerElement = document.querySelector(".timer-count");
var secondsLeft = document.querySelector(".large-font-timer-count");
var currentQuiz = 0;
var score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()
    var currentQuizData = quizData[currentQuiz]
    questionsEl.innerText = currentQuizData.questions
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
};

function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false)
    
};


function getSelected() {
    var answer
    answerEl.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer
};


submitBtn.addEventListener('click', () => {
    var answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>Your score is:  ${score}/${quizData.length}</h2>
            <button oneclick="location.reload()">Reload</button>
            `
        }
    }   
})



var timer;
var timerCount = '';

var count = 100;
var countdown;

function startTimer() {
  countdown = setInterval(() => {
    count--;
    secondsLeft.textContent = count;
    if (count === 0) {
      clearInterval(countdown);
      console.log("Time's up!");
    }
  }, 1000);
}

submitBtn.addEventListener('click', startTimer)
