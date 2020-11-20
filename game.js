
let options = ["Rock", "Paper", "Scissors"]

let optionsURL = ["./images/icon.rock.svg", "./images/icon.paper.svg", "./images/icon.scissors.svg"]

let computerChoice = ""
let userChoice = "";
let score = 0;
$(".button").click(function() {
    userChoice = options.indexOf($(this).attr("id"));
    console.log(userChoice);
    computerChoice = computersPick();
    console.log(computerChoice);
    console.log(compare(userChoice, computerChoice));

//TODO: Show Side By Side. Edit middle text and create a play again button.

});


function computersPick(){
    return Math.floor(Math.random() * 3);
}
function compare(choice1, choice2){
    if (choice1 == choice2) {
        return "Tie";
    }
    if (choice1 == options.length - 1 && choice2 == 0) {
        score--;
        return "Right wins";
    }
    if (choice2 == options.length - 1 && choice1 == 0) {
        score++;
        return "Left wins";
    }
    if (choice1 > choice2) {
        score++;
        return "Left wins";
    } else {
        score--;
        return "Right wins";
    }

}
//TODO: Rules Modal Popup.

