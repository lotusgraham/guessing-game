var mysteryNumber;

$(document).ready(function(){

	/*--- Start a New Game ---*/
	function newGame(){
			mysteryNumber = Math.floor((Math.random() * 100) + 1);
			$('#guessList').empty();
			$('#count').text(0);
			$('#feedback').text('Make your Guess!');


			console.log(mysteryNumber);
			//use preventDefault at some point

	}

	newGame();

$('.new').click(newGame);


/*----Response for user input---*/

var countArray = 1;

function response(){
	var userGuess = $('#userGuess').val();
			$('#userGuess').val('');

	if (isNaN(userGuess) || userGuess === '') {
			alert("That's not a number, please enter a number");
			return false;
	}
	else if (userGuess >= 100 ){
		alert('please enter a number between 0 and 100');
		return false;
	}

	$('#guessList').append('<li>' + userGuess + '</li>');

  // console.log("<li>" + userGuess + "</li>");

 if (mysteryNumber == userGuess){
		$('#feedback').text('you win');
			$('#count').text(countArray++);
	}
	else if (Math.abs(mysteryNumber - userGuess) < 10 ) {
		$('#feedback').text('hot');
			$('#count').text(countArray++);
	}
	else if (Math.abs(mysteryNumber - userGuess) < 20 ) {
		$('#feedback').text('warm');
			$('#count').text(countArray++);
	}
	else if (Math.abs(mysteryNumber - userGuess) < 30 ) {
		$('#feedback').text('cold');
			$('#count').text(countArray++);
	}
	else if (Math.abs(mysteryNumber - userGuess) < 50 ) {
		$('#feedback').text('ice cold');
			$('#count').text(countArray++);
	}


}




	$('#guessButton').click(function(e){
		e.preventDefault();
		response();

		// logGuessList();

	});


// 	if (1 == mysteryNumber) {
// 		console.log("keep guessing buddy")
// 	}
// else {
// 	console.log('is this thing working yet?')
// };

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
