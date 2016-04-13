$(document).ready(function () {

    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });


    $('#guessButton').click(function (event) {
        event.preventDefault();
        feedbackFunction();
    });

    var mysteryNumber;
    var numberOfGuesses = 0;


    var newGame = function () {

        $('#feedback').text('Make your Guess!');

        $('#guessList').empty();

        numberOfGuesses = 0;

        $('#count').text(numberOfGuesses);

        mysteryNumber = Math.ceil(Math.random() * 100);

        console.log(mysteryNumber);
    };

    $('.new').click(newGame);

    newGame();


    var feedbackFunction = function () {

        var userGuess = $('#userGuess').val();

        if (isNaN(userGuess) || userGuess === '') {
            alert('Please enter a number');
        }
        else if (userGuess > 100 || userGuess < 0) {
            alert('Please enter a number between 0 and 100');
        }
        else if ((userGuess % 1) !== 0) {
            alert('Please enter a whole number');
        }
        else {

            if (userGuess == mysteryNumber) {
                $('#feedback').text('You Win');
            }
            else if (Math.abs(mysteryNumber - userGuess) < 10) {
                $('#feedback').text('Muy Caliente');
            }
            else if (Math.abs(mysteryNumber - userGuess) < 20) {
                $('#feedback').text('Hot');
            }
            else if (Math.abs(mysteryNumber - userGuess) < 30) {
                $('#feedback').text('Warm');
            }

            else if (Math.abs(mysteryNumber - userGuess) < 40) {
                $('#feedback').text('cold');
            }
            else if (Math.abs(mysteryNumber - userGuess) >= 40) {
                $('#feedback').text('Ice cold');
            }


            $('#guessList').append('<li>' + userGuess + '</li>');
            $('#userGuess').val('');
            numberOfGuesses++;
            $('#count').text(numberOfGuesses);

        }
    };
});
