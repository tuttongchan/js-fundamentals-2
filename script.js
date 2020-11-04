/*
// ACTIVATING STRICT MODE
// this phrase has to be first in the script, in order to catch errors and bugs
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const private = 534;



// FUNCTIONS

// Used multiple times throughout the program
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
// since "logger" was run 3 times console.log would be run 3 times
logger();
logger();
logger();

// Functions allow to write maintainable code and reusable code
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`; 
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// You can reuse the function with different input values, and gain different outputs
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');



// FUNCTION DECLARATIONS VS EXPRESSIONS

// Function Delcartion
// "birthYear" is a PARAMETER, "return" keyword takes value out of function
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge2(1991);

// Function Expression
// turned into variable
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);



// ARROW FUNCTIONS

// Arrow function
// anything after "=>" is what the function will return 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); 
console.log(yearsUntilRetirement(1980, 'Bob')); 



// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`; 
    return juice;
}
console.log(fruitProcessor(2, 3));



// REVIEWING FUNCTIONS

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }


    //return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));



//////////////////////////////
//  CODING CHALLENGE #1

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`); 
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`); 
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



// ARRAYS

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// ARRAYS are zero based, meaning first element starts with 0. Example below) 'Michael' = 0, 'Steven' = 1, 'Peter' = 2 

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// ARRAYS work with Strings and Numbers
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

// "length" is considered a Property. Determines actual number of elements in Array, NOT zero based
console.log(friends.length);

// To get the last index in the Array use "length - 1"
console.log(friends[friends.length - 1]);

// How to replace values within existing Array
// Arrays can mutate "const" because it is not a Primitive Value
friends[2] = 'Jay'
console.log(friends);

const firstName = 'Jonas';

// Can replace actual string with variable name
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Array Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age1 = calcAge(years[1]);
const age1 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



// Basic Array Operations (Methods)


const friends = ['Michael', 'Steven', 'Peter'];

// Add Elements

// "push" moves the new value to the end of the Array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// "unshift" moves new value to the beginnning of the Array
friends.unshift('John');
console.log(friends);

// Remove Elements

// "pop" removes the last value in the Array
friends.pop();  

// const popped = friends.pop(); removes last value and returns the value that wass popped into the console.
const popped = friends.pop();
console.log(popped);
console.log(friends); 

// "shift" removes the first value in the Array
friends.shift();  
console.log(friends);

// "indexOf" returns the index at which the element is located
console.log(friends.indexOf('Steven'));
// if "indexOf" is used on a nonexisting value it will reture -1
console.log(friends.indexOf('Bob'));

// "includes" will state exisiting as "true" and nonexisting value as "false"
// Does not perform Type Coercion
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
    console.log('You have a friend called Steven');
}



//////////////////////////////
//  CODING CHALLENGE #2

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}

// const calcTip = bill => 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);




// INTRODUCTION TO OBJECTS

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'] 
];

// these curly braces are used to define Objects
// example below) an Object that contains 5 key values/ properties
// Known as Object Literal syntax
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};




// DOT VS BRACKET NOTATION

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

// Dot Notation - used to get a property from an object

// "." is an operator that will go to the object and retreive the specified property
console.log(jonas.lastName);
console.log(jonas['lastName']);

// Bracket Notation - More expressive than dot notation cuz it allows a variable to specify all or part of property name

// In this situation square brackets allow you to put any expression
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')
console.log(jonas[interestedIn]);

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend  is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);




// OBJECT METHODS

// any function that is attached to an object is called a Function Method
// ".this" refers to the const that it is used in

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    //  }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a drivers's license."
console.log(jonas.getSummary());




//////////////////////////////
//  CODING CHALLENGE #3


const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}





// ITERATION: FOR THE LOOP

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for keeps running while condition is TRUE
// "++" means increasing the value by one

for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}





// LOOPING ARRAYS BREAKING AND CONTINUING 

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'], 
    true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// console.log(jonas[2])
// console.log(jonas[3])
// console.log(jonas[4])

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// Continue Keyword
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    // If the type of the current element is not a string then continue (translation)
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

// Break Keyword
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    // As soon a number is read in the Object then it will cease to continue
    if(typeof jonas[i] !== 'string') break;

    console.log(jonas[i], typeof jonas[i]);
}





// LOOPING BACKWARDS AND LOOPS IN LOOPS

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'], 
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`)
    }
}




// THE WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// You wanna keep the loop running while repitions are less or equal to 10 (for this specific example)

// Called "While Loop" bcs it will run WHILE the condition "(rep <= 10)" is true

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
} 

let dice = Math.trunc(Math.random() * 6) + 1;

// (dice !==6) means dice is different from 6

while (dice !==6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}




//////////////////////////////
//  CODING CHALLENGE #4

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = [];
const totals = [];


// In each iteration there will be a new "tip" variable being made
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/