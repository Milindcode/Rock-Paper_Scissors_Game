const choices= ["Scissors", "Paper", "Rock"]


function getRndInteger() {
    return Math.floor(Math.random() *3);
  }

function getComputerChoice(){
    let index= getRndInteger();
    return choices[index];
}

function getPlayerChoice(){
    let choice= prompt("Enter your choice: ", "Rock");
    return choice.toLowerCase();
}

// console.log(getComputerChoice() + getPlayerChoice());

function singleRound(){
    let computer= getComputerChoice().toLowerCase();
    let player = getPlayerChoice();
    console.log("Computer Chose: " + computer+"  Player Chose: " +player);

    if(computer === player) {
        console.log("There's a Tie");
        return "tie";
    }

    else if((computer==="scissors" && player==="paper") || (computer==="rock" && player==="scissors") || (computer==="paper" && player==="rock")){
        console.log("Computer Wins!");
        return "computer";
    }

    else{
        console.log("You Win!");
        return "player";
    }
}

function game(){
    let playerWins=0;
    let ties= 0;
    for(let i=0; i<5; i++){
        let winner = singleRound();
        if(winner === "player") playerWins+=1;
        else if(winner=== "tie") ties+=1;
    }

    if(playerWins> (5-ties-playerWins))console.log("Player Wins the Game!!!");
    else if(playerWins< (5-ties-playerWins))console.log("Computer Wins the Game!!!");
    else console.log("The Game Ties!! Both player and computer won the same number of rounds");
}

game();

// for(let i=0; i<10; i++){
//     console.log(getRndInteger());
// }