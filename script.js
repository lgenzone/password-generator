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
    var rando = Math.random()
    return Math.floor(min * (1 - rando) + rando * max)
}

function grabRandomItem(list) {
    return list[randomInt(0, list.length)]
}

function generatePassword() {

var userInput = prompt("How long would you like your password to be?")

var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)){

        alert("Please enter a numeric value")
        return
}

if (passwordLength < 8 ||passwordLength > 128) {
    alert("Password length must be at least 8 characters and no more than 128 characters")
    return
}

var userWantsNumbers = confirm("Would you like to include numbers in your password?")
var userWantsSpecialCharacters = confirm("Would you like to include special characters in your password?")
var userWantsLowercase = confirm("Would you like to include lowercase letters in your password?")
var userWantsUppercase = confirm("Would you like to include uppercase letters in your password?")

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialcharactersList = ["!", "@", "#", "$", "%", "^", "&", "*"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = []

var allLists = []

for (var i = 0; i < lowercaseList.length; i++){
    uppercaseList[i] = lowercaseList[i].toUpperCase()
}

if (userWantsNumbers === true) {
    allLists.push(numberList)
}

if (userWantsSpecialCharacters === true) {
    allLists.push(specialcharactersList)
}

if (userWantsLowercase === true) {
    allLists.push(lowercaseList)
}

if (userWantsUppercase === true) {
    allLists.push(uppercaseList)
}

if (allLists.length ===0) {
    allLists.push(numberList)
}


var generatedPassword = ""

for (var i = 0; i < passwordLength; i++){
    var randomList = grabRandomItem(allLists)
    var randomCharacter = grabRandomItem(randomList)
    generatedPassword += randomCharacter
}

return generatedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}