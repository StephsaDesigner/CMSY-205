var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
	return document.getElementById(id);
}

var addElement = function(){
	var name = $("name").value;
	var score = parseInt($("score").value);

	if (name == "" || isNaN(score) || score < 0 || score > 100){
		alert("You must enter a name and a valid score");
	} else {
		names[names.length] = name;
		scores[scores.length] = score;
		$("name").value = "";
		$("score").value = "";
	}

	$("name").focus();
}

var displayResults = function(){
	var sum = 0;
	var highScore = 0;
	var lowScore = 100;
	var displayAvg = "";
	var displayHigh = "";
	var displayLow = "";
	var displayNames = "";
	var displayText = "";

	//Display Average
	for (var k = 0; k < scores.length; k++){
		sum += scores[k];
	}
	var average = sum / scores.length;
	displayAvg = "Average Score = " + average + "\n";


	//High Score
	for (var i = 0; i <= scores.length; i++){
		if (scores[i] > highScore){
			highScore = scores[i];
		}
	}
	displayHigh = "High Score = " + highScore + "\n";

	//Low Score
	for (var j = 0; j <= scores.length; j++){
		if ( scores[j] < lowScore){
			lowScore = scores[j];
		}
	}
	displayLow = "Low Score = " + lowScore + "\n";

	//Display Names
	for ( var k = 0; k < names.length; k++){
		displayNames += names[k] + " " + scores[k] + "\n";
	}

	displayText = displayAvg + displayHigh + displayLow + "\n" + displayNames;
	$("results").firstChild.nodeValue = displayText;
	$("name").focus();

}

window.onload = function () {
	$("add").onclick = addElement;
	$("display").onclick = displayResults;
	$("name").focus();
}
