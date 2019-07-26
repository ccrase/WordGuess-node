//constuctor named Letter 
function Letter(underlyingCharacter) {
    //should be able to display an underlying character or a blank placeholder (depending on whether or not the user has guessed)
    //stores underlyingCharacter to character
    this.character = underlyingCharacter,

    //stating that the word has not been guessed
    this.hasBeenGuessed =  false,
    //function returns underlying character if its been guessed or an underscore if it hasn't been guessed
    
    this.returnPlaceholder = function(){
        if(this.hasBeenGuessed){
            return this.character;

        }else{
            var underscore = "_";
            return underscore;
        }
    }
    this.returnPlaceholder(); 

    this.checkCharacter = function(input){
        var input = input.toLowerCase();
        if(this.character === input){
            this.hasBeenGuessed = true;
            this.returnPlaceholder();
        }
    }
};


module.exports = Letter;