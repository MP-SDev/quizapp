let questions = [
    {
        "question" : "Was haben alle Einhörner?",
        "answer_1" : "Punkte",
        "answer_2" : "Ein Horn",
        "answer_3" : "Hände",
        "answer_4" : "Glitzer Kronen",
        "right_answer" : 2
    },
    {
        "question": "Was machen Einhörner am Liebsten?",
        "answer_1" : "Lego bauen",
        "answer_2" : "Springseil springen",
        "answer_3" : "Rennen",
        "answer_4" : "In der Nase bohren",
        "right_answer" : 3
    },
    {
        "question" : "Was ist die Lieblingsfarbe der Einhörner?",
        "answer_1" : "Regenbogen",
        "answer_2" : "Braun",
        "answer_3" : "Weiß",
        "answer_4" : "Orange",
        "right_answer" : 1
    },
    {
        "question": "Was können magische Einhörner besonders gut?",
        "answer_1" : "Graben",
        "answer_2" : "Kochen",
        "answer_3" : "Singen",
        "answer_4" : "Fliegen",
        "right_answer" : 4
    },
    {
        "question": "Wen besuchen magische Einhörner oft im Traum?",
        "answer_1" : "Opas",
        "answer_2" : "Kinder",
        "answer_3" : "Hunde",
        "answer_4" : "Polizisten",
        "right_answer" : 2
    }
];

let actualQuestion = 0;
let AmountCorrectAnswers = 0;

function init() {
    let questionCardRef = document.getElementById('questionCard');
    let questionCounterRef = document.getElementById('questionCounter');
    let btnNextQuestionRef = document.getElementById('btnNextQuestion');
    let percent = Math.round((actualQuestion / questions.length) * 100);
    questionCardRef.innerHTML = getQuestionCardTemplate(questions[actualQuestion].question, questions[actualQuestion].answer_1, questions[actualQuestion].answer_2, questions[actualQuestion].answer_3, questions[actualQuestion].answer_4, percent);
    questionCounterRef.innerHTML = getQuestionCounterTemplate(actualQuestion + 1, questions.length);
    btnNextQuestionRef.disabled = true;
}

function nextQuestion() {
    if (actualQuestion < questions.length -1) {
        actualQuestion += 1;
        init();
    } else {
        renderCongratulationScreen();
    }
}

function renderCongratulationScreen() {
    let questionCardRef = document.getElementById('questionCard');
    let questionCardImgRef = document.getElementById('questionCardImg');
    let title = createCongratulationTitle();
    questionCardRef.innerHTML = getCongratulationScreenTemplate(title);
    questionCardImgRef.src = "./assets/img/unicorn_mountain.png";
}

function createCongratulationTitle() {
    switch (AmountCorrectAnswers) {
        case 0:
            return "Einhorn-Interessierter"
            break;
        case 1:
            return "Einhorn-Bekannter"
            break;
        case 2:
            return "Einhorn-Freund"
            break;
        case 3:
            return "Einhorn-Spezialist"
            break;
        case 4:
            return "Einhorn-Experte"
            break;
        case 5:
            return "Einhorn"
            break;

        default:
            break;
    }
}

function userAnswer(answer) {
    let userAnswerRef = document.getElementById('answer_' + answer);
    let btnNextQuestionRef = document.getElementById('btnNextQuestion');
    if (answer == questions[actualQuestion].right_answer) {
        userAnswerRef.classList.add('correctAnswer');
        AmountCorrectAnswers += 1;
    } else {
        userAnswerRef.classList.add('falseAnswer');
    }
    btnNextQuestionRef.disabled = false;
}