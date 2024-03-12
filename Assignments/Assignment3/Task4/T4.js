$(document).ready(function() {
    const choices = ["rock", "paper", "scissors"];

    function computerPlay() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playRound(playerChoice) {
        const computerChoice = computerPlay();
        $('#player-choice').css('background-image', `url('T4.jpg')`);
        $('#computer-choice').css('background-image', `url('T4.jpg')`);

        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    $('.btn').click(function() {
        const playerChoice = $(this).attr('id');
        const result = playRound(playerChoice);
        $('#result').text(result);
    });
});