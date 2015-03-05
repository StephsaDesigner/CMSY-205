var $ = function (id) {
    return document.getElementById(id);
}
var calculateClick = function () {
    var investment = parseFloat( $("investment").value );
    var annualRate = parseFloat( $("rate").value );
    var years = parseInt( $("years").value );
	
	if (isNaN(investment) || investment < 100 || investment > 100000) {
		alert("Investment must be an integer from 100 - 100,000.");
	} 
	else if(isNaN(annualRate) || annualRate < .1 || annualRate > 12) {
		alert("Annual rate must be a value from .1 - 12.");
	}
	else if(isNaN(years) || years < 1 || years > 50) {
		alert("Years must be an integer from 1 - 50.");
	}
	// if all entries are valid, calculate future value
	else {
		futureValue = investment;
		for ( i = 1; i <= years; i++ ) {
			futureValue += futureValue * annualRate / 100;
		}
		$("future_value").value = futureValue.toFixed();
	} 
}
window.onload = function () {
    $("calculate").onclick = calculateClick;
    $("investment").focus();
}
