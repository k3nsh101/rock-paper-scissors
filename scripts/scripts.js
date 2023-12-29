const choices = ['Rock', 'Paper', 'Scissors']
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".option-btn");
const round_winner = document.querySelector(".round-winner");
const round_win_method = document.querySelector(".round-win-method");
const total_result_player = document.querySelector(".total-result-player");
const total_result_computer = document.querySelector(".total-result-computer");
const start_over = document.querySelector(".start-over");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        let playerSelection = event.target.parentElement.value;
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
    round_winner.textContent = 'Pick your option';
    round_win_method.textContent = 'First to score 5 points wins the game';
    total_result_player.children[1].textContent = 'Player: 0';
    total_result_computer.children[1].textContent = 'Computer: 0';
    total_result_player.children[0].src = `img/question-mark.png`;
    total_result_computer.children[0].src = `img/question-mark.png`;
    buttons.forEach(button => button.classList.add("option-btn-hover"));
})

function getComputerChoice(){
    let choiceIndex = Math.floor((Math.random() * 3));
    return choices[choiceIndex];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        round_winner.textContent = `It's a tie!`;
        round_win_method.textContent = `Both picked ${computerSelection}`;
        total_result_player.children[1].textContent = `Player: ${playerScore}`;
        total_result_computer.children[1].textContent = `Computer: ${computerScore}`;
        total_result_player.children[0].src = `img/${playerSelection}.jpg`;
        total_result_computer.children[0].src = `img/${computerSelection}.jpg`;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Paper' || 
    playerSelection === 'Paper' && computerSelection === 'Rock' ){
        playerScore++;
        round_winner.textContent = `You won!`;
        round_win_method.textContent = `${playerSelection} beats ${computerSelection}`;
        total_result_player.children[1].textContent = `Player: ${playerScore}`;
        total_result_computer.children[1].textContent = `Computer: ${computerScore}`;
        total_result_player.children[0].src = `img/${playerSelection}.jpg`;
        total_result_computer.children[0].src = `img/${computerSelection}.jpg`;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Scissors' && computerSelection === 'Rock' || 
    playerSelection === 'Paper' && computerSelection === 'Scissors'){
        computerScore++;
        round_winner.textContent = `You lose!`;
        round_win_method.textContent = `${playerSelection} is beaten by ${computerSelection}`;
        total_result_player.children[1].textContent = `Player: ${playerScore}`;
        total_result_computer.children[1].textContent = `Computer: ${computerScore}`;
        total_result_player.children[0].src = `img/${playerSelection}.jpg`;
        total_result_computer.children[0].src = `img/${computerSelection}.jpg`;        
    }

    if (playerScore === 5) {
        buttons.forEach(button => button.disabled = true);
        buttons.forEach(button => button.classList.remove("option-btn-hover"));
        alert("Congratulation. You won!!");
    }
    else if (computerScore === 5){
        buttons.forEach(button => button.disabled = true);
        buttons.forEach(button => button.classList.remove("option-btn-hover"));
        alert("Game over. You Lose!!");
    }
}
