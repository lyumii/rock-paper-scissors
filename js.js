// math.random calls random float between 0 and 1, floor rounds it down
function getComputerChoice() {
    let roundChoice = Math.floor(Math.random() * 3 + 1);
    // console.log(roundChoice);

    if (roundChoice === 1) {
          return "rock";
    } else if (roundChoice === 2) {
          return "paper";
    } else {
          return "scissors";
    }
}

//cant modify promt before the value is returned (roundchoicetwo.trim() was a bust and made me cry)
function getHumanChoice() { 
   let roundChoiceTwo = prompt("Rock, Paper or Scissors?");
    return roundChoiceTwo;
}

//remember not to put global variables for things that will be called many times or update them after every use

let humanScore = 0;
let computerScore = 0;


//try to group up as much as possible, humanchoice and computerchoice wont work if called here, bcz its a nested function in playgame
function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
          console.log("You win!", humanChoice.toUpperCase(), " beats ", computerChoice.toUpperCase());
           humanScore++; 
    } else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
          console.log("Computer wins!", computerChoice.toUpperCase(), " beats ", humanChoice.toUpperCase());
           computerScore++; 
    } else {
          console.log("It's a draw! Try again.");
}}

//humanchoice and computerchoice have to be called in the while loop so they will be triggered during every loop execution
function playGame() {
    while ((humanScore < 5) && (computerScore < 5)) {
         let humanChoice = getHumanChoice().trim().toLowerCase();
         let computerChoice = getComputerChoice(); 

         playRound(humanChoice, computerChoice);
         console.log(humanScore, computerScore);
    } 
}

function announceWinner() {
    if (humanScore === 5) {
          alert("YOU WIN! CONGRATS");
    } else {
          alert("COMPUTER OVERLORD WINS T_T");
}}

playGame();

announceWinner();