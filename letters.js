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
           console.log(this.character);

        }else{
            var underscore = "_";
            console.log(underscore);
        }
    }
    this.returnPlaceholder(); 

    this.checkCharacter = function(userGuess){
        userGuess = userGuess.toUpperCase();
        if(this.character === userGuess){
            this.hasBeenGuessed = true;
        }
    }
    this.checkCharacter();
};


module.export = Letter;