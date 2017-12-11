var list = ["a1.jpg",
			"a2.jpg",
			"a3.jpg",
			"a4.jpg",
			"a5.jpg"];

var imagevalue =0;

function prev () {
	if (imagevalue>0) {
		imagevalue=imagevalue-1;
		document.getElementById("a1").src =list[imagevalue]
	}
}

function next () {
	if (imagevalue<2){
		imagevalue=imagevalue+1;
		document.getElementById("a1").src = list[imagevalue];
	}
}
