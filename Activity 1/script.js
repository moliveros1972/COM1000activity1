// 1) Can you restate the conditional more simply?
if ((isMichaelPhelps || isMerman) && (isMichaelPhelps || hasGills))
	winGoldMedals();

if (isMichaelPhelps || isMerman || hasGills)
	winGoldMedals();

// 2) Can you restate the conditional to use only one negation?
var happy = true;
var rich = false;

if (!rich && !happy) 
	killSelf();
else 
	liveOn();

if (!(rich || happy)) 
	killSelf();
else 
	liveOn();

// 3) Can you restate the condition to use two negations and be more legible?
if (!(urgent && important)) 
	usePostOfice();
else 
	useFedex();

if (!urgent && !important)
	usePostOfice();
else
	useFedex();

// 4) Under which circumstances will doSomething run?
if (x > 5 && x <= -5) 
	doSomething();

// Never


// 5) Under which circumstances will doSomething run?
if (x > 5 || x <= -5) 
	doSomething();



// 6) Can you restate the conditional to use no negations?
if ( !(x > 10 && y < 15))
	alert("You got it!");
else
	prompt("What you need?");

if ( (x < 10 && y > 15))
    alert("You got it!");
else
    prompt("What you need?");


// 7) Can you restate the conditional to use only one negation?
if (!(x < 10) || y <= 10 || z <= 25 || !dead) {
    console.log("You know your DeMorgan's Laws");

if (x >= 10 || y <= 10 || z <= 25 || !dead) {
   console.log("You know your DeMorgan's Laws");}


// 8) Can you distribute the negation across the expression in parens?
if (!(!alive || distance > 1000 || trapped || enemies < 0)) {
	alert("game goes on");
}

if (alive || distance < 1000 || !trapped || enemies > 0) {
    alert("game goes on");
}




// 9) Can you distribute the negation across the expression in parens?
if (!(dead && level < 99 && world == "Earth")) {
	alert ("Life goes on");
}

if (!dead && level > 99 && !world == "Earth") {
    alert ("Life goes on");
}


// 10) In programming, what is the opposite of black?

//   !black

// 11) In programming, what is the opposite of x > y ?

// x < y

// 12) Generate a random number between 0 and 1 in Javascript
 
Math.random() 

// 13) Generate a random number between 0 and 10 in Javascript

// 14) Generate a random integer between 0 and 10 (inclusive)

// 15) Generate a random number between 5 and 10

// 16) Generate a random integer between 5 and 10

// 17) Generate a random integer between -10 and 30

// 18) Write a coin flip function. It should return the string "heads" half the time and the string "butts" the other half

function coinFlip(){

}

// 19) Write a card picking function that outputs cards from a standard deck: ex 'Ace of Clubs', 'Queen of Hearts', '10 of Diamonds', '8 of Spades'





// 20)






