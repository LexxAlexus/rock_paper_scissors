'use strict'

// Global variable of choices to choose from
const choices = ['rock', 'paper', 'scissors'];

function game() {
//play the game
//play five rounds
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
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

console.log(playerChoice());