let playerScore = 0, computerScore = 0;
let playerMove = null;
let playerScoreBox = document.getElementById("playerScore");
let computerScoreBox = document.getElementById("computerScore");
let playerChoiceBox = document.getElementById("playerChoice")
let computerChoiceBox = document.getElementById("computerChoice")
let gameOver = false;

function getcomputerChoice() {
    let compChoiceNumber = Math.floor(Math.random() * 3)
    if (compChoiceNumber === 1) {
        console.log("rock");
        return "rock"
    } else if (compChoiceNumber === 2) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors");
        return "scissors";
    }
}

function playRound(playerChoice, computerSelection) {
    if (playerChoice === computerSelection) {
        return 
    } else if (playerChoice === "rock") {
        if (computerSelection === "paper") {
            return computerScore++
        } else {
            return playerScore++
        };
    } else if (playerChoice === "paper") {
        if (computerSelection === "scissors") {
            return computerScore++
        } else {
            return playerScore++
        };
    } else {
        if (computerSelection === "rock") {
            return computerScore++
        } else {
            return playerScore++
        };
    };
}

function playerSelect(move) {
    if (!gameOver) {
        let computerMove = getcomputerChoice();
        playerMove = move;
        updateMoves(playerMove, computerMove)
        playRound(playerMove, computerMove);
        console.log(playerScore, computerScore);
        updateScoreBoard();
    }
}

function updateMoves(playerMove, computerMove) {
    if (playerMove === "rock") {
        playerChoiceBox.innerText = "✊";
    } else if (playerMove === "paper") {
        playerChoiceBox.innerText = '📜';
    } else if (playerMove === "scissors") {
        playerChoiceBox.innerText = "✄";
    }
    if (computerMove === "rock") {
        computerChoiceBox.innerText = "✊";
    } else if (computerMove === "paper") {
        computerChoiceBox.innerText = '📜';
    } else if (computerMove === "scissors") {
        computerChoiceBox.innerText = "✄";
    }
}


function updateScoreBoard() {
    playerScoreBox.innerText = "Your Score: " + playerScore;
    computerScoreBox.innerText = "Opponent Score: " + computerScore;
    if (playerScore >= 5) {
        winner("YOU WON!");
    } else if (computerScore >= 5) {
        winner("Try Again, Loser");
    }
}

function winner(text) {
    gameOver = true;
    document.getElementById("winner").innerText = text;
    let newGame = document.createElement("button");
    newGame.innerText = "New Game"
    newGame.id = "newGame"
    document.body.appendChild(newGame);
    
    newGame.addEventListener("click", rematch);
}

function rematch() {
    computerChoiceBox.innerText ='';
    playerChoiceBox.innerText = '';
    gameOver = false;
    console.log("new");
    playerScore = 0;
    computerScore = 0;
    updateScoreBoard();
    document.getElementById("winner").innerText = "";
    document.body.removeChild(document.getElementById("newGame"));
}

rematch();

