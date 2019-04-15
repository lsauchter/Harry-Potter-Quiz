function startQuiz() {
    $('.startButton').click(function(event) {
        $('.startPage').remove();
    }
    )
}


function runQuiz() {
    startQuiz();
    handleSubmitButton();
    nextQuestion();
    handleRestartButton();
}

$(runQuiz())