"use strict";

let nombre = prompt("Welcome to my game! What is your name?");
alert("Greetings" + username + "!")

let answerOne = prompt("Did I take a web design class?").toLowerCase();

if (answerOne === 'y' || answerOne === 'yes') {
    alert("¡Así es!")
    console.log("¡Así es!");
} else {
    alert("Está mal")
    console.log("Está mal");
}

let answerTwo = prompt("Can I speak another language?");
if (answerTwo === 'y' || answerTwo === 'yes') {
    alert("¡Así es!")
    console.log("¡Así es!");

} else {
    alert("Está mal")
    console.log("Está mal");
}

let answerThree = prompt("Is my favorite color yellow");
if(answerThree === 'n' || answerThree === 'no'){
    alert("¡Así es!")
    console.log("¡Así es!");

} else {
    alert("Está mal")
    console.log("Está mal");
}

let answerFour = prompt("Have I traveled outside of the US");
if(answerFour === 'n' || answerFour === 'no'){
    alert("¡Así es!")
    console.log("¡Así es!");

} else {
    alert("Está mal")
    console.log("Está mal");
}

let answerFive = prompt("Am I left-handed?");
if(answerFive === 'y' || answerFive === 'yes'){
    alert("¡Así es!")
    console.log("¡Así es!");

} else {
    alert("Está mal")
    console.log("Está mal");
}


let correctAnswer;
correctAnswer = "3";
let attempts = 4;

while (attempts > 0) {
let newanswer = prompt("Can you guess a number for me");
    if (correctAnswer === newanswer) {
        console.log("You're right. Congrats!");
        alert("You're right. Congrats!");
        break;
    } else {
        console.log("You're incorrect. Try again.");
        alert("You're incorrect. Try again.");
        attempts = attempts - 1;
    }

let x = 3
while(x === "3") {
    response = prompt("Guess a number")
    console.log("You said: " + response);
    count = count + 1;
    console.log("count: "  + count)

}
alert("You got it!")
