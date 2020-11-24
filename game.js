let options = ["rock", "paper", "scissors"]

let optionsURL = ["./images/icon.rock.svg", "./images/icon.paper.svg", "./images/icon.scissors.svg"]

let computerChoice = "";
let userChoice = "";
let userChoiceNumber = "";
let gameResult = "";
let score = 0;

//handles the game
$(".button").click(function() {

    userChoiceNumber = options.indexOf($(this).attr("id"));
    userChoice = $(this).attr("id");
    computerChoice = computersPick();
    gameResult = compare(userChoiceNumber, computerChoice);


    $(".choiceSelection").addClass("invisible");
    $(".resultsContainer").removeClass("invisible");

    $("#user").attr("src", "images/icon-" + userChoice + ".svg")
    $("#player").addClass(userChoice);
    $("#player").addClass("button");

    $("#machine").attr("src", "images/icon-" + options[computerChoice] + ".svg")
    $("#computer").addClass(options[computerChoice]);
    $("#computer").addClass("button");

    $("#status").text(gameResult);
    $(".value").text(score);

});

//resets the game besides score
$(".playAgain").click(function() {
    $(".resultsContainer").addClass("invisible");
    $(".choiceSelection").removeClass("invisible");
    $("#player").removeClass(userChoice);
    $("#player").removeClass(userChoice);
    $("#computer").removeClass(options[computerChoice]);
    $("#computer").removeClass("button");
});


function computersPick() {
    return Math.floor(Math.random() * 3);
}
//compares two numbers to see which is greater/check for scissors(2) vs rock(0) condition
function compare(choice1, choice2) {
    console.log(choice1);
    console.log(choice2);

    if (choice1 == choice2) {
        return "It's a Tie!";

    }
    if (choice1 == options.length - 1 && choice2 == 0) {
        score--;
        return "The Computer Won!";
    }
    if (choice2 == options.length - 1 && choice1 == 0) {
        score++;
        return "You Won!!!";
    }
    if (choice1 > choice2) {
        score++;
        return "You Won!!!";
    } else {
        score--;
        return "The Computer Won!";
    }

}
//rules modal
$(".rulesButton").on("click", function() {
    $(".rulesOverlay, .rulesContainer").addClass("active");
});

$(".closeButton, .rulesOverlay").on("click", function() {
    $(".rulesOverlay, .rulesContainer").removeClass("active");
});