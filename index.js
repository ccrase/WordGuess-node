var Word = require("./word");
//var prompt = require('prompt');
var inquirer = require('inquirer');
var colors = require('colors');

var wordsArray = ["sticky", "elephant", "laughing", "waterfall"];
var currentWord = "";
var gameWord = "";
var counter = 0;

function gameStart(){
    console.log("Let's Start! You get 8 tries.".yellow);
    currentWord = "";
    gameWord = "";
    counter = 0;
    assignWord();
    promptUser();
}
gameStart();

function assignWord(){
    var randomNum = Math.floor(Math.random() * (wordsArray.length));
    currentWord = wordsArray[randomNum];
    gameWord = new Word(currentWord);
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
        console.log("Game Over!! You are out of tries.".magenta);
        gameStart();
    }
}

function checkAnswer(answer){
    var letterCheck = answer.userguess.toLowerCase();
    gameWord.checkWord(letterCheck);
    if(!currentWord.includes(letterCheck)){
        console.log("INCORRECT!".red);
        console.log("______________________________");
        counter++
        console.log("You have ".yellow + (8 - counter) + " guesses left".yellow);
        promptUser();

    }else{
        rightGuess();
        promptUser();
    }
}
function rightGuess(){
    console.log("Correct!!!!!!!!".green);
    console.log("______________________________");
    if(currentWord ===gameWord.wordDisplay.join("")){
        console.log("Congrats, you won!!!!!!!");
        console.log("______________________________");
        gameStart();
    }
}




