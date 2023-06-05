const choices= ["Rock", "Paper", "Scissors"]

let buttons= document.querySelectorAll('.btn');
let results= document.querySelector('.results');
let resetBtn= document.querySelector('.reset');

let player_score= document.querySelector('.player-score');
let computer_score= document.querySelector('.computer-score');

let player_display= document.querySelector('.player');
let computer_display= document.querySelector('.computer');


// console.log(buttons);


// DECLARING AND INITIALISING VARIOUS VARIABLES 

let rounds = 0;
let playerWins= 0;
let computerWins= 0;


// ADDING EVENT LISTENERS TO ALL THE BUTTONS


buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        if(rounds<5){
            let playerChoice=  choices[parseInt(btn.id)].toLowerCase();
            singleRound(playerChoice);
            
            if(rounds===5){
                finalResult();
            }
        }
    });
});


resetBtn.addEventListener('click', reset);




// UTILITY FUNCTION DEFINITIONS FOR INTERNAL LOGIC 

function getRndInteger() {
    return Math.floor(Math.random() *3);
  }

function getComputerChoice(){
    let index= getRndInteger();
    return choices[index];
}

function updatePlayerWins(){
    playerWins+=1
    player_score.textContent = playerWins;
}
function updateComputerWins(){
    computerWins+=1
    computer_score.textContent= computerWins;
}


// DOM MANIPULATION FUNCTIONS

function finalResult(){
    const finalDiv = document.createElement('div');
    finalDiv.textContent = "Player Score: " + playerWins + " Computer Score: "+ computerWins;

    results.appendChild(finalDiv);
}

function roundResult(result){
    div = document.createElement('div');
    if(result==="Tie"){
        div.textContent= "The result is a Tie!"; 
    }
    else{
        div.textContent= result+" Wins!!";
    }

    if(results.firstElementChild != null){
        results.removeChild(results.firstElementChild);
    }

    results.appendChild(div);
}


function reset(){
    playerWins= computerWins= rounds= 0;
    
    while(results.firstElementChild){
        results.removeChild(results.firstElementChild);
    }

    player_score.textContent= 0;
    computer_score.textContent=0;

}



// FUNCTION CONTAINING LOGIC OF THE GAME 


// console.log(getComputerChoice() + getPlayerChoice());

function singleRound(playerChoice){
    let computer= getComputerChoice().toLowerCase();
    console.log("Computer Chose: " + computer+"  Player Chose: " +playerChoice);

    player_display.textContent= playerChoice.toUpperCase();
    computer_display.textContent= computer.toUpperCase();


    rounds+=1;

    if(computer === playerChoice) {
        console.log("There's a Tie");
        roundResult("Tie");
    }

    else if((computer==="scissors" && playerChoice==="paper") || (computer==="rock" && playerChoice==="scissors") || (computer==="paper" && playerChoice==="rock")){
        console.log("Computer Wins!");
        updateComputerWins();
        roundResult("Computer")
    }

    else{
        console.log("You Win!");
        updatePlayerWins();
        roundResult("Player");
    }
}

// function game(){
//     let playerWins=0;
//     let ties= 0;
//     for(let i=0; i<5; i++){
//         let winner = singleRound();
//         if(winner === "player") playerWins+=1;
//         else if(winner=== "tie") ties+=1;
//     }

//     if(playerWins> (5-ties-playerWins))console.log("Player Wins the Game!!!");
//     else if(playerWins< (5-ties-playerWins))console.log("Computer Wins the Game!!!");
//     else console.log("The Game Ties!! Both player and computer won the same number of rounds");
// }

// game();

// for(let i=0; i<10; i++){
//     console.log(getRndInteger());
// }

