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
    $('.questionNumber').html(`${questionNumber}`);
    
}

function questionTemplate() {
    return `<div class="question">
    <h2>${STORE[questionNumber].question}</h2>
    </div>
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
    </label>
    </fieldset>
    <button type="submit" class="submitButton">Submit</button>
    </form>`
}

function renderQuestion() {
    $('.questionForm').html(questionTemplate());
    displayQuestionNumber();
}


function runQuiz() {
    startQuiz();
   // handleSubmitButton();
   // nextQuestion();
  //  handleRestartButton();
}

$(runQuiz())