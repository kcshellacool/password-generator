function passwordgen() {
    var numeric = '1234567890';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = lowercase.toUpperCase();
    var special = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    var numericselect = confirm("Do you want to include numbers in your password?");
    var lowercaseselect = confirm("Do you want to include lowercase letters in your password?");
    var uppercaseselect = confirm("Do you want to include uppercase letters in your password?");
    var specialselect = confirm("Do you want to include special characters in your password?")
    var length = prompt("Password Length?")

    var pool = '';
    var password = '';
/*generate password*/
    if (numericselect == true) {
        pool += numeric;
    }
    if (lowercaseselect == true) {
        pool += lowercase;
    }
    if (uppercaseselect == true) {
        pool += uppercase;
    }
    if (specialselect == true) {
        pool += special;
    }

    for (let i = 0; i < length; i++) {
        password += pool.charAt(Math.floor(Math.random()*pool.length));
    } 

    

    var showpassword = document.getElementById("password-gen");
    showpassword.innerHTML = password;
 
    var content = document.getElementById("password-gen").textContent;
    navigator.clipboard.writeText(content);
    
    var copydialogue = document.getElementById("copy");
    copydialogue.innerHTML = "Copied to Clipboard!";

   


}