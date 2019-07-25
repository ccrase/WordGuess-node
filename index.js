var word = require("./word");
var prompt = require('prompt');
var inquirer = require('inquirer');

var wordsArray = ["sticky", "elephant", "laughing", "waterfall"];
var randomNum = Math.floor(Math.random() * (wordsArray.length));
var randomWord = wordsArray[randomNum];

var currentWord = new word(randomWord);

var score = 12;

//starts the prompt
prompt.start();
//gets user input 
prompt.get(['guess'], function(err, result){
    console.log("Guess: " + result.guess);
});



