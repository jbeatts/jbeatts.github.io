
//draws random circle in ClickPanel
function randomCircle () {

	//update position of circle
	//randomly get top positions
	document.getElementById("circle").style.top = randomNum();

	//document.getElementById("circle").style.top = "200px";

	//randomly get left positions
	document.getElementById("circle").style.left = randomNum();
	//document.getElementById("circle").style.left = "200px";	
	
}

//handles onclick event
//when random circle is click in clickPanel, it disappears
//then generates a new random circle
function clickCircle () {

	//circle is clicked, hide circle
	//document.getElementById("circle").style.visibility = "hidden";

	//generate random circle
	//document.getElementById("circle").style.visibility = "visible";
	
 	//move circle
 	randomCircle ();
}

function randomNum() {
	return Math.floor (Math.random() * 200);

}
