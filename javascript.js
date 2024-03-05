let rBtn = document.querySelector('#ROCK');
rBtn.addEventListener('click', function(){
gameRound('R');});

let pBtn = document.querySelector('#PAPER');
pBtn.addEventListener('click', function(){
gameRound('P'); });

let sBtn = document.querySelector('#SCISSORS');
sBtn.addEventListener('click', function() {
    gameRound('S'); });


function getRandomChoice(){
    let randomOptions = ["R", "P", "S"];
    let RandomChoice = randomOptions[Math.floor(Math.random()*randomOptions.length)];
    return RandomChoice
}

function gameRound(playerOne){
    
    let NPC = getRandomChoice()
    if (playerOne === NPC){
         console.log("It's a tie! Play Again")
    }
    else if (playerOne=== "R" && NPC === "P"){
        console.log("You lose! Rock loses to paper!")
        return "L"
    }
    else if (playerOne=== "R" && NPC === "S"){
        console.log("You win! Rock beats scissors!")
        return "W"
    }
    else if (playerOne=== "P" && NPC === "S"){
        console.log("You lose! Paper loses to scissors!")
        return "L"
    }
    else if (playerOne=== "P" && NPC === "R"){
        console.log("You win! Paper beats rock!")
        return "W"
    }
    else if (playerOne=== "S" && NPC === "R"){
        console.log("You lose! Scissors lose to Rock")
        return "L"
    }
    else if (playerOne=== "S" && NPC === "P"){
        console.log("You win! Scissors beat paper!")
        return "W"
    }
    else {
        gameRound()
    }
}
// add a function containing a series of if else statements, that represent the rules of rock, paper, scissors

// function game(){
//     let winCount = 0
//     let lossCount = 0
//     while (winCount < 3 && lossCount < 3){   
//         let results = gameRound()
//         if (results === "L"){
//             lossCount++
//             console.log("LossCount= " + lossCount)
//         }
//         else {
//             winCount++
//             console.log("WinCount= " + winCount)
//         }
//     }
//     return {winCount, lossCount}
// }
// add a function that keeps track of how many wins and losses there are

// function result(){
//     let finalScore = game()
//     let wins = finalScore.winCount
//     let losses = finalScore.lossCount
//         if(wins === 3){
//             console.log("Congratulations! You won the game "+ wins +" to "+ losses)
//         }
//         else {
//             console.log("Sorry, you lost this time with a score of " + losses + " to " + wins)
//         }     
//     }
    // add a function that tells you wether you won or lost the game!
// result()

// rps ui additions
