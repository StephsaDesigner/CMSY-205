var $ = function (id) {
    return document.getElementById(id);
}

var make_change = function() {
	var cents = parseInt($("cents").value);
  var remainder;

  if (isNaN(cents) || cents < 0 || cents > 99){
    alert("Please enter a number between 0 and 99");
  } else {
      var quarters = parseInt(cents/25);
      remainder = cents % 25;
      $("quarters").value = quarters;
      $("quarters").disabled = true;

      var dimes = parseInt(remainder/10);
      remainder = remainder % 10;
      $("dimes").value = dimes;
      $("dimes").disabled = true;

      var nickels = parseInt(remainder/5);
      remainder = remainder % 5;
      $("nickels").value = nickels;
      $("nickels").disabled = true;

      var pennies = parseInt(remainder/1);
      remainder = remainder % 1;
      $("pennies").value = pennies;
      $("pennies").disabled = true;

  }

}

window.onload = function () {
   $("calculate").onclick = make_change;
   $("cents").focus();

}
