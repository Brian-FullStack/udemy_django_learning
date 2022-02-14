
/////////////////////////////
/////// IF Statements //////
/////////////////////////////

let hot = false;
let temp = 50;

if (temp > 80) {
    console.log('Its hot outside')
} else if (temp <= 80 && temp >= 50) {
    console.log('Average temp outside')
} else if (temp <= 50 && temp >= 32) {
    console.log('Its pretty cold outside')
} else {
    console.log('its very cold')
}

let ham = 0
let cheese = 10

let report = '';

if (ham >= 10 && cheese >= 10) {
    report = "strong sales of both ham and cheese today!";
} else if (ham === 0 && cheese === 0) {
    report = 'Nothing sold';
} else {
    report = 'We had some sales today!';
}

console.log(report)

////////////////////////////////
////// WHILE Loops ///////////
/////////////////////////////


// Print out numbers less than 5 but stop at 3
let x = 0

while (x < 5) {
    console.log('x is '+ x)

    if (x===3) {
        console.log('X IS EQUAL TO THREE!')
        break;
    }
    x = x+1;
}

console.log(' ')

// Print out even numbers from 0 - 10
let z = 0

while (z <= 10) {
    console.log(z)
    z = z + 2;
}

console.log(' ')
////////////////////////////////
////// FOR Loops ///////////
/////////////////////////////

//
for (let i = 0; i < 10; i++) {
    console.log('Number is '+i)
}

let letters = "ABABABABABAB";

for (let i = 0; i < letters.length; i += 2) {
    console.log(letters[i])
}

///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
let num = 0;

while (num < 5) {
    console.log('Hello')
    num = num+1
}


console.log();
// For Loop
for (let num = 0; num < 5; num++) {
    console.log('World')
}



/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
let oddNum = 1;

while (oddNum < 25) {
    if (oddNum % 2) {
    console.log(oddNum);
    }

    oddNum++;
}

console.log();
// METHOD TWO
// For Loop
for (let oddNum2 = 1; oddNum2 < 25; oddNum2 += 2) {
    console.log(oddNum2)
}