// Assignment Code
var generateBtn = document.querySelector("#generate");
// Assigned variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";
// Write password to the #password input
function enterpassword() {
  var password = genratepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
debugger;
//write password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
//generate password function gets called in writePassword function, and it should return the final password
function generatePassword(){
  //do random generation here and return the final password in the end
  var result = "";
  //ask the user how many characters they want
  var length = prompt("Type in the required length for your password (minimum 8 - max 128)");
  if(isNaN(length)){
    alert("You must input a number!");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("You must choose a length of between 8 and 128 characters");
    return generatePassword()
  }
  //ask the user if they want to include upper, lower, num, special?
  var hasUpper = confirm("Click OK to include Upper case letters or cancel to not include them");
  var hasLower = confirm("Click OK to include Lower case letters or cancel to not include them");
  var hasNumbers = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");
  if(!hasUpper&&!hasLower&&!hasNumbers&&!hasSpecial){
    alert("You must choose at least one option!");
    return generatePassword()
  }
  if(hasUpper){
    chosenCharacters += upper
  }
  if(hasLower){
    chosenCharacters += lower
  }

  if(hasNumbers) {
    chosenCharacters += numbers
    chosenCharacters += numbers
  }

  if(hasSpecial) {
    chosenCharacters += special
  }
for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;
}


//confirm();

// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
