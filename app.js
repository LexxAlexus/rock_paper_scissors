'use strict'

// Global variable of choices to choose from
const choices = ['rock', 'paper', 'scissors'];

//Empty Array to log the winner inside
const winners = [];

function game() {
    for(let i = 1; i <= 5; i++){
        playRound();
    }
    logWins();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    //Using push method to push winner inside the winners array
    winners.push(winner);
}


function playerChoice() {
    let input = prompt('Welcome! Please choose rock, paper, scissors');
    //Makes sure the player doesn't cancel or doesn't enter anything
    while(input === null || input === '') {
        input = prompt('Please choose rock, paper, scissors');
    }
     //Makes user input lowercase to match the choices from the array
    input = input.toLowerCase();
    //Checks validate function for true or false
    let check = validateInput(input);
    //If false prompt will reappear for correct choices only
    while(check === false) {
        input = prompt('Please choose rock, paper, scissors. Check spelling if needed.');

        while(input === null || input === '') {
            input = prompt('Please choose rock, paper, scissors');
        }

        input = input.toLowerCase();
        check = validateInput(input);
    } 
    return input;
}

function computerChoice() {
    // How the computer will make its choice from the array
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to check if userChoice from prompt is one of the choice from array
function validateInput(userChoice) {
    return choices.includes(userChoice);
}

//Function to determine a winner
function checkWinner(choicePlayer, choiceComputer) {
    if(choicePlayer === choiceComputer) {
        return 'No Winner! Tie!';
    } else if(
    (choicePlayer === 'rock' && choiceComputer === 'scissors') ||
    (choicePlayer === 'paper' && choiceComputer === 'rock') ||
    (choicePlayer === 'scissors' && choiceComputer === 'paper')) {
        return 'Player Wins!';
    } else {
        return 'Computer Wins!';
    }
} 
//Function to keep track of wins
function logWins() {
    console.log(winners);
}

console.log(game());