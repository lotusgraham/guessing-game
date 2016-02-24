var mainNumber;

$(document).ready(function(){

	/*--- Start a New Game ---*/
	function newGame(){
			mainNumber = Math.floor((Math.random() * 100) + 1);

	}

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
