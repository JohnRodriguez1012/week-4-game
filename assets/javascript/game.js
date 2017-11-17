//Variables for Wins & Losses

var wins = 0;
var losses = 0;
var targetNumber;
var userNum=0 ;

//variables to run through function for random numbers

var rubyButton ;
var sapphireButton ;
var diamondButton ;
var emeraldButton ;


//Where random number is generated
//Begin Game
initializeGame()

generateTargetNumber()

generateRandomNumber()
//Assigns button values from 1-12 on each button. 
function generateRandomNumber(){
	var ranNumberValues = Math.floor((Math.random() * 12)+1);	
	
	return ranNumberValues;
}

//Assigns target value from 1-12 on each button. 
function generateTargetNumber(){
	var ranTargetValues = Math.floor(Math.random() * 121);	
	return ranTargetValues;
}

//Calls function to assign values
function initializeGame() {

	targetNumber = generateTargetNumber();
	rubyButton = generateRandomNumber();
	sapphireButton = generateRandomNumber();
	diamondButton = generateRandomNumber();
	emeraldButton = generateRandomNumber();
}



//Here are the button functions

//Ruby
document.getElementById("rubyBut").addEventListener("click", function() {
	//add ruby value
	userNum = userNum + rubyButton;
	document.getElementById("scoreHere").innerHTML="You have <h3>"+userNum+"</h3>";
	
	if (userNum === targetNumber){
		alert("Oh Swit Bitly! You Won!");
		wins= wins + 1;
		document.getElementById("wins").innerHTML="Wins <h3>"+wins+"</h3>";
	

	} else if( userNum > targetNumber) {
		alert("Oh No! You Lost!");
		losses= losses +1;
		document.getElementById("losses").innerHTML="Losses <h3>"+losses+"</h3>";		
}});
/*else if(userNum > targetNumber){
	alert("Oh No! You Lost!");

	
}
*/
//Sapphire
document.getElementById("sappBut").addEventListener("click", function() {
	//add sapphire value
	userNum = userNum + sapphireButton;
	document.getElementById("scoreHere").innerHTML="You have <h3>"+userNum+"</h3>";
	
	if (userNum === targetNumber){
		alert("Oh Swit Bitly! You Won!");
		wins= wins + 1;
		document.getElementById("wins").innerHTML="Wins <h3>"+wins+"</h3>";
	

	} else if( userNum > targetNumber) {
		alert("Oh No! You Lost!");
		losses= losses +1;
		document.getElementById("losses").innerHTML="Losses <h3>"+losses+"</h3>";	
}});

//Diamond
document.getElementById("diamBut").addEventListener("click", function() {
	//add diamond value
	userNum = userNum + diamondButton;
	document.getElementById("scoreHere").innerHTML="You have <h3>"+userNum+"</h3>";

	if (userNum === targetNumber){
		alert("Oh Swit Bitly! You Won!");
		wins= wins + 1;
		document.getElementById("wins").innerHTML="Wins <h3>"+wins+"</h3>";

	} else if( userNum > targetNumber) {
		alert("Oh No! You Lost!");
		losses= losses +1;
		document.getElementById("losses").innerHTML="Losses <h3>"+losses+"</h3>";	
}});


//Emerald
document.getElementById("emerBut").addEventListener("click", function() {
	//add emerald value
	userNum = userNum + emeraldButton;
	document.getElementById("scoreHere").innerHTML="You have <h3>"+userNum+"</h3>";

	if (userNum === targetNumber){
		alert("Oh Swit Bitly! You Won!");
		wins= wins + 1;
		document.getElementById("wins").innerHTML="Wins <h3>"+wins+"</h3>";

	} else if( userNum > targetNumber) {
		alert("Oh No! You Lost!");
		losses= losses +1;
		document.getElementById("losses").innerHTML="Losses <h3>"+losses+"</h3>";	
}});


//Reset Button (set w&L  to equal 0)
document.getElementById("resetButton").addEventListener("click", function() {

  targetNumber.reset = location.reload();
});



document.getElementById("projectedNumber").innerHTML="You have to match <h3>"+targetNumber+"</h3>";


console.log(rubyButton);
console.log(sapphireButton);
console.log(diamondButton);
console.log(emeraldButton);