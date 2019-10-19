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
                pic.src=""
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
        pic.src = "https://www.telegraph.co.uk/content/dam/music/2016/09/23/nirvana_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=1400";
    }
    else if(randomWord == "oasis"){
        bandName.innerHTML = "You got Oasis!";
        pic.src = "https://consequenceofsound.net/wp-content/uploads/2014/10/beadyeye2014promo.jpg";
    }
    else if(randomWord == "pixies"){
        bandName.innerHTML = "You got Pixies!"
        pic.src = "https://ksassets.timeincuk.net/wp/uploads/sites/55/2015/08/2013PixiesEM051213.hero_-1-920x515.jpg";
    }
    else if(randomWord == "blur"){
        bandName.innerHTML = "You got Blur!";
        pic.src = "https://ksassets.timeincuk.net/wp/uploads/sites/55/2013/03/2013Blur-photocredit-Zanna120313-1-620x417.jpg";
    }
    else if(randomWord == "soundgarden"){
        bandName.innerHTML = "You got Soundgarden!";
        pic.src = "https://townsquare.media/site/295/files/2014/10/soundgarden.jpg?w=980&q=75";
    }
    else if(randomWord == "weezer"){
        bandName.innerHTML = "You got Weezer!";
        pic.src = "https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/1/b9/1b9e463a-98e3-59bf-aa4d-02ed8c81a52e/5cdccee77eaa6.image.jpg?resize=1200%2C800";
    }
    else if(randomWord == "radiohead"){
        bandName.innerHTML = "You got Radiohead!";
        pic.src = "http://s3.amazonaws.com/quietus_production/images/articles/26615/image_1560253664_crop_550x293.jpg";

    }
    else if(randomWord == "sublime"){
        bandName.innerHTML = "You got Sublime!";
        pic.src = "https://movies-b26f.kxcdn.com/wp-content/uploads/2017/08/sublime-770x470.jpg";

    }
}