"use strict"
//Computer's random pick function
let getComputerChoice = function() {
    let computerAnswer = Math.floor(Math.random() * 3); 

    switch (computerAnswer) {
    case 0:
        console.log('rock');
        break;
    case 1:
        console.log('paper');
        break;
    case 2:
        console.log('scissors');
}
};
getComputerChoice();

/* let userSelection = prompt('Hello, Choose between rock, paper, scissors?');

function selection(userSelection) {
    userSelection = userSelection.toLowerCase();
    if(userSelection !== 'rock' || userSelection !== 'paper' || userSelection !== 'scissors') {
        console.log('Invalid answer, try again please');
    }
}
*/