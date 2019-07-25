var Letter = require('./letters.js');

function Word(testWord) {
    this.wordArray = testWord;

    this.letterArray = [],
    this.makeLetters = function(){
        for(var i = 0; i < this.wordArray.length; i++){
            var letter = new Letter(this.wordArray[i]);
            this.letterArray.push(letter);
        }
    },
    this.makeLetters(),
    console.log(this.letterArray);

    this.returnWord = function(){
        this.wordDisplay = [];
        for(var i = 0; i < this.letterArray.length;i++){
            this.wordDisplay.push(this.letterArray[i].returnPlaceholder());
        }
        
    }
    this.returnWord();
    console.log(this.wordDisplay.join(" "));
};    


module.exports = Word;