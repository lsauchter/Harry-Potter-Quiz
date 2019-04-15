let questionNumber = 0;

let score = 0;

function startQuiz() {
    $('.startButton').click(function(event) {
        $('.startPage').remove();
        renderQuestion();
    }
    )
    console.log('startQuiz ran');
}

function displayQuestionNumber() {
    questionNumber++;
    $('.questionNumber').html(`${questionNumber}`);
    console.log('displayQuestionNumber ran')
    
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
    console.log('renderQuestion ran');
}

function correctAnswer() {
    console.log('correctAnswer ran');
    $('.questionForm').html(
       `<div class="feedback">
       <h2>Great!</h2>
       <img src="https://media1.tenor.com/images/5e35fe87910ea9d4ec7140489d9cc70a/tenor.gif"
       alt="Hogwarts students cheering" />
       <button type="button">Next</button>
       </div>`
    )
}

function wrongAnswer() {
    console.log('wrongAnswer ran');
}

function handleSubmitButton() {
    $('.questionForm').on('submit', function(event) {
        event.preventDefault();
        let answerChoice = $('input:checked').parent('label');
        let answer = answerChoice.text().trim();
        if (answer == STORE[questionNumber - 1].correctAnswer) {
            correctAnswer();
        }
        else {
            wrongAnswer();
        }
    });
}


function runQuiz() {
    startQuiz();
    handleSubmitButton();
   // nextQuestion();
  //  handleRestartButton();
    console.log('runQuiz ran');
}

$(runQuiz())