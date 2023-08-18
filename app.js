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

