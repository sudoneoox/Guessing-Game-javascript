let maximum = parseInt(prompt("Enter the maximum number"));
let tries = 1;
while (!maximum) {
    maximum = parseInt(prompt("Enter the valid number"));
}
const number = Math.floor(Math.random() * maximum) + 1;
let guessing = parseInt(prompt("Enter your first guess!"));
while (parseInt(guessing) !== number ) {
    if (guessing === `q`) break;
    tries += 1
    if (guessing > number) {
        guessing = prompt("Too high! Enter a new Guess:");
    } else {
        guessing = prompt("Too low! Enter a new Guess:");
    }
    }  
if (guessing === `q`) {
    console.log("OK, YOU QUIT!")
} else {
    console.log(`You got it!! took you ${tries} guesses`)
    console.log(`CONGRATS YOU WIN`)
}
