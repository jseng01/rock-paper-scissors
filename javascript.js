function getComputerChoice(){
    let options = ["ROCK", "PAPER", "SCISSORS"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice
}

// Add a function that will randomly return either rock, paper, or scissors
function getUserChoice(){
    selection=prompt("Choose: ROCK, PAPER, or, SCISSORS")
    return selection
}
// Add a function that prompts the user to input either rock paper or scissors


function playerSelection(){
    getUserChoice()
    selectionUpperCase= selection.toUpperCase()
    // Changes user input to upper case
    if (selectionUpperCase === "ROCK" || selectionUpperCase === "PAPER" || selectionUpperCase === "SCISSORS"){
        return selectionUpperCase
    }
    else {
        console.log("Please select either ROCK, PAPER, OR SCISSORS")
        getUserChoice()
    }
}
// Get an input of one of the options from the user, or have them enter a new input


// Add a function that will plays a single round of rock paper scissors using the computer generated choice and the user input
function gameRound(){
    let gameChoice = getComputerChoice()
    let playerChoice = playerSelection()
    if (playerChoice==="ROCK" && gameChoice==="ROCK"){
        console.log("It's a tie! Play again!")
        gameRound()
    }
    else if (playerChoice==="ROCK" && gameChoice==="SCISSORS"){
             console.log("You win! Rock beats Scissors")
    }
    else if (playerChoice==="ROCK" && gameChoice==="PAPER"){
        console.log("You lose! Paper beats Rock")
    }
    else if (playerChoice==="PAPER" && gameChoice==="PAPER"){
        console.log("It's a tie! Play again!")
        gameRound()
    }
    else if (playerChoice==="PAPER" && gameChoice==="ROCK"){
        console.log("You win! Paper beats Rock")
    }
    else if (playerChoice==="PAPER" && gameChoice==="SCISSORS"){
        console.log("You lose! Scissors beat paper")
    }
    else if (playerChoice==="SCISSORS" && gameChoice==="SCISSORS"){
        console.log("It's a tie! Play again!")
        gameRound()
    }
    else if (playerChoice==="SCISSORS" && gameChoice==="PAPER"){
        console.log("You win! Scissors beat paper!")
    }
    else if (playerChoice==="SCISSORS" && gameChoice==="ROCK"){
        console.log("You lose! Rock beats Scissors")
    }

}
gameRound()
// Add a function that loops the round funtion until a best of five game has been decided