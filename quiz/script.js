


var myQuestions = [
    {
        question: "#1. Which of the following is an advantage of using JavaScript?",
        answers: {
            A: 'Less server interaction',
            B: 'Immediate feedback to the visitors',
            C: 'Increased interactivity',
            D: 'All of the above.'
        },
        correctAnswer: 'D'
    },

    {
        question: "#2. Which built-in method sorts the elements of an array?",
        answers: {
            A: 'ChangeOrder (order)',
            B: 'order()',
            C: 'sort()',
            D: 'None of the above.'
        },
        correctAnswer: 'C'
    },

    {
        question: "#3. Which of the following function of String object causes a string to be displayed in the specified color as if it were in a <font color='color'> tag?",
        answers: {
            A: 'fixed()',
            B: 'fontcolor()',
            C: 'blink()',
            D: 'bold()'
        },
        correctAnswer: 'B'
    },

    {
        question: "#4. Which of the following is correct about callbacks?",
        answers: {
            A: 'A callback is a plain JavaScript function passed to some method as an argument or option.',
            B: 'Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.',
            C: 'Both of the above.',
            D: 'None of the above.'
        },
        correctAnswer: 'C'
    },

    {
        question: "#5. Which of the following function of Boolean object returns the primitive value of the Boolean object?",
        answers: {
            A: 'toSource()',
            B: 'valueOf()',
            C: 'toString()',
            D: 'None of the above.'
        },
        correctAnswer: 'B'
    },
];



var quizContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit')
var resultsContainer = document.getElementById('results');
var startButton = document.getElementById('start');
var timeEl = document.querySelector(".time");
var secondsLeft = 90;



generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton) {

    function showQuiz(myQuestions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;


        // first reset the list of answers
        //answers = [];

        // for each question...
        for (var i = 0; i < myQuestions.length; i++) {

            answers = [];
            // for each available answer...
            for (letter in myQuestions[i].answers) {

                // ...add an html radio button
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + ' '
                    + letter
                    + ': '
                    + myQuestions[i].answers[letter]
                    + '</label>'
                    + '  '
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="questions">' + myQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );


        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }



    function showResults(myQuestions, quizContainer, resultsContainer) {

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for (var i = 0; i < myQuestions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            console.log('.answers')

            // if answer is correct
            if (userAnswer === myQuestions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].setAttribute("style", "color:lightgreen");
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].setAttribute("style", "color:red");

            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
    }


    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " seconds left";

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
            }

        }, 1000);
    }
    // show questions once the click button is hit

    $("#start").on("click", function (el) {
        showQuiz(myQuestions, quizContainer);
        $(this).css("display", "none")
        $("#submit").css("display", "block")
        console.log($(this).text());
    })

    $("#submit").on("click", function (ev) {
        showResults(myQuestions, quizContainer, resultsContainer);
        $(this).css("display", "none")
        console.log($(this).text());
    })

}







