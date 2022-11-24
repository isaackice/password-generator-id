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



// Assignment Code

function generatePassword(){
var passwordLength = prompt('Choose a length of at least 8 characters and no more than 128 characters.')
console.log(passwordLength)
var confirmLower = confirm('Would you like to include lowercase letters?')
console.log(confirmLower)
var confirmCapital = confirm('Would you like to include capital letters?')
console.log(confirmCapital)
var confirmNumbers = confirm('Would you like to include numbers?')
console.log(confirmNumbers)
var confirmSC = confirm('Would you like to include special characters?')
console.log(confirmSC)
var charLower = 'abcdefghijklmnopqrstuvwxyz'
console.log(charLower)
var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
console.log(charUpper)
var charNumbers = '1234567890'
console.log(charNumbers)
var charSC = '!@#$%^&*'
console.log(charSC)
var charBase = ''
if (confirmLower == true) {
  charBase += charLower
  console.log(charBase)
}
if (confirmCapital == true) {
  charBase += charUpper
  console.log(charBase)
}
if (confirmNumbers == true) {
  charBase += charNumbers
  console.log(charBase)
}
if (confirmSC == true) {
  charBase += charSC
  console.log(charBase)
}
var returnedPassword = ''
for(i=0;i<passwordLength;i++){
  returnedPassword += charBase.charAt(Math.floor(Math.random()* charBase.length))
}
return returnedPassword

}


