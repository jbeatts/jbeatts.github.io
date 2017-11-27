var character = 'X';
var gameOver = false;

//This function handles the onclik event
function turn(location) {

	//update box with character, if box is empty
	if(document.getElementById(location).innerHTML == "" &&
		gameOver == false) {

	//update results div with feedback
	document.getElementById("results").innerHTML = "It's " + character + "'s turn!";

	//switch between X and O
	if (character=='X') {
		character='O';
	}
	else{
		character='X';
	}

	//write character in box
	document.getElementById(location).innerHTML = character;
	//check for winner after move
	checkWinner();

	}

}

//checks for winner
function checkWinner() {

	//grab HTML of each tic tac toe div (which holds x or o)
	var r1c1 = document.getElementById("r1c1").innerHTML;
	var r1c2 = document.getElementById("r1c2").innerHTML;
	var r1c3 = document.getElementById("r1c3").innerHTML;
	var r2c1 = document.getElementById("r2c1").innerHTML;
	var r2c2 = document.getElementById("r2c2").innerHTML;
	var r2c3 = document.getElementById("r2c3").innerHTML;
	var r3c1 = document.getElementById("r3c1").innerHTML;
	var r3c2 = document.getElementById("r3c2").innerHTML;
	var r3c3 = document.getElementById("r3c3").innerHTML;

	if(((r1c1 == r1c2) && (r1c1 == r1c3) && r1c1 != '') || //first row
	   ((r2c1 == r2c2) && (r2c1 == r2c3) && r2c1 != '') || //second row
	   ((r3c1 == r3c2) && (r3c1 == r3c3) && r3c1 != '') || //third row
	   ((r1c1 == r2c1) && (r1c1 == r3c1) && r1c1 != '') || // first column
	   ((r1c2 == r2c2) && (r3c2 == r2c2) && r2c2 != '') || //second column
	   ((r1c3 == r2c3) && (r3c3 == r2c3) && r2c3 != '') || //third column
	   ((r1c1 == r2c2) && (r1c1 == r3c3) && r1c1 != '') || //left to right diagonal
	   ((r1c3 == r2c2) && (r3c1 == r2c2) && r2c2 != '')) { //right to left diagonal

	//game is over now, there's a winner
	gameOver= true;

	//update results div
	document.getElementById("results").innerHTML = character + " wins!";
}

	}

//clear tic tac toe board
function clearAll(){

	//clear all 9 boxes
	document.getElementById("r1c1").innerHTML="";
	document.getElementById("r1c2").innerHTML="";
	document.getElementById("r1c3").innerHTML="";
	document.getElementById("r2c1").innerHTML="";
	document.getElementById("r2c2").innerHTML="";
	document.getElementById("r2c3").innerHTML="";
	document.getElementById("r3c1").innerHTML="";
	document.getElementById("r3c2").innerHTML="";
	document.getElementById("r3c3").innerHTML="";

	//reseet gameOver so players can play again
	gameOver = false;
}


	