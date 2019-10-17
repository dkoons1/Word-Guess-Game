var words = ["nirvana", "oasis", "weezer", "pixies", "blur"]
var randomWord = words[Math.floor(Math.random(words) * 5)]
var answers = []

var x = document.getElementById("rad")
 console.log(randomWord)

for(var i = 0; i < randomWord.length; i++){
    answers[i] = "_";
}



var letters = randomWord.length;

if(letters > 0){

    x.innerHTML = answers
    
    document.onkeyup = function(event) {

        var letter = event.key.toLowerCase();

        console.log(letter)

        for(var j = 0; j < randomWord.length; j++){
            if (randomWord[j] === letter) {
                answers[j] = letter
                x.innerHTML = answers
                letters--         
            }
        }

      };
}
else{
    x.innerHTML = "YOU DID IT U WON"
}

