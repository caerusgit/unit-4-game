



var targetNumber = Math.floor(Math.random()*(120-19+1)+19);
console.log(targetNumber);
console.log("--------------------");

$("#number-to-guess").text(targetNumber);

var counter = 0;

$("#totalScore").text(counter);

var wins = 0;

$("#wins").text(wins);

var losses = 0;

$("#losses").text(losses);

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [Math.ceil(Math.random()*12), Math.ceil(Math.random()*12), Math.ceil(Math.random()*12), Math.ceil(Math.random()*12)];
console.log(numberOptions[0]);
console.log(numberOptions[1]);
console.log(numberOptions[2]);
console.log(numberOptions[3]);
console.log("--------------------");

// Array with diamond names
var imgOptions = ["redDiamond", "blueDiamond", "yellowDiamond", "greenDiamond"];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    imageCrystal.attr("id", "diamond"+[i]);

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/" + imgOptions[i] + ".png");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + counter);
    $("#totalScore").text(counter);


    if (counter === targetNumber) {
        // alert("You win!");
        $("#wins").text(++wins);
        targetNumber = Math.floor(Math.random()*(120-19+1)+19);
        console.log(targetNumber);
        console.log("--------------------");
        $("#number-to-guess").text(targetNumber);
        numberOptions = [Math.ceil(Math.random()*12), Math.ceil(Math.random()*12), Math.ceil(Math.random()*12), Math.ceil(Math.random()*12)];
        console.log(numberOptions[0]);
        console.log(numberOptions[1]);
        console.log(numberOptions[2]);
        console.log(numberOptions[3]);
        console.log("--------------------");
        counter = 0;
        $("#totalScore").text(counter);
        // Next we create a for loop to create crystals for every numberOption.
        for (var i = 0; i < numberOptions.length; i++) {
            $("#diamond"+i).attr("data-crystalvalue", numberOptions[i]);
        }
    }

    else if (counter > targetNumber) {
        // alert("You lose!!");
        $("#losses").text(++losses);
        targetNumber = Math.floor(Math.random()*(120-19+1)+19);
        console.log(targetNumber);
        console.log("--------------------");
        $("#number-to-guess").text(targetNumber);
        numberOptions = [Math.ceil(Math.random()*12), Math.ceil(Math.random()*12), Math.ceil(Math.random()*12), Math.ceil(Math.random()*12)];
        console.log(numberOptions[0]);
        console.log(numberOptions[1]);
        console.log(numberOptions[2]);
        console.log(numberOptions[3]);
        console.log("--------------------");
        counter = 0;
        $("#totalScore").text(counter);
        for (var i = 0; i < numberOptions.length; i++) {
            $("#diamond"+i).attr("data-crystalvalue", numberOptions[i]);
        }
    }

});