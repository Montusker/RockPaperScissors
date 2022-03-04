
function computerPlay(){
    let n = Math.floor(Math.random()*3)
    switch (n){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return null;
    }

}

function playerSelection(){
    let str = prompt("Please choose Rock, Paper, or Scissors", "Rock");
    
    switch (str.toLowerCase()){
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            return null;

    }
}


function playRound(){
    computerChoice = computerPlay();
    playerChoice = playerSelection();

    switch (playerChoice){
        case "Rock":
            if (computerChoice === "Rock")
                return "You tie! Rock ties with Rock!";
            else if (computerChoice === "Paper")
                return "You lose! Paper beats Rock";
            else 
                return "You Win! Rock beats Scissors";
        case "Paper":
            if (computerChoice === "Rock")
                return "You Win! Paper beats Rock!";
            else if (computerChoice === "Paper")
                return "You Tie! Paper ties with Paper";
            else 
                return "You Lose! Scissors beats Paper";
        case "Scissors":
            if (computerChoice === "Rock")
                return "You Lose! Rock beats Scissors!";
            else if (computerChoice === "Paper")
                return "You Win! Scissors beats Paper";
            else 
                return "You Tie! Scissors ties with Scissors";

    }
        


}
console.log(playRound());

