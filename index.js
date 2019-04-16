let questionNumber = 0;

let score = 0;

function startQuiz() {
    $('.startButton').click(function(event) {
        $('.startPage').remove();
        renderQuestion();
    })
}

function displayQuestionNumber() {
    $('.questionNumber').html(`${questionNumber + 1}`);
}

function displayScore() {
    $('.score').html(`${score}`);
}
 
function questionTemplate() {
    return `<div class="question">
    <h2>${STORE[questionNumber].question}</h2>
    </div>
    <form>
    <fieldset class="answers">
    <label>
    <input type="radio" name="answer" id="answer1" checked required>
    ${STORE[questionNumber].answer1}
    </label>
    <label>
    <input type="radio" name="answer" id="answer2" required>
    ${STORE[questionNumber].answer2}
    </label>
    <label>
    <input type="radio" name="answer" id="answer3" required>
    ${STORE[questionNumber].answer3}
    </label>
    <label>
    <input type="radio" name="answer" id="answer4" required>
    ${STORE[questionNumber].answer4}
    </label>
    </fieldset>
    <input type="submit" class="submitButton" value="Submit">
    </form>`
}

function renderQuestion() {
    $('.questionForm').html(questionTemplate());
    displayQuestionNumber();
}

function correctAnswer() {
    $('.questionForm').html(
       `<div class="feedback">
       <h2>Great!</h2>
       <img src="https://media1.tenor.com/images/5e35fe87910ea9d4ec7140489d9cc70a/tenor.gif"
       alt="Hogwarts students cheering" />
       <button type="button" class="next">Next</button>
       </div>`
    )
    score++;
    displayScore();
}

function wrongAnswer() {
    $('.questionForm').html(
        `<div class="feedback">
        <p>Actually, it was ${STORE[questionNumber].correctAnswer}<p>
        <img src="https://em.wattpad.com/e156104cd6256ca40497f96eb41772b3d1ca1917/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f67676555684a336658316f5742513d3d2d39332e313434346233616434313363326339622e676966
        "
        alt="Fred and George yelling" />
        </div>
        <button type="button" class="next">Next</button>`
     )
}

function handleSubmitButton() {
        $('.questionForm').on('submit', function(event) {
        event.preventDefault();
        let answerChoice = $('input:checked').parent('label');
        let answer = answerChoice.text().trim();
        if (answer == STORE[questionNumber].correctAnswer) {
            correctAnswer();
        }
        else {
            wrongAnswer();
        }
    });
}

function renderResults() {
    $('.questionForm').html(
        `<div class="results">
        <div class="finalScore">
        <h2 class="scoreText">Final Score - ${score}/10</h2>
        </div>
        <button type="button" class="restart">Restart</button>
        </div>`
    );
    $('body').removeClass('quiz').addClass('end');
}

function nextQuestion() {
    $('.questionForm').on('click', '.next', function(event) {
        if (questionNumber === 9) {
            renderResults();
        }
        else {
        questionNumber++
        renderQuestion();
        }
    });
}

function handleRestartButton() {
    $('.questionForm').on('click', '.restart', function(event) {
        location.reload();
    })
}

function runQuiz() {
    startQuiz();
    handleSubmitButton();
    nextQuestion();
    handleRestartButton();
}

$(runQuiz())