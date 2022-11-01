// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//retuen a random number ranging from min to max
function randomInt(min, max) {
    // if max is not defined, assume range from 0 to min
    if (!max) {
        max = min
        min = 0 
    }

    var rand = Math.random()
    return Math.floor(min * (1 - rand) + rand * max)
}
// grabs random item list and returns to the user
function grabRandomItem(list) { 
    return list[randomInt(list.length)]
}

function generatePassword() {

var userInput = window.prompt("How long would you like your password to be?") //asks user to input length of password

var passwordLength = parseInt(userInput)
// returns the following message if user enters something other than a numeric value or nothing at all
    if (isNaN(passwordLength)) {
        window.alert("Please enter a numeric value")
        return
    }   

    if (passwordLength < 8 || passwordLength > 128) { // returns the following message to the user if they input a length outside of parameters
        window.alert("Password length must be at least 8 characters and no more than 128 characters")
        return
    } 

var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
var userWantsSpecialCharacters = window.confirm("Would you like to include special characters in your password?")
var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] // all possible numbers
var specialcharactersList = ["!", "@", "#", "$", "%", "^", "&", "*"] // all possible symbols
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] // all possible lower case letters
var uppercaseList = [] // for loop below 

var allLists = []
// for loop below turns lower case letters into uppercase 
for (var i = 0; i < lowercaseList.length; i++){
    uppercaseList[i] = lowercaseList[i].toUpperCase() 
}

if (userWantsNumbers === true) {
    allLists.push(numberList) // returns passwords containing numbers
}

if (userWantsSpecialCharacters === true) { // returns passwords containing symbols
    allLists.push(specialcharactersList)
}

if (userWantsLowercase === true) { // returns passwords containing lower case letters
    allLists.push(lowercaseList)
}

if (userWantsUppercase === true) { // returns passwords containing upper case letters
    allLists.push(uppercaseList)
}

if (allLists.length === 0) { //if user does not enter any credentials, default will be numbers
    allLists.push(numberList)
}

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
    var randomList = grabRandomItem(allLists)
    var randomCharacter = grabRandomItem(randomList)
    generatedPassword += randomCharacter
}

//console.log(generatedPassword)   

return generatedPassword
}

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  
}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);