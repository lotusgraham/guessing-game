
$(document).ready(function(){

	/*--- Start a New Game ---*/
	function newgame(){
		Math.floor((Math.random() * 100) + 1);

	};

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
