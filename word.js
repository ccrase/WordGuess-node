var letters = require('./letters');

function Word(newWord) {
    this.letterArray = [],
    // for(var i = 0; i < newWord.length; i++){

    // }
    this.returnWord = function(newWord){
        for(var i = 0; i < newWord.length;i++){
            letters.returnPlaceholder(newWord[i]);
        }
    }
}


module.exports = Word;