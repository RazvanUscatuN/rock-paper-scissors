//Variable that is used for computer choice
const gameOptions = ["rock", "paper", "scissors"];

//Global Variable in order to keep score
let userScore = 0;
let computerScore = 0;


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
    
    if(playerSelection == computerSelection){
        console.log("Draw");
        return "draw";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You win! Rock beats scissors. You get this point");
        return "player";
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper beats rock. Computer get this point");
        return "computer";
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats Rock. You get this point");
        return "player";
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You lose! Scissors beats Paper. Computer get this point");
        return "computer";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You win! Scissors beats paper . You get this point");
        return "player";
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You lose! Rock beats Scissors. Computer get this point");
        return "computer";
    }
}



// Function to handle the button click
function handleButtonClick(playerChoice) {
    const paraResult = document.querySelector("#winner-para");
    //make sure that the span is not keep adding the result
    const oldSpan = paraResult.querySelector("span");
    

    if (oldSpan) {
        oldSpan.remove();
    }

    const paraUserScore = document.querySelector("#user-score-para")
    let scoreUserSpan = paraUserScore.querySelector("span");
    if (!scoreUserSpan) {
        scoreUserSpan = document.createElement("span");
        paraUserScore.appendChild(scoreUserSpan);
    }

    const paraComputerScore = document.querySelector("#computer-score-para")
    let scoreComputerSpan = paraComputerScore.querySelector("span");
    if (!scoreComputerSpan) {
        scoreComputerSpan = document.createElement("span");
        paraComputerScore.appendChild(scoreComputerSpan);
    }

    const spanText = document.createElement("span");
    const computerChoice = getComputerChoice(gameOptions);
    let whoWins = playRound(playerChoice, computerChoice);
    
  
    if(whoWins == "player"){
        spanText.textContent = "Player Wins a point";
        paraResult.appendChild(spanText);
        userScore += 1;

        // Update the score in the existing span element
        scoreUserSpan.textContent = userScore;
        
    }else if(whoWins == "computer"){
        spanText.textContent = "Computer Wins a point";
        paraResult.appendChild(spanText);
        computerScore += 1;

        // Update the score in the existing span element
        scoreComputerSpan.textContent = computerScore;
        
    }else{
        spanText.textContent = "Draw, no point added";
        paraResult.appendChild(spanText);
    }
    if(userScore == 5){
        alert("Player Win!")
        userScore = 0;
        computerScore = 0;
        window.location.reload();

    }else if(computerScore == 5){
        alert("Computer win!")
        userScore = 0;
        computerScore = 0;
        window.location.reload();
    }
}





// Add event listeners to each button using querySelector
document.querySelector("#btn-rock").addEventListener("click", function() {
    handleButtonClick("rock");
});

document.querySelector("#btn-paper").addEventListener("click", function() {
    handleButtonClick("paper");
});

document.querySelector("#btn-scissors").addEventListener("click", function() {
    handleButtonClick("scissors");
});






