

// Assignment Code and Event Listener to prompt questions when button is clicked
document.querySelector("#generate").addEventListener("click", writePassword);


// Password Generator will provide a password with 8 to 50 characters long, based on 
//certian criterias that the user chooses. 

          //---------------------------Arrays----------------------------------           
                    //Numbers
  var number = ["0","1","2","3","4","5","6","7","8","9"];
                    //Speical Characters
  var specialChar = ["!","@","#","$","%","^","&","*","(",")"];
                    //Lower Case Letters
  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                    //Upper Case Letters 
   var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Declarations
  var confirmLength ="";
  var confirmNumeric;
  var confirmSpecialCharacter;
  var confirmLowerCase;
  var confirmUpperCase;

    //Start Funcation to Generate Password
    function generatePassword() {
      var confirmLength = (prompt("How long do you want your password? Choose a number between 8-50"));
    
         //This will be trigger a pop-up if incorrect amount is place in the prompt
    while(confirmLength <= 7 || confirmLength >= 51) {
    alert("Password must be between 8-50 characters");
    var confirmLength = (prompt("Choose a number between 8 - 50"));
    } 
    
    //Will tell/xonfrim the user how long the password will be 
    alert('Please select Yes on one of the up coming questions');

                            //Determines content of the password
        //Numbers  
    var confirmNumeric = confirm("OK - Yes or Cancel - No. Would You like to include Numbers to your Passward?");
        //Special Character
    var confirmSpecialCharacter = confirm("OK - Yes or Cancel - No.  Would You like to add Speical Characters?");
        //Lowercase
        var confirmLowerCase = confirm("OK - Yes or Cancel - No.  Would you like to add Lowercase Letters?");
        //Uppercase
    var confirmUpperCase = confirm("OK - Yes or Cancel - No.  Would You like to add Uppercase Letters?");

    while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumeric === false) {
      alert("You must say yes to one of the following: addings numbers, adding speical characters, addings lowercase letters, or uppercase letters");
        //Numbers
    var confirmNumeric = confrim("OK - Yes or Cancel - No.  Would You like to add Numbers to your Passward?");
        //Speical Characters
    var confirmSpecialCharacter = confrim("OK - Yes or Cancel - No.  Would You like to add Speical Characters?");
        //Lowercase
    var confirmLowerCase = confrim("OK - Yes or Cancel - No.  Would you like to add Lowercase Letters?");
        //Uppercase
    var confirmUpperCase = confrim("OK - Yes or Cancel - No.  Would You like to add Uppercase Letters?");
    }


    //Assigning Password Parameters 
    var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumeric) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)


      var randomPassword = "";

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