function getQuestionCounterTemplate(actualQuestionCounter, amountOfQuestions) {
    return `
        <b>${actualQuestionCounter}</b> von <b>${amountOfQuestions}</b> Fragen
    `
}

function getQuestionCardTemplate(question, answer_1, answer_2, answer_3, answer_4, percent) {
    return `
        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="${percent}%" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated bc-progress-bar" style="width: ${percent}%"></div>
        </div>

        <h4 class="card-title mt-3">${question}</h4>
                
        <div id="answer_1" onclick="userAnswer(1)" class="card mb-2 answer-card">
            <div class="card-body">
                ${answer_1}
            </div>
        </div>
        <div id="answer_2" onclick="userAnswer(2)" class="card mb-2 answer-card">
            <div class="card-body">
                ${answer_2}
            </div>
        </div>
        <div id="answer_3" onclick="userAnswer(3)" class="card mb-2 answer-card">
            <div class="card-body">
                ${answer_3}
            </div>
        </div>
        <div id="answer_4" onclick="userAnswer(4)" class="card mb-2 answer-card">
            <div class="card-body">
                ${answer_4}
            </div>
        </div>
    `
}

function getCongratulationScreenTemplate(title) {
    return `
        <h4 class="card-title">Glückwunsch</h4>
        <p>Du bist ein ${title}</p>
    `
}