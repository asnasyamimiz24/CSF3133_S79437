/* Global Variables */
let wins = 0;
let losses = 0;
let draws = 0;

let results = [];
let gameStarted = false;
let round = 0;


/* Function to Start the Game */
function startGame() {

    // Get player name
    let name = document.getElementById("playerName").value.trim();

    // Check if name is empty
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Start the game
    gameStarted = true;

    // Display welcome message
    document.getElementById("welcome").innerHTML =
        "Welcome, " + name + "!";

    // Display start date and time
    document.getElementById("startTime").innerHTML =
        "Game Started: " + new Date();

}


/* Function to Get Random Computer Choice */
function getComputerChoice() {

    // Array containing three choices
    let choices = ["rock", "paper", "scissors"];

    // Generate random number from 0 to 2
    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}


/* Function to Play One Round */
function playRound(playerChoice) {

    // Check whether the game has started
    if (gameStarted === false) {
        alert("Click Start Game first.");
        return;
    }

    // Get computer choice
    let computerChoice = getComputerChoice();

    // Variables for result and result colour
    let result = "";
    let resultColor = "";

    // Decide the winner
    if (playerChoice === computerChoice) {

        result = "Draw";
        resultColor = "grey";
        draws++;

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {

        result = "Win";
        resultColor = "green";
        wins++;

    } else {

        result = "Lose";
        resultColor = "red";
        losses++;

    }

    // Update player image
    document.getElementById("playerImg").src =
        playerChoice + ".png";

    // Update computer image
    document.getElementById("computerImg").src =
        computerChoice + ".png";

    // Display game result
    document.getElementById("result").innerHTML =
        "You chose " + playerChoice +
        " | Computer chose " + computerChoice +
        " | Result: " + result;

    // Change result colour
    document.getElementById("result").style.color =
        resultColor;

    // Update scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Store result in array
    results.push(result);

    // Increase round number
    round++;

    // Add new row to history table
    document.getElementById("history").innerHTML +=
        "<tr>" +
        "<td>" + round + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + result + "</td>" +
        "</tr>";

    // Clear previous summary
    document.getElementById("summary").innerHTML = "";

}


/* Function to Show Game Summary */
function showSummary() {

    // Count total wins using a for loop
    let totalWins = 0;

    for (let i = 0; i < results.length; i++) {

        if (results[i] === "Win") {
            totalWins++;
        }

    }

    // Calculate total rounds
    let totalRounds = results.length;

    // Calculate win percentage
    let percentage = 0;

    if (totalRounds > 0) {
        percentage = Math.round((totalWins / totalRounds) * 100);
    }

    // Display summary
    document.getElementById("summary").innerHTML =
        "You played " + totalRounds +
        " rounds and won " + percentage + "%.";

}


/* Function to Reset the Game */
function resetGame() {

    // Reset all scores
    wins = 0;
    losses = 0;
    draws = 0;

    // Clear results array
    results = [];

    // Reset round number
    round = 0;

    // Stop the game
    gameStarted = false;

// Update scoreboard
    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    // Clear history table except header row
    document.getElementById("history").innerHTML =
        "<tr>" +
        "<th>Round</th>" +
        "<th>You</th>" +
        "<th>Computer</th>" +
        "<th>Result</th>" +
        "</tr>";

    // Clear result and summary messages
    document.getElementById("result").innerHTML =
        "Result will appear here.";

    document.getElementById("result").style.color = "black";

    document.getElementById("summary").innerHTML = "";

    // Clear welcome message and start time
    document.getElementById("welcome").innerHTML = "";
    document.getElementById("startTime").innerHTML = "";

    // Reset images
    document.getElementById("playerImg").src = "rock.png";
    document.getElementById("computerImg").src = "rock.png";

    // Clear player name
    document.getElementById("playerName").value = "";

}