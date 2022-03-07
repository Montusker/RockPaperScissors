function computerPlay() {
    let n = Math.floor(Math.random() * 3)
    switch (n) {
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

// function playerSelection() {
//     let str = prompt("Please choose Rock, Paper, or Scissors", "Rock");

//     switch (str.toLowerCase()) {
//         case "rock":
//             return "Rock";
//         case "paper":
//             return "Paper";
//         case "scissors":
//             return "Scissors";
//         default:
//             return null;

//     }
// }


function playRound(choice) {
    computerChoice = computerPlay();
    playerChoice = choice;

    switch (playerChoice) {
        case "rock":
            if (computerChoice === "Rock")
                return "You tie! Rock ties with Rock!";
            else if (computerChoice === "Paper")
                return "You Lose! Paper beats Rock";
            else
                return "You Win! Rock beats Scissors";
        case "paper":
            if (computerChoice === "Rock")
                return "You Win! Paper beats Rock!";
            else if (computerChoice === "Paper")
                return "You Tie! Paper ties with Paper";
            else
                return "You Lose! Scissors beats Paper";
        case "scissors":
            if (computerChoice === "Rock")
                return "You Lose! Rock beats Scissors!";
            else if (computerChoice === "Paper")
                return "You Win! Scissors beats Paper";
            else
                return "You Tie! Scissors ties with Scissors";

    }



}

let playerScore = 0;
let computerScore = 0;
let numberOfTies = 0;


const winner = document.querySelector('#winner');
const btns = document.querySelectorAll('.btn');
Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click', function() {
        let temp = playRound(this.value);
        winner.innerHTML = temp;
        whoWon(temp);
        if (playerScore == 5 || computerScore == 5) {
            gameOver();
        }

    });
});

function whoWon(str) {
    if (str.includes("Win")) {
        playerScore++;
        document.getElementById('playerScore').innerHTML = playerScore;
    } else if (str.includes("Lose")) {
        computerScore++;
        document.getElementById('computerScore').innerHTML = computerScore;
    } else {
        numberOfTies++;
        document.getElementById('ties').innerHTML = numberOfTies;
    }
    return 0;
}

function gameOver() {
    if (playerScore == 5) {
        document.getElementById('gameOver').innerHTML = "You Won!";
    } else if (computerScore == 5) {
        document.getElementById('gameOver').innerHTML = "You Lost :(";
    }
    playerScore = 0;
    computerScore = 0;
}



// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
//   }

//   function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
//   }

//   const keys = Array.from(document.querySelectorAll('.key'));
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);


// function game(){
//     let playerScore = 0;
//     let computerScore = 0;
//     let numberOfTies = 0;

//     for (let i = 0; i < 5; i++) {
//         let temp = playRound();
//         console.log(temp);
//         if (temp.includes("Win")){
//             playerScore++;
//         }
//         else if (temp.includes("Lose")){
//             computerScore++;
//         }
//         else
//             numberOfTies++;
//      }

//      console.log("player" + playerScore);
//      console.log("computer" + computerScore);
//      console.log("ties"+ numberOfTies);
// }

// game();