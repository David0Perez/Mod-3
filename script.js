// Assignment Code
var generateBtn = document.querySelector("#generate");

var input = [""];
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercases = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var ranPassword = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var passLength = prompt("Enter lenght of characters:")
  
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Invalid entry - Please enter a number between 8 and 128");
      return
    }
  
    var lowercaseConfirm = confirm("Include lowercase letters?");
    if (lowercaseConfirm === true) {
      for (var i = 0; i < lowercases.length; i++) {
        input.push(lowercases[i]);
      }
      console.log(input)
    }
  
    var uppercaseConfirm = confirm("Include uppercase letters?");
    if (uppercaseConfirm === true) {
      for (var i = 0; i < uppercases.length; i++) {
        input.push(uppercases[i]);
      }
      console.log(input)
    }
  
    var numberConfirm = confirm("Include numbers?");
    if (numberConfirm === true) {
      for (var i = 0; i < numbers.length; i++) {
        input.push(numbers[i]);
      }
      console.log(input)
    }
  
    var specialConfirm = confirm("Include special characters?");
    if (specialConfirm === true) {
      for (var i = 0; i < special.length; i++) {
        input.push(special[i]);
      }
      console.log(input)
    }
    if (uppercaseConfirm === false && numberConfirm === false && lowercaseConfirm === false && specialsConfirm === false) {
      alert("You must chose at least 1 type of character.")
      return;
    }
  
    var randPassword = ""
  
    const confirmLength = parseInt(passLength)
  
    for (var i = 0; i < confirmLength; i++) {
      input[
        Math.floor(Math.random() * input.length)];
  
      randPassword += input[
        Math.floor(Math.random() * input.length)];
    }
    return randPassword;
  }