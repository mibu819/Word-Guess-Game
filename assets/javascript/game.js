//Make a list of words to display
    var wordList = ["baratheon", "greyjoy", "stark", "arryn", "tully", "lannister","martell"];

//Select one random word at a time
    var randomWord = Math.floor((Math.random() * wordList.length));
    chooseWord = wordList[randomWord];
    console.log(chooseWord);


        //variable declaration
    var chooseWordUnderlines = [];
    var chooseWordStars = [];
        var wordLength = chooseWord.length;
        var LettersInWord = [];
        var LettersGuessed = [];
        
        var allowableGuesses = chooseWord.length * 2;
        
        //this is taking word length and making string of _,_,_
        for (i = 0; i < chooseWord.length; i++) {
          var currentLetter = chooseWord[i];
          LettersInWord.push(currentLetter);
          chooseWordUnderlines.push(" _ ");
          chooseWordStars.push("*");
        }
        
        //Create array of underlines
        chooseWordUnderlines = chooseWordUnderlines.join();
        chooseWordUnderlinesString = chooseWordUnderlines.toString();
        
        //Link to HTML tags
        var letterChoiceText = document.getElementById("letterChoice-text");
        var guessesRemainingText = document.getElementById("guessesRemaining-text");
        var currentWordText = document.getElementById("currentWord-text");
        var lettersGuessedText = document.getElementById("lettersGuessed-text");
        
        //Send the underlined version of chosen word to the HTML tag.
        currentWordText.textContent = chooseWordUnderlinesString;
        
        var guessNumber = 0;
        var guessRemaining = 0;
        
        var matchedLettersArr = [];
        var chooseWordUnderlines = [];
        for (i = 0; i < chooseWord.length; i++) {
            chooseWordUnderlines.push(" _ ");
        }
        
        var gameover = false;
        
        
        document.onkeyup = function(event) {
          if (guessNumber < allowableGuesses && gameover == false) {
        
            letterChoiceText.textContent = event.key;
            var userLetterChoice = event.key;
            guessNumber++;
            LettersGuessed.push(userLetterChoice);
            LettersGuessedString = LettersGuessed.toString().toUpperCase();
            lettersGuessedText.textContent = LettersGuessedString;
        
        
            //Loop through the letters in chooseWord, if any letters match to the user choice, do somthing.
            for (i = 0; i < LettersInWord.length; i++) {
        
              if (userLetterChoice === LettersInWord[i]) {
        
                var indexOfMatch = LettersInWord.indexOf(userLetterChoice);
                chooseWordUnderlines[indexOfMatch] = " " + userLetterChoice + " ";
        
                // replace the letter with a * at that index instead of deleting it.
                //then the indexes will match to substitute.
                if (indexOfMatch > -1) {
                  LettersInWord[indexOfMatch] = "*";
                }
        
                //console.log("LettersInWordDestroyed: " + LettersInWordDestroyed);
        
                var starExistsInArray = false;
              }
            }
        
            guessRemaining = allowableGuesses - guessNumber;
            
            if (LettersInWord.join() == chooseWordStars.join()) {
              console.log("YOU win!");
              guessRemaining = 0;
              swal({
                title: "YOU WIN!",
                text: "The word was: " + chooseWord,
                button: ";)", 
              });
              x.style.display = "block";
              gameover = true;
                }else if (guessRemaining == 0) {
              console.log("YOU lose!");
              swal({
                title: "YOU LOSE!",
                icon: "error",
                button: ":(",
              });
              x.style.display = "block";
              gameover = true;
              }
            console.log("Final String Output: " + chooseWordUnderlines.toString());
        
            var FinalString = chooseWordUnderlines.toString();
            currentWordText.textContent = FinalString;
            
            guessesRemainingText.textContent = guessRemaining;
          }
        
        };
        