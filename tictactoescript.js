var character = 'X';

//This function handles the onlcik event
function turn (location) {

	//update box with character, if box is empty
	if(document.getElementById(location).innerHTML == "") {

	//update results div with feedback
	document.getElementById("results").innerHTML = "It's " + character + "'s turn!";

	//switch between X and O
	if (character=='X') {
		character='O';
	}
	else{
		character='X';
	}

	//write box in character
	document.getElementById(location).innerHTML = character;
}


	}

	