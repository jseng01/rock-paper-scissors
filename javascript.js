function getRandomChoice(){
    let randomOptions = ["R", "P", "S"];
    let RandomChoice = randomOptions[Math.floor(Math.random()*randomOptions.length)];
    console.log(RandomChoice)
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
        return capitalUserChoice}
        else {
            console.log("Please select either ROCK, PAPER, OR SCISSORS")
            getUserChoice()
        }
}
// add a function that verifies that the user input was rock, paper, or scissors
function gameRound(){
    let playerOne = capatalizeUserChoice()
    let NPC = getRandomChoice()
}