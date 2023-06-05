const choices= ["Rock", "Paper", "Scissors"]

buttons= document.querySelectorAll('.btn');

// console.log(buttons);

let playerChoice= null;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        playerChoice=  choices[parseInt(btn.id)].toLowerCase();
        singleRound(playerChoice);
    });
});


function getRndInteger() {
    return Math.floor(Math.random() *3);
  }

function getComputerChoice(){
    let index= getRndInteger();
    return choices[index];
}




// console.log(getComputerChoice() + getPlayerChoice());

function singleRound(playerChoice){
    let computer= getComputerChoice().toLowerCase();
    console.log("Computer Chose: " + computer+"  Player Chose: " +playerChoice);

    if(computer === playerChoice) {
        console.log("There's a Tie");
        return "tie";
    }

    else if((computer==="scissors" && playerChoice==="paper") || (computer==="rock" && playerChoice==="scissors") || (computer==="paper" && playerChoice==="rock")){
        console.log("Computer Wins!");
        return "computer";
    }

    else{
        console.log("You Win!");
        return "player";
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

