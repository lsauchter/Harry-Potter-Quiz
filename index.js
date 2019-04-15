let questionNumber = 0;

let score = 0;

function startQuiz() {
    $('.startButton').click(function(event) {
        $('.startPage').remove();
        renderQuestion();
    }
    )
}

function displayQuestionNumber() {
    questionNumber++;
}

function questionTemplate() {
    return `<div class="question">
    <h2>${STORE[questionNumber].question}</h2>
    <form>
    <fieldset class="answers">
    <label>
    <input type="radio" name="answer" required>
    ${STORE[questionNumber].answer1}
    </label><label>
    <input type="radio" name="answer" required>
    ${STORE[questionNumber].answer2}
    </label>
    <label>
    <input type="radio" name="answer" required>
    ${STORE[questionNumber].answer3}
    </label>
    <label>
    <input type="radio" name="answer" required>
    ${STORE[questionNumber].answer4}
    </label>`
}

function renderQuestion() {
    $('.questionForm').html(questionTemplate());
}


function runQuiz() {
    startQuiz();
   // handleSubmitButton();
   // nextQuestion();
  //  handleRestartButton();
}

$(runQuiz())