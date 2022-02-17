//Guessing Game
//Guess a number from 1 to 5
//Generate a random number between 1 to 5
//If the guess number match the random number; then show won or lost
//Run the game for the 5 times
//Show the number of wons and lost

var numberOfwon = 0;
var numberOfFail = 0;

for(var x = 1; x <= 5; x++)
{
    var guessingNumber = parseInt(prompt("Guessing a number from 1 to 5 : "));
    var randomNumber = Math.floor(Math.random() * 5 + 1);

    if(guessingNumber == randomNumber)
    {
        console.log("Yes! Guess the number.")
        numberOfwon++;
    }
    else
    {
        console.log("You have the lost, guessing numver was ", randomNumber);
        numberOfFail++;
        continue;
    }
}

document.write("You try the game for the 5 times" + "<br>");
document.write("You won " + numberOfwon +" times " + "<br>");
document.write("you failed " + numberOfFail +" times"+ "<br>");