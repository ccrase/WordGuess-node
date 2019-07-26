var Word = require("./word");
var prompt = require('prompt');
var inquirer = require('inquirer');
var colors = require('colors');

var wordsArray = ["sticky", "elephant", "laughing", "waterfall"];
var currentWord = "";
var gameWord = "";
var counter = 0;

function gameStart(){
    console.log("Let's Start! You get 12 tries.".cyan);
    assignWord();
    promptUser();
}
gameStart();

function assignWord(){
    var randomNum = Math.floor(Math.random() * (wordsArray.length));
    currentWord = wordsArray[randomNum];
    gameWord = new Word(currentWord);
    console.log(currentWord);
    gameWord.returnWord();
};

function promptUser(){
    if(counter < 8){
        //inquirer prompt
        inquirer.prompt([
            {
                type: 'input',
                name: 'userguess',
                message: 'Guess a Letter',
            }
        ]).then(answer => {
            checkAnswer(answer);
        });

    }else{
        console.log("Game Over. You are out of tries.".magenta);
        currentWord = "";
        gameWord = "";
        counter = 0;
        startGame();
    }
}

function checkAnswer(answer){
    var letterCheck = answer.userguess.toLowerCase();
    gameWord.checkWord(letterCheck);
    console.log(gameWord.letterArray);
    console.log(gameWord.wordDisplay);
    if(!currentWord.includes(letterCheck)){
        console.log("Wrong guess!")
        counter++
        console.log(counter);
        promptUser();

    }else{
        rightGuess();
    }
}
function rightGuess(){
    console.log("Correct!")
    promptUser();
    if(currentWord ===gameWord.wordDisplay){
        console.log("Congrats, you chose the right word!")
    }
}




