// Assignment Code

var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var numberChar = "0123456789";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// Determine the length of the password

function determineLength(){
  passwordLength = prompt("This is password generator. Please choose how many characters long you would like your password to be (between 8-128 characters): ");

    if (passwordLength<8){
      alert("Sorry, password length must vary between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Sorry, password length must vary between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Sorry, password length must vary between 8-128 characters");
      determineLength();
    }else{
    alert("Success! The next 3 questions will determine what type of password you want to be generated.");
    }
    return passwordLength;
}

// Determine if you want to include uppercase characters in the password

function determineUppercase(){
  uppercaseCheck = prompt("Would you like to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}

// Determine if you want to include numbers in the password

function determineNumbers(){
  numberCheck = prompt("Would you like to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

// Determine if you want to include special characters in the password

function determineSpecial(){
  specialCheck = prompt("Would you like to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

// Combine the previous functions' input and generate a password using a forloop 

function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

var characters = lowercaseChar;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
