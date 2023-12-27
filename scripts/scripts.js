const choices = ['Rock', 'Paper', 'Scissors']
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".option-btn");
const round_result = document.querySelector(".round-result");
const total_result = document.querySelector(".total-result");
const start_over = document.querySelector(".start-over");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        let playerSelection = event.target.value;
        let computerSelection = getComputerChoice();

        if (playerScore > 5 || computerScore > 5) {
            alert("Game Over! Please restart the game.");
        }
        else playRound(playerSelection, computerSelection);
    })
})

start_over.addEventListener('click', ()=> {
    playerScore = 0;
    computerScore = 0;
    buttons.forEach(button => button.disabled = false);
    round_result.textContent = '';
    total_result.textContent = '';
})

function getComputerChoice(){
    let choiceIndex = Math.floor((Math.random() * 3));
    return choices[choiceIndex];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        round_result.textContent = `Tie. Both picked ${computerSelection}`;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Paper' || 
    playerSelection === 'Paper' && computerSelection === 'Rock' ){
        round_result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Scissors' && computerSelection === 'Rock' || 
    playerSelection === 'Paper' && computerSelection === 'Scissors'){
        round_result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    total_result.textContent = `Your total score: ${playerScore} and Computer total score: ${computerScore}`;

    if (playerScore === 5) {
        buttons.forEach(button => button.disabled = true);
        alert("Congratulation. You won!!");
    }
    else if (computerScore === 5){
        buttons.forEach(button => button.disabled = true);
        alert("Game over. You Lose!!");
    }
}
