let fname = prompt('What is your name?')
let lname = prompt('What is your last name?')
let age = prompt('How old are you?')
let height = prompt('how tall are you in cm?')
let petName = prompt('What is your pets name?')

let fnameCond = false;
let lnameCond = false;
let ageCond = false;
let heightCond = false;
let petCond = false

if (fname[0] === lname[0]) {
    fnameCond = true
    lnameCond = true
} else{
    fnameCond = false
    lnameCond = false
}

if (age > 20 && age < 30) {
    ageCond = true
} else {
    ageCond = false
}

if (height > 170) {
    heightCond = true
} else {
    heightCond = false
}

if (petName[petName.length -1] === 'y') {
    petCond = true
} else {
    petCond = false
}

if (fnameCond && lnameCond && ageCond && heightCond && petCond) {
    console.log('I know youre a SPY!!')
} else {
    console.log('Nothing to see here!')
}