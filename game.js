var listItems = getElementsById("my-list").getElementByTagName("li");

for (i = 0; i < listItems.length; i++);
listItems[i].addEventListener("click", activateItem);
}

function activateItem {
    alert("Click Detected");
}

// /////////////////
$(document).ready(function() {
    var Random = Math.floor(Math.random() * 100 + 1);
    // Selects a random number
    $("#randomNumber").text("Random");
})

var num1 = Math.floor(Math.random() * 10 + 1)
var num2 = Math.floor(Math.random() * 10 + 1)
var num3 = Math.floor(Math.random() * 10 + 1)
var num4 = Math.floor(Math.random() * 10 + 1)
//setting up random numbers for the jewels

// // Gobal variables that are accesible for all
// var wins = 0;
// var losses = 0;
// //Players current score 
// var addition = 0;
// // selecting a rundom number
// var total = Math.floor(Math.random()* 100) + 1){
// 	$(".total").empty();
// 	$(".total").append(total);
//assigns a random number to each crystals 
var red = Math.floor(Math.random() * 10) + 1;
var blue = Math.floor(Math.random() * 10) + 1);
var yellow = Math.floor(Math.random() * 10) + 1);
var green = Math.floor(Math.random() * 10) + 1);
//appending the addition in the HTML
var updateAddition = fucntion() {
    $(".addition").empty();
    $(".addition").append(addition);

    $("#wins").empty();
    $("#wins").append(wins);

    $("#losses").empty();
    $("#losses").append(losses);
}
//Restarting the function can be achieved as follow
var restart = function() {
    addition = 0;
    total = Math.floor(Math.random() * 100 + 1);
    $(".total").empty();
    $(".total").append(total);
    red = Math.floor(Math.random() * 10) + 1);
blue = Math.floor(Math.random() * 10) + 1);
yellow = Math.floor(Math.random() * 10) + 1);
green = Math.floor(Math.random() * 10) + 1);
// updateAddition();
}
//the logic to determin win and losses
var logic = function() {

    if (addition == total) {
        wins = wins + 1;
        alert("You Win!");
        restart();

    } else if (addition > total) {
        losses = losses + 1;
        alert("You Loose!");
        restart();

    } else {
        updateAddition();
    }
}
$(".addition").append(total);
$(".addition").append(addition);
//The on click function
$(document).ready(function() {
    $("#red").click(function() {
        addition = addition + red;
        console.log();
    })

    $("#blue").click(function() {
        addition = addition + blue;
        console.log();
    })
    $("#yellow").click(function() {
        addition = addition + yellow;
        console.log();
    })
    $("#green").click(function() {
        addition = addition + green;
        console.log();
    })
});