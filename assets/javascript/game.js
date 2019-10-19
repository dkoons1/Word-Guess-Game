var words = ["nirvana", "oasis", "weezer", "pixies", "blur", "soundgarden", "radiohead", "sublime"]
var randomWord = words[Math.floor(Math.random(words) * words.length)]
var answers = []
var wins = 0
var bandName = document.getElementById("labels");
var score = document.getElementById("wins");
var guessed = document.getElementById("lettersGuessed")
var guesses = []
var letters = randomWord.length;
var wordParagraph = document.getElementById("wordLine")
var congratsParagraph = document.getElementById("gratsLine")
var imager = document.getElementById("imgArea")
var guessesLeft = document.getElementById("guessesLeft")
var guess = 10

// LOTS OF LABELS
var pic = document.getElementById("bandPic");
pic.src = "";
pic.setAttribute("height", "25%");
pic.setAttribute("width", "25%");


//STARTING FUNCTION
function start(){
    words = ["nirvana", "oasis", "weezer", "pixies", "blur", "soundgarden", "radiohead", "sublime"]
    randomWord = words[Math.floor(Math.random(words) * words.length)]
    answers = []
    guess = 10
    wins = 0
    letters = randomWord.length;
    guessesLeft.innerHTML = guess
    guessed.innerHTML = ""
    for(var i = 0; i < randomWord.length; i++){
        answers[i] = "_";
    }
    
    wordParagraph.innerHTML = answers.join(" ")
}

//SETTING INITIAL SCORE
score.innerHTML=wins

//CALLING START
start()

//CHEATING
console.log(randomWord)
document.onkeyup = function(event) {
    if(letters >= 0){
            var letter = event.key.toLowerCase();
            guessed.innerHTML += letter + ", "
            guess -= 1
            guessesLeft.innerHTML = guess
            if(guess == 0){
                start()
            }
            else{
            for(var j = 0; j < randomWord.length; j++){
                if (randomWord[j] === letter) {
                    answers[j] = letter
                    letters--       
                    wordParagraph.innerHTML = answers.join(" ")
                    console.log(letters)
                    if(letters == 0){
                        labels()
                        start()

                        wins += 1
                        score.innerHTML=wins
                    }
                }		
            }
        }
    }
}

//SETTING UP WIN CONDITIONS AND STATEMENTS
function labels(){
    if(randomWord == "nirvana"){
        bandName.innerHTML = "You got Nirvana!";
        pic.src = "/Users/djkoons/Desktop/Online-Class/Homework/Homework-3/Word-Guess-Game/assets/images/nirvana.jpg";
    }
    else if(randomWord == "oasis"){
        bandName.innerHTML = "You got Oasis!";
        pic.src = "/Users/djkoons/Desktop/Online-Class/Homework/Homework-3/Word-Guess-Game/assets/images/oasis.jpg";
    }
    else if(randomWord == "pixies"){
        bandName.innerHTML = "You got Pixies!";
        pic.src = "/Users/djkoons/Desktop/Online-Class/Homework/Homework-3/Word-Guess-Game/assets/images/pixies.jpg";
    }
    else if(randomWord == "blur"){
        bandName.innerHTML = "You got Blur!";
        pic.src = "/Users/djkoons/Desktop/Online-Class/Homework/Homework-3/Word-Guess-Game/assets/images/blur.jpg";
    }
    else if(randomWord == "soundgarden"){
        bandName.innerHTML = "You got Soundgarden!";
        pic.src = "/Users/djkoons/Desktop/Online-Class/Homework/Homework-3/Word-Guess-Game/assets/images/soundgarden.jpg";
    }
    else if(randomWord == "weezer"){
        bandName.innerHTML = "You got Weezer!";
        pic.src = "/Users/djkoons/Desktop/Online-Class/Homework/Homework-3/Word-Guess-Game/assets/images/weezer.jpg";
    }
    else if(randomWord == "radiohead"){
        bandName.innerHTML = "You got Radiohead!";
        pic.src = "/Users/djkoons/Desktop/Online-Class/Homework/Homework-3/Word-Guess-Game/assets/images/radiohead.jpg";

    }
    else if(randomWord == "sublime"){
        bandName.innerHTML = "You got Sublime!";
        pic.src = "/Users/djkoons/Desktop/Online-Class/Homework/Homework-3/Word-Guess-Game/assets/images/sublime.jpg";

    }
}