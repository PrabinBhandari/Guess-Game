function playGameRound(){
	if (GuessNumber < 9){
	     if (Guess < MyNumber){
	     guessTooLow();
	     }
	     else if (Guess > MyNumber){
	     guessTooHigh();
	     }
	     else if (Guess == MyNumber){
	     guessCorrect();
	     showWinGame();
	     startNextGame();
	     NumWins++;
	     }
	}
	if (GuessNumber == 9){
		showLoseGame();
		startNextGame();
	}	
}
function playTournamentRound(){ 
	if (GameNumber < 4){ 
	playGameRound();
	}
	if (GameNumber == 4){   
        if (NumWins > 1){
        	showWinTournament();
        }
        else{
            showLoseTournament();
        }
	}
}
function showWinTournament() {
      showTournamentResult("You have Won the Tournament!!", "lime");
}
function showLoseTournament() {
	  showTournementResult("You have Lost the Tournament!!", "red");
}
function showTournamentResult(msg, color){
     var TWinLosestr = "#TWinLose";  
     var TNumWonstr = "#TNumWon";   
     $(TWinLosestr).css("color", color);
     $(TWinLosestr).text(msg);
     $(TWinLosestr).css("visibility","visible");
     $(TNumWonstr).text("You won " + NumWins + " Games!");
     $(TNumWonstr).css("visibility","visible");
}
function startNextGame(){
     var currentGameBorderstr = "#G" + GameNumber + "Border";  
     $(currentGameBorderstr).css("border", "5px solid aqua");  
     GameNumber++; 
     var nextGameBorderstr = "#G" + GameNumber + "Border";
     $(nextGameBorderstr).css("border", "5px solid red"); 
     GuessNumber = 1;
     $(currentTable1str).show();
     var currentTable1str = "#G" + GameNumber + "-Guess" + GuessNumber + "-Table1";
     var nextLabelstr = "#G" + GameNumber + "Label" + (GuessNumber);
     var nextInputBox = "#G" + GameNumber + "InputBox" + (GuessNumber);
     $(nextLabelstr).css("visibility","visible");
     $(currentTable1str).show();
     $(nextInputBox).focus();
     MyNumber = getRandomValue();
}
function guessTooLow(){
	 showGuess("yellow", "Low");
	 showNextGuess();
}
function guessTooHigh(){
      showGuess("magenta", "High");
	  showNextGuess();
}
function guessCorrect(){
	 showGuess("white", "Right");
	 showWinGame();
}
function showGuess(color,msg){
	var currentTable1str = "#G" + GameNumber + "-Guess" + GuessNumber + "-Table1";
	var currentTable2str = "#G" + GameNumber + "-Guess" + GuessNumber + "-Table2";
	var currentValuestr = "#G" + GameNumber + "Value" + GuessNumber;
	var currentLowHighstr = "#G" + GameNumber + "LowHigh" + GuessNumber;
	$(currentTable1str).hide();
	$(currentValuestr).text(Guess);
	$( currentLowHighstr).text(msg);
	$(currentValuestr).css("color", color);
	$( currentLowHighstr).css("color", color);
	$(currentTable2str).show();
}
function showNextGuess(){
	var nextLabelstr = "#G" + GameNumber + "Label" + (GuessNumber+1);
	var nextTable1str = "#G" + GameNumber + "-Guess" + (GuessNumber+1) + "-Table1";
	var nextInputBox = "#G" + GameNumber + "InputBox" + (GuessNumber+1);
	$(nextLabelstr).css("visibility","visible");
	$(nextTable1str).show();
	$(nextInputBox).show();
	$(nextInputBox).focus();
	GuessNumber++;
}
function getRandomValue(){
	return Math.floor(Math.random()*99+1);
}
function showWinGame(){
	showGameResult("You have Won the Game!!", "lime");
}
function showLoseGame(){
    showGameResult("You have Lost the Game!!", "red");
}
function showGameResult(msg,color){
	var gameWinLosestr = "#G" + GameNumber + "WinLose";
	$(gameWinLosestr).text(msg);
	$(gameWinLosestr).css("color", color);
	$(gameWinLosestr).css("visibility","visible");
	var gameWinLosestr = "#G" + GameNumber + "MyNumber";
	$(gameWinLosestr).text(msg);
	$(gameWinLosestr).css("color", "white");
	$(gameWinLosestr).css("visibility","visible");
}