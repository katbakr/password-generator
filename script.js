///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  var chooseLength = window.prompt ("How long do you want your password? Enter number between 8-128.")
  var includeUppercase = window.prompt ("Do you need uppercase letters in your password? Enter Y(es) or N(o).")
  var includeNumbers = window.prompt ("Do you need numbers in your password? Enter Y or N.")
  var includeSpec = window.prompt ("Do you need a special character in your password? Enter Y or N.")

  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var numberList = ["1", "2","3", "4", "5", "6", "7", "8", "9", "0"]
  var specList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", "/", "<", ">"]

  var sentenceArray = []
  for (let i = 0; i < chooseLength; i++)
  {
    

    var uppercaseIndex = Math.floor(Math.random()*uppercaseList.length);
    var lowercaseIndex = Math.floor(Math.random()*lowercaseList.length);
    var numberIndex = Math.floor(Math.random()*numberList.length);
    var specialIndex = Math.floor(Math.random()*specList.length);

    var uppercase = uppercaseList[uppercaseIndex]
    var lowercase = lowercaseList[lowercaseIndex]
    var number = numberList[numberIndex]
    var specialChar = specList[specialIndex]

    //  var sentenceArray = []
    //  sentenceArray.push(...lowercase)
     if (includeUppercase==="Y") {
      sentenceArray.push(uppercase)
     }
     else if (includeNumbers==="Y") {
       sentenceArray.push(number)
     }
     else if (includeSpec==="Y") {
       sentenceArray.push(specialChar)
     }
     else {sentenceArray.push()}
     sentenceArray.push(lowercase) 

  }

  var password = sentenceArray.join()
    window.alert("your new password is: " + password)
}


//GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page