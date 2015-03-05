var $ = function (id) {
    return document.getElementById(id);
}
var calculateClick = function () {
    var investment = parseInt( $("investment").value );
    var annualRate = parseFloat( $("rate").value );
    var years = parseInt( $("years").value );
	var isValid = true;
	
	if (isNaN(investment) || investment < 100 || investment > 100000) {
		$("investment_error").firstChild.nodeValue = "Must be an integer from 100 - 100,000";
		isValid = false;
	}
	else {
		$("investment_error").firstChild.nodeValue = "";
	}
	if(isNaN(annualRate) || annualRate < .1 || annualRate > 12) {
		$("rate_error").firstChild.nodeValue = "Must be a value from .1 - 12";
		isValid = false;
	}
	else {
		$("rate_error").firstChild.nodeValue = "";
	}
	if(isNaN(years) || years < 1 || years > 50) {
		$("years_error").firstChild.nodeValue = "Must be an integer from 1 - 50";
		isValid = false;
	}
	else {
		$("years_error").firstChild.nodeValue = "";
	}
	// if all entries are valid, calculate future value
	if (isValid) {
		futureValue = investment;
		for ( i = 1; i <= years * 12; i++ ) {
			futureValue += futureValue * annualRate / 100 / 12;
		}
		$("future_value").value = futureValue.toFixed();
	} 
}
var clearRate = function() {
	$("rate").value = "";
}
window.onload = function () {
    $("calculate").onclick = calculateClick;
    $("rate").ondblclick = clearRate;
    $("investment").focus();
}
