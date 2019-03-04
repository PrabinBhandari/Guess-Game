/**
 * 
 */
	//These can be as long as you desire in milliseconds
	var redtime = 1000;
	var whitetime = 500;
	var i, str;
	setTimeout(whiteFunc,redtime);  // call whiteFunc after first redtime expires
	function whiteFunc(){
		for (j=1;j<4;j++) {
			for (i=1; i<9; i++) {
				str = "#G"+j+"Blink"+i;
				$(str).each(function() {$(this).css("color","white");} );
			}
		}
		//document.getElementById("blink").style.color = "white";
		setTimeout(redFunc,whitetime); // call redFunc after white time expires
	}
	function redFunc(){
		for (j=1;j<4;j++) {
			for (i=1; i<9; i++) {
				str = "#G"+j+"Blink"+i;
				$(str).each(function() {$(this).css("color","red");} );
			}
		}
	    //document.getElementById("blink").style.color = "red";
	    setTimeout(whiteFunc,redtime); // call whiteFunc after red time expires
	} 