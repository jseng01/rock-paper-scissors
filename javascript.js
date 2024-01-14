function getRandomChoice(){
    let randomOptions = ["R", "P", "S"];
    let RandomChoice = randomOptions[Math.floor(Math.random()*randomOptions.length)];
    return RandomChoice
}
// add a function to randomly return either R, P, or S for rock, paper and scissors
function getUserChoice(){
    userChoice = prompt("Choose Rock, Paper, or Scissors")
    return userChoice
}
// add a function that prompts the user to input either rock, paper, or scissors
function capatalizeUserChoice(){
    getUserChoice()
    let capitalUserChoice = userChoice.toUpperCase()
// change user input to uppercase
    if (capitalUserChoice === "ROCK" || capitalUserChoice === "PAPER" || capitalUserChoice === "SCISSORS"){
        return capitalUserChoice.slice(0,1)}
        else {
            console.log("Please select either ROCK, PAPER, OR SCISSORS")
            getUserChoice()
        }
}
// add a function that verifies that the user input was rock, paper, or scissors
function gameRound(){
    let playerOne = capatalizeUserChoice()
    console.log(playerOne)
    let NPC = getRandomChoice()
    console.log(NPC)
    if (playerOne === "R" && NPC === "R"){
         console.log("It's a tie! Play Again")
         gameRound()
    }
    else if (playerOne=== "R" && NPC === "P"){
        console.log("You lose! Rock loses to paper!")
        return 
    }
    else if (playerOne=== "R" && NPC === "S"){
        console.log("You win! Rock beats scissors!")
        return "Win"
    }
    else if (playerOne=== "P" && NPC === "P"){
        console.log("It's a tie! Play Again")
        gameRound()
    }
    else if (playerOne=== "P" && NPC === "S"){
        console.log("You lose! Paper loses to scissors!")
        return 
    }
    else if (playerOne=== "P" && NPC === "R"){
        console.log("You win! Paper beats rock!")
        return "Win"
    }
    else if (playerOne=== "S" && NPC === "S"){
        console.log("It's a tie! Play again")
        gameRound() 
    }
    else if (playerOne=== "S" && NPC === "R"){
        console.log("You lose! Scissors lose to Rock")
        return 
    }
    else if (playerOne=== "S" && NPC === "P"){
        console.log("You win! Scissors beat paper!")
        return "Win"
    }
}
gameRound()