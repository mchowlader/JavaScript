//Guessing Game
//Guess a number from 1 to 5
//Generate a random number between 1 to 5
//If the guess number match the random number; then show won or lost
//Run the game for the 5 times
//Show the number of wons and lost

var count = 0;
var won = 0;
var fail = 0;

for(var x = 1; x <= 5; x++)
{
    var guessingNumber = parseInt(prompt("Guessing a number from 1 to 5 : "));
    var randomNumber = Math.floor(Math.random() * 5 + 1);

    count++;
    if(guessingNumber == randomNumber)
    {
        console.log("Yes! Guess the number.")
        won++;
    }
    else
    {
        console.log("You have the lost, guessing numver was ", randomNumber);
        fail++;
        continue;
    }
}

document.write("You try the game for the 5 times" + "<br>");
document.write("You won " + won +" times " + "<br>");
document.write("you failed " + fail +" times"+ "<br>");