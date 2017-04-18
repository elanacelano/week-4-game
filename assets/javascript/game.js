<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Crystal Collector</title>
  </head>
  <body>
    <h3>Crystal Collector</h3>
    <div id="guessingNumber"></div>
    <script type="text/javascript">
        var word = "elana";
        var wordInSpaces = [];
        function runGame(){
          var wordInArray = word.split("");
          wordInArray.forEach(function(i){
              i = " _ "
              wordInSpaces.push(i);
          });
          document.getElementById('letters').innerHTML = wordInSpaces.join("");
          document.onkeyup = function(event) {
          var letter = String.fromCharCode(event.keyCode).toLowerCase();
          var arrayPostion = wordInArray.indexOf(letter);
          if(wordInArray.indexOf(letter) > -1){
                console.log("yess its in the word..")
          }else{
            console.log("Not in the word")
          }
          }
        }
        runGame();
    </script>
  </body>
</html>

  // what are the varhiables 

    var word = [];
    var wordToBeGuessed = "Boolean"
    var hangmanGame = { //opening hangmanGame object
      hangmanState: -1,
      
      // how many guesses
      gameAnswer: function() { 

          var wordInArray = wordToBeGuessed.split("");

          for(i=0; i < wordInArray.length; i++){
            word.push(" _ ")
          }



        document.onkeyup = function(event) {
        var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();
   

    

            for(i=0; i< wordInArray.length; i++){

            

              if(guessedLetter === wordInArray[i]){
                console.log("what....")
              }
            }





        // if(wordInArray.indexOf(guessedLetter) > 1){
        //   alert(guessedLetter);
        //   console.log(wordInArray);
        //   console.log(guessedLetter)

        // }else{
        //   alert("letter you guessed is not in the word.")
        //   console.log(wordInArray);
        // }
 }
    }// closing hangmanGame object
}
//document.getElementById("hangmanletters").innerHTML = hangmanGame.gameShownAnswer;
hangmanGame.gameAnswer();
document.getElementById("answerArea").innerHTML = word.join(" ");

//document.getElementById('answer-area').innerHTML = word.join(' ');