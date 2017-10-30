var character = 'X';

//This function handles the onlcik event
function turn (location) {
	document.getElementById(location).innerHTML = character;

	//switch between X and O
	if (character=='X') {
		character='O';
	}
	else{
		character='X';
	}

	document.getElementById(location).innerHTML=character;
}