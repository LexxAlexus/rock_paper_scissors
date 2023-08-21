"use strict"
//Array of choices for computer function and User Function/Validate
let gameChoices = ['rock', 'paper', 'scissors'];
/* 
//Function to play game
function playGame() {
    computerChoice();
    playerChoice();
}

//Function for computer random choose from gameChoices array
function computerChoice() {
    return gameChoices[(Math.floor(Math.random() * gameChoices.length))];
}
//console.log(computerChoice());

let playerChoice = function() {
        //Get player response
        let response = prompt('Welcome! Please choose rock, paper, scissors');

        //When response is empty and player clicks cancel or okay
        while(response === null || response === '') {
            response = prompt('Welcome! Please choose rock, paper, scissors');
        };
        //Lowercase all input
        response = response.toLowerCase();

        //Function that checks player input for correct response from array
        let check = validate(response);
        //If function is false from choices prompt the question again 
        while(check === false) {
            response = prompt('Only options rock, paper, scissors. Check spelling if needed.');

            //Inside the previous while loop to check if empty response/canceled
            while(response === null || response === '') {
            response = prompt('Welcome! Please choose rock, paper, scissors'); 
            }
            //when function is true make lowercase
            check = validate(response);
            response = response.toLowerCase();
        
        }
};

//Function to check correct responses from array
function validate (userResponse) {
    return gameChoices.includes(userResponse);
}

console.log(playGame());

*/