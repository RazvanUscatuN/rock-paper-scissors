//Variable that is used for computer choice
const gameOptions = ["rock", "paper", "scissors"];


//Create function to get user input with prompt
function playerSelection() {
    let userChoice = prompt("Type your choice: ");
    userChoice = userChoice.toLocaleLowerCase();
    if (gameOptions.includes(userChoice)){
        return userChoice;
    }
    else {
        console.log("Not a valid option, refresh the page and try again")
    }
    return userChoice;
}


//Get computer choice that choice a random value between rock paper scissors
function getComputerChoice(options) {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}


//Game logic of a round
function playRound(playerSelection, computerSelection) {
    let playerPoint = "player";
    let computerPoint = "computer";
    let drawPoint = "draw";

    if(playerSelection == computerSelection){
        console.log("Draw");
        return drawPoint;
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You win! Rock beats scissors. You get this point");
        return playerPoint;
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper beats rock. Computer get this point");
        return computerPoint;
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats Rock. You get this point");
        return playerPoint;
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You lose! Scissors beats Paper. Computer get this point");
        return computerPoint;
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You win! Scissors beats paper . You get this point");
        return playerPoint;
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lose! Rock beats Scissors. Computer get this point");
        return computerPoint;
    }
}


//Logic of game with 5 round and keeping score and show it
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let player;
    let computer;

    for(let i=0; i<5; i++){
        player = playerSelection();
        computer = getComputerChoice(gameOptions);
        playPoint = playRound(player,computer);

        if ( playPoint == "player"){
            playerScore++; 
        } else if (playPoint == "computer"){
            computerScore++;            
        } else {
            continue;
        }
    }

    console.log(`This is player score: ${playerScore}`);
    console.log(`This is computer score: ${computerScore}`)
}
    


game();



