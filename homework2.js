//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(`My favorite pizza is ${person3.pizza[0]}`)
console.log(`But my other favorite pizza is ${person3.pizza[1]}`)

console.log(`My favorite tacos are ${person3.tacos}`)

console.log(`My favorite burgers are ${person3.burgers}`)

console.log(`My favorite ice cream #1 is ${person3.ice_cream[0]}`)
console.log(`My favorite ice cream #2 is ${person3.ice_cream[1]}`)
console.log(`My favorite ice cream #3 is ${person3.ice_cream[2]}`)

console.log(`My favorite shake from ${Object.keys(person3.shakes[0])[0]} is ${person3.shakes[0].oberwise}`)
console.log(`My favorite shake from ${Object.keys(person3.shakes[0])[1]} is ${person3.shakes[0].dunkin}`)
console.log(`My favorite shakes from ${Object.keys(person3.shakes[0])[2]} are ${person3.shakes[0].culvers}`)
console.log(`My favorite shake from ${Object.keys(person3.shakes[0])[3]} is the ${person3.shakes[0].mcDonalds}`)
console.log(`My favorite shake from ${Object.keys(person3.shakes[0])[4]} is ${person3.shakes[0].cupids_candies}`)



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

// Create our Person Prototype

// Create our Person Prototype


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

Person.prototype.addAge = function(years) {
    this.age += years;
};

const person1 = new Person("Samer", 25);
const person2 = new Person("Rahiem", 30);


person1.printInfo();
person2.printInfo();

person1.addAge(3);

person1.printInfo();
person2.printInfo();

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(inputString) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (inputString.length > 10) {
                resolve("Big word");
            } else {
                reject("Small Number");
            }
        }, 0); 
    });
}

const inputString = "This is a big word";
checkStringLength(inputString)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


    // --------------------  CODEWARS   --------1-------
    // Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. const chai = require('chai');
    // const assert = chai.assert;
    // https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript/6526be3c003d3b17c087b6e7
    const chai = require('chai');
    const assert = chai.assert;
    
    function evenOrOdd(number) {
        return number % 2 === 0 ? "Even" : "Odd";
    }
    
    describe("Sample tests", () => {
        it("2 is even", () => {
            assert.strictEqual(evenOrOdd(2), "Even");
        });
        it("7 is odd", () => {
            assert.strictEqual(evenOrOdd(7), "Odd");
        });
        it("-42 is even", () => {
            assert.strictEqual(evenOrOdd(-42), "Even");
        });
        it("-7 is odd", () => {
            assert.strictEqual(evenOrOdd(-7), "Odd");
        });
        it("0 is even", () => {
            assert.strictEqual(evenOrOdd(0), "Even");
        });
    });
    



    // --------------------  CODEWARS   --------2-------

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num) {
    const squaredDigits = String(num)
        .split('')
        .map(digit => Math.pow(parseInt(digit, 10), 2))
        .join('');

    return parseInt(squaredDigits, 10);
}

console.log(squareDigits(9119)); 
console.log(squareDigits(0));   