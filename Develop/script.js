

// Assignment Code and Event Listener to prompt questions when button is clicked
document.querySelector("#generate").addEventListener("click", writePassword);


// Password Generator will provide a password with 8 to 50 characters long, based on 
//certian criterias that the user chooses. 

          //---------------------------Arrays----------------------------------           
                    //Numbers
  var number = ["0","1","2","3","4","5","6","7","8","9"];
                    //Speical Characters
  var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~","?","@"];
                    //Lower Case Letters
  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                    //Upper Case Letters 
   var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Declarations
  var confirmLength ="";
  var confirmSpecialCharacter;
  var confirmNumericCharacter;
  var confirmLowerCase;
  var confirmUpperCase;

    //Start Funcation to Generate Password
    function generatePassword() {
      var confirmLength = (prompt("How many characters would you like your password to contain? Choose a number between 8 - 50"));
    
         //This will be trigger a pop-up if incorrect amount is place in the prompt
    while(confirmLength <= 7 || confirmLength >= 51) {
    alert("Password must be between 8-50 characters");
    var confirmLength = (prompt("How many characters do you want your password to have? Choose a number between 8 - 50"));
    } 
    
    //Will tell the user how long the password will be 
    alert(`Your password will have ${confirmLength} characters`);

                            //Determines content of the password
        //Numbers  
    var confirmNumericCharacter = confirm("Would You like to add Numbers to your Passward? OK - Yes or Cancel - No");
        //Special Character
    var confirmSpecialCharacter = confirm("Would You like to add Speical Characters? OK - Yes or Cancel - No");
        //Lowercase
        var confirmLowerCase = confirm("Would you like to add Lowercase Letters? OK - Yes or Cancel - No");
        //Uppercase
    var confirmUpperCase = confirm("Would You like to add Uppercase Letters? OK - Yes or Cancel - No");

    while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
      alert("You must choose at least one parameter");
        //Numbers
    var confirmNumericCharacter = confrim("Would You like to add Numbers to your Passward? OK - Yes or Cancel - No");
        //Speical Characters
    var confirmSpecialCharacter = confrim("Would You like to add Speical Characters? OK - Yes or Cancel - No");
        //Lowercase
    var confirmLowerCase = confrim("Would you like to add Lowercase Letters? OK - Yes or Cancel - Nos");
        //Uppercase
    var confirmUpperCase = confrim("Would You like to add Uppercase Letters? OK - Yes or Cancel - No");
    }


    //Assigning Password Parameters 
    var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)


      var randomPassword = ""

    for (var i = 0; i < confirmLength; i++) {
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
    }
    return randomPassword;
}

    // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}