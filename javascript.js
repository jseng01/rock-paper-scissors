let rBtn = document.querySelector('#ROCK');
rBtn.addEventListener('click', function(){
gameRound('R');});

let pBtn = document.querySelector('#PAPER');
pBtn.addEventListener('click', function(){
gameRound('P'); });

let sBtn = document.querySelector('#SCISSORS');
sBtn.addEventListener('click', function() {
    gameRound('S'); });
// these three buttons trigger the gameround function and pass the player selection to it

function getRandomChoice(){
    let randomOptions = ["R", "P", "S"];
    let RandomChoice = randomOptions[Math.floor(Math.random()*randomOptions.length)];
    return RandomChoice
}

let winCount = 0
let lossCount = 0
    
function gameRound(playerOne){
    let result = document.querySelector('#gameLog');
    let NPC = getRandomChoice()
    let winOrLoss = ""
        if (playerOne === NPC){
            result.textContent = "It's a tie! Play Again";
            winOrLoss = "T";
        }
        else if ((playerOne=== "R" && NPC === "P") ||
                 (playerOne=== "S" && NPC === "R") ||
                 (playerOne=== "P" && NPC === "S")){
           result.textContent = "You Lose!"
           lossCount++;
        }
        else if((playerOne=== "R" && NPC === "S") ||
                (playerOne=== "P" && NPC === "R") ||
                (playerOne=== "S" && NPC === "P")){
            result.textContent = "You win!";
            winCount++;
    }
        game();
        
}
// determines if round is a win or loss then changes the score accordingly

function game(){ 
    let result = gameRound;
    let scoreCard = document.querySelector('#scoreCard');
    if (winCount < 3 && lossCount <3){
        scoreCard.textContent = "win count: " + winCount  +" loss count: " + lossCount;}
    else if(winCount === 3 || lossCount === 3){
        if (winCount === 3){
            scoreCard.textContent = "You won the game!"
            winCount = 0;
            lossCount = 0;
        }
        else if(lossCount === 3){
            scoreCard.textContent ="You lost the game";
            lossCount = 0;
            winCount = 0;
        }
    }}
// keeps score of the game, announces a winner, and resets the score when a winner is decided