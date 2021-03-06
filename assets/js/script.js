// Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    // Function to start playing game
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const lizardBtn = document.querySelector('.lizard');
        const spockBtn = document.querySelector('.spock');
        const playerOptions = [rockBtn, paperBtn, scissorBtn, lizardBtn, spockBtn];
        const computerOptions = ['rock', 'paper', 'scissor', 'lizard', 'spock']

        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;


                const choiceNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText, computerChoice)

                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })

    }
    // Function to game options
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        
        //tie check
        if (player === computer) {
            result.textContent = 'Tie'
        }
        //rock Vs paper
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;

            } else {
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        //scissor Vs rock
        else if (player == 'scissor') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        //paper Vs scissor
        else if (player == 'paper') {
            if (computer == 'scissor') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        //lizard Vs rock
        else if (player == 'lizard') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        //spock Vs rock
         else if (player == 'spock') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        //paper Vs lizard
        else if (player == 'paper') {
            if (computer == 'lizard') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        //spock Vs paper
        else if (player == 'spock') {
            if (computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        //lizard Vs scissor
        else if (player == 'lizard') {
            if (computer == 'scissor') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        //scissor Vs spock
        else if (player == 'scissor') {
            if (computer == 'spock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        //spock Vs lizard
        else if (player == 'spock') {
            if (computer == 'lizard') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
}

const gameOver = (playerOptions, movesLeft) => {

    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => {
        option.style.display = 'none';
    })

    // Function to run when game is over
    chooseMove.innerText = 'Game Over!!'
    movesLeft.style.display = 'none';

    if (playerScore > computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game'
        result.style.color = '#308D46';
    }
    else if (playerScore < computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
    }
    else {
        result.style.fontSize = '2rem';
        result.innerText = 'Tie';
        result.style.color = 'grey'
    }
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex'
    reloadBtn.addEventListener('click', () => {
        window.location.reload();
    })
}
// Calling playGame function inside game
playGame();
}

/* Reload button style */
game();

