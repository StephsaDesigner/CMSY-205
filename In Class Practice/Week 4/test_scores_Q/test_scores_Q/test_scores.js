var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
var textDisplay;

var $ = function (id) { 
	return document.getElementById(id); 
}

var addElement = function () {
	// get user entries
	var name = $("name").value;
    var score  = parseInt( $("score").value );
    
    // check entries for validity
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
    	alert("You must enter a name and a valid score");
    }
	else {
		names[names.length] = $("name").value;
		scores[scores.length] = parseInt($("score").value);
	    $("name").value = "";
	    $("score").value = "";
	}
    $("name").focus();
}

var listArray = function (){
	textDisplay = "";
	for ( var i = 0; i <= names.length; i++){
		textDisplay += names[i] + " " + scores[i] + "\n";
	}
	$("results").firstChild.nodeValue = textDisplay;
	
	$("name").focus();
}

var showBest = function (){
	var highestScore = 0;
	var highestName = "";
	
	for (var i = 0; i <= scores.length; i++){
		if ( scores[i] > highestScore){
			highestScore = scores[i];
			highestName = names[i];
		}
	}
	
	textDisplay = "High Score Student = " + highestName + "\n" + "High Score = " + highestScore;
	
	$("results").firstChild.nodeValue = textDisplay;
	$("name").focus();
}

window.onload = function () {
	$("add").onclick = addElement;
	$("list_array").onclick = listArray;
	$("show_best").onclick = showBest;
	$("name").focus();
}


