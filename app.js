"use strict"
//Computer's random pick function
let getComputerChoice = function() {
    let computerAnswer = Math.floor(Math.random() * 3);

    switch(computerAnswer) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};
//console.log(getComputerChoice());


//Player Selection 
let userSelection = prompt('Choose: rock, paper, scissors');

//Lowercase Selection
let userResult = userSelection.toLowerCase();
//console.log(userResult);

//Function to see who wins
const gamePLay = function(getComputerChoice, userResult) {
    if(getComputerChoice === userResult) {
        return 'No winner! Same answers';
    } else if(getComputerChoice === 'rock' && userResult === 'paper') {
        return 'Player wins! Paper beats rock!';
    } else if(getComputerChoice === 'paper' && userResult === 'rock') {
        return 'Computer wins! Paper beats rock!';
    } else if(getComputerChoice === 'scissors' && userResult === 'paper') {
        return 'Computer wins! Scissors beats paper';
    } else if(getComputerChoice === 'scissors' && userResult === 'rock') {
        return 'Player wins! Rock beats scissors!';
    } else if(getComputerChoice === 'rock' && userResult === 'scissors') {
        return 'Computer wins! Rock beats scissors';
    } else if(getComputerChoice === 'paper' && userResult === 'scissors') {
        return 'Player wins! Scissors beats paper!';
    } else {
        return 'game';
    }
};

const begin = gamePLay(getComputerChoice(), userResult);
console.log(begin);


/* let userSelection = prompt('Hello, Choose between rock, paper, scissors?');

function selection(userSelection) {
    userSelection = userSelection.toLowerCase();
    if(userSelection !== 'rock' || userSelection !== 'paper' || userSelection !== 'scissors') {
        console.log('Invalid answer, try again please');
    }
}
*/