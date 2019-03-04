/**
 * 
 */
// Global Variables
var GameNumber = 1;
var GuessNumber = 1;
var NumWins = 0;
var MyNumber;
var Guess;

function checkvalue(InputBoxID, BlinkID) {
	var str=$(InputBoxID).val();

	if (str === "") return false;
	var num=Number(str);
	if (isNaN(num)) { 
		$(BlinkID).text(" <NaN");
		return false;
	}
	else if (num < 1) { 
		$(BlinkID).text(" <too small");
		return false;
	}
	else if (num > 100) { 
		$(BlinkID).text(" <too big");
		return false;
	}
	else { 
		$(BlinkID).text("");
		Guess = num;
		return true;
	}
}

function dosubmit(InputBoxID, BlinkID) {
	var result = checkvalue(InputBoxID, BlinkID);
	if (result) {
		playTournamentRound(InputBoxID, BlinkID);
		$(InputBoxID).val("");
	}
}

function doreset() {
	initializeGame();
}

function initializeGame() {
	initializeBoard();
	GameNumber = 1;
	GuessNumber = 1;
	NumWins = 0;
	MyNumber = getRandomValue();
}

function initializeBoard() {
	$("#G1Label1").css("visibility","visible");
	$("#G1-Guess1-Table1").show();
	$("#G1-Guess1-Table2").hide();
	$("#G1InputBox1").focus();

	$("#G1Label2").css("visibility","hidden");
	$("#G1-Guess2-Table1").hide();
	$("#G1-Guess2-Table2").hide();

	$("#G1Label3").css("visibility","hidden");
	$("#G1-Guess3-Table1").hide();
	$("#G1-Guess3-Table2").hide();
	
	$("#G1Label4").css("visibility","hidden");
	$("#G1-Guess4-Table1").hide();
	$("#G1-Guess4-Table2").hide();
	
	$("#G1Label5").css("visibility","hidden");
	$("#G1-Guess5-Table1").hide();
	$("#G1-Guess5-Table2").hide();
	
	$("#G1Label6").css("visibility","hidden");
	$("#G1-Guess6-Table1").hide();
	$("#G1-Guess6-Table2").hide();
	
	$("#G1Label7").css("visibility","hidden");
	$("#G1-Guess7-Table1").hide();
	$("#G1-Guess7-Table2").hide();
	
	$("#G1Label8").css("visibility","hidden");
	$("#G1-Guess8-Table1").hide();
	$("#G1-Guess8-Table2").hide();
	
	$("#G1WinLose").css("visibility","hidden");
	$("#G1MyNumber").css("visibility","hidden");
	
	
	$("#G2Label1").css("visibility","hidden");
	$("#G2-Guess1-Table1").hide();
	$("#G2-Guess1-Table2").hide();

	$("#G2Label2").css("visibility","hidden");
	$("#G2-Guess2-Table1").hide();
	$("#G2-Guess2-Table2").hide();

	$("#G2Label3").css("visibility","hidden");
	$("#G2-Guess3-Table1").hide();
	$("#G2-Guess3-Table2").hide();
	
	$("#G2Label4").css("visibility","hidden");
	$("#G2-Guess4-Table1").hide();
	$("#G2-Guess4-Table2").hide();
	
	$("#G2Label5").css("visibility","hidden");
	$("#G2-Guess5-Table1").hide();
	$("#G2-Guess5-Table2").hide();
	
	$("#G2Label6").css("visibility","hidden");
	$("#G2-Guess6-Table1").hide();
	$("#G2-Guess6-Table2").hide();
	
	$("#G2Label7").css("visibility","hidden");
	$("#G2-Guess7-Table1").hide();
	$("#G2-Guess7-Table2").hide();
	
	$("#G2Label8").css("visibility","hidden");
	$("#G2-Guess8-Table1").hide();
	$("#G2-Guess8-Table2").hide();
	
	$("#G2WinLose").css("visibility","hidden");
	$("#G2MyNumber").css("visibility","hidden");	
	
	
	$("#G3Label1").css("visibility","hidden");
	$("#G3-Guess1-Table1").hide();
	$("#G3-Guess1-Table2").hide();

	$("#G3Label2").css("visibility","hidden");
	$("#G3-Guess2-Table1").hide();
	$("#G3-Guess2-Table2").hide();

	$("#G3Label3").css("visibility","hidden");
	$("#G3-Guess3-Table1").hide();
	$("#G3-Guess3-Table2").hide();
	
	$("#G3Label4").css("visibility","hidden");
	$("#G3-Guess4-Table1").hide();
	$("#G3-Guess4-Table2").hide();
	
	$("#G3Label5").css("visibility","hidden");
	$("#G3-Guess5-Table1").hide();
	$("#G3-Guess5-Table2").hide();
	
	$("#G3Label6").css("visibility","hidden");
	$("#G3-Guess6-Table1").hide();
	$("#G3-Guess6-Table2").hide();
	
	$("#G3Label7").css("visibility","hidden");
	$("#G3-Guess7-Table1").hide();
	$("#G3-Guess7-Table2").hide();
	
	$("#G3Label8").css("visibility","hidden");
	$("#G3-Guess8-Table1").hide();
	$("#G3-Guess8-Table2").hide();
	
	$("#G3WinLose").css("visibility","hidden");
	$("#G3MyNumber").css("visibility","hidden");
	
	$("#TWinLose").css("visibility", "hidden");
	$("#TNumWon").css("visibility", "hidden")

}