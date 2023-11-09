
const gameOptions = ["rock", "paper", "scissors"];

//Create function to get user input with prompt
function playerSelection() {
    let userChoice = prompt("Type your choice: ");
    userChoice = userChoice.toLocaleLowerCase();
    if (gameOptions.includes(userChoice)){
        console.log("Yea that's valid, let's play the game!");
        return userChoice;
    }
    else {
        console.log("Not a valid option, refresh the page and try again")
    }
    
}

//Get computer choice that choice a random value between rock paper scissors
//create a function that play a round based on user and computer schoice
// that function will show the winner like: "You Lose! Paper beats Rock"
//create a function game() that will play a round 5 times and keep score 



function getComputerChoice(options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // your code here!
}


//  let result = playerSelection();
//  console.log(result);
 console.log(getComputerChoice(gameOptions));
