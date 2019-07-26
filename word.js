var Letter = require('./letters.js');

function Word(input) {
    this.wordArray = input;

    this.letterArray = [],
    this.makeLetters = function(){
        for(var i = 0; i < this.wordArray.length; i++){
            var letter = new Letter(this.wordArray[i]);
            this.letterArray.push(letter);
        }
    },
    this.makeLetters(),
    
    this.returnWord = function(){
        this.wordDisplay = [];
        for(var i = 0; i < this.letterArray.length;i++){
            this.wordDisplay.push(this.letterArray[i].returnPlaceholder());
        }
        console.log(this.wordDisplay.join(" "));
    }

    this.checkWord = function(input){
        for(var i =0; i <this.letterArray.length; i++){
            this.letterArray[i].checkCharacter(input);
        }
        this.returnWord();
    }
};    


module.exports = Word;