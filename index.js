//////////////////Question-1


var inputChar = prompt("Enter a character (number or letter):");

function checkCharType(char) {
    
    var charCode = char.charCodeAt(0);
    if (char >= '0' && char <= '9') {
        console.log("'" + char + "' is a number.");
    }
    
    else if (char >= 'A' && char <= 'Z') {
        console.log("'" + char + "' is an uppercase letter.");
    }
    else if (char >= 'a' && char <= 'z') {
        console.log("'" + char + "' is a lowercase letter.");
    }
    else {
        console.log("'" + char + "' is not a number, uppercase letter, or lowercase letter.");
    }
}

checkCharType(inputChar);


//////////////////Question-2

var input1 = parseInt(prompt("Enter the first integer:"));
var input2 = parseInt(prompt("Enter the second integer:"));

function findLargerNumber(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is larger than " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " is larger than " + num1);
    } else {
        console.log("Both numbers are equal: " + num1);
    }
}
findLargerNumber(input1, input2);


//////////////////Question-3

// Function to determine if a number is positive, negative, or zero

var numInput = parseFloat(prompt("Enter a number:"));
function checkNumberType(number) {
    if (number > 0) {
        console.log(number + " is a positive number.");
    } else if (number < 0) {
        console.log(number + " is a negative number.");
    } else {
        console.log("The number is zero.");
    }
}

checkNumberType(numInput);

////////////////////Question-4

function isVowel(char) {
    // Convert the character to lowercase to handle both uppercase and lowercase vowels
    var lowerChar = char.toLowerCase();

    // Check if the character is a vowel using if-else statements
    if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
        return true; // Return true if it's a vowel
    } else {
        return false; // Return false if it's not a vowel
    }
}

var userInput = prompt("Enter a character:");

var result = isVowel(userInput);


console.log("Is '" + userInput + "' a vowel? " + result);


//////////////////Question-5
//  Write a program that Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var userInput = prompt("Enter your password:");

var correctPassword = "good123";

function validatePassword(userPassword) {
    // Check if user has entered a password
    if (!userPassword) {
        return "Please enter your password.";
    } else {
        // Check if both passwords are the same
        if (userPassword === correctPassword) {
            return "Correct! The password you entered matches the original password.";
        } else {
            return "Incorrect password.";
        }
    }
}
var validationMessage = validatePassword(userInput);

alert(validationMessage);

//////////////////Question-6
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

/////////////////////////////////fix the code below
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
////////////////////Question-7


let timeInput = prompt("Enter the time:");

let time = parseInt(timeInput);

let greet;

if (time >= 400 && time < 1200) {
    greet = "Good Morning";
} else if (time >= 1200 && time < 1700) {
    greet = "Good Afternoon";
} else if (time >= 1700 && time < 2100) {
    greet = "Good Evening";
} else {
    greet = "Good Night";
}

console.log(greet);

