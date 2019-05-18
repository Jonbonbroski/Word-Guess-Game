
//creating global variables for game
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var words = ["GINFER","COW","ARROW","BLOCK", "JAVASCRIPT"];
var playerGuess; //the actual guess the player chooses.
var guesses; //storing guesses to mark out.
var chancesCounter = 10;


/*funtion to choose random word and to 
create blank spaces for letters in the word.*/
var blah = function startGame(){
    var randomWord = Math.random() * words.lenth;
    var wordLength = randomWord.index;
    return wordLength;
    
};


 


//loop for button creation with alphabet
for(var i = 0; i < alphabet.length; i++){ 
    var letterBtn = document.createElement("button");
    letterBtn.classList.add("letter-buttons");
    var letters = alphabet[i];
    letterBtn.textContent =letters;
    var alph = document.getElementById("alph-buttons");
    alph.appendChild(letterBtn);
};