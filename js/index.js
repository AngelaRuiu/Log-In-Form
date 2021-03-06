/**
 * Created by Byga on 7/30/2017.
 */
function checkPassword() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById('confirm_password').value;
    if (!hasIllegalCharacters(password)) {
        markAsValid(document.getElementById("illegalCharactersError"));
    }
    else {
        markAsInvalid(document.getElementById("illegalCharactersError"));
    }
    if (!hasAtLeastEightCharacters(password)) {
        markAsInvalid(document.getElementById("lengthError"));
    }
    else {
        markAsValid(document.getElementById("lengthError"));
    }
    if (!hasNumbers(password)) {
        markAsInvalid(document.getElementById("numbersError"));
    }
    else {
        markAsValid(document.getElementById("numbersError"));
    }
    if (!hasLowerAndUpperCaseLetters(password)) {
        markAsInvalid(document.getElementById("upperAndLowerCaseError"));
    }
    else {
        markAsValid(document.getElementById("upperAndLowerCaseError"));
    }
    if (password == confirm_password) {
        markAsValid(document.getElementById("matchPassError"));
    }
    else {
        markAsInvalid(document.getElementById("matchPassError"));
    }

}
function checkPasswordConfirm() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById('confirm_password').value;
    if (!hasIllegalCharacters(confirm_password)) {
        markAsValid(document.getElementById("illegalCharactersError"));
    }
    else {
        markAsInvalid(document.getElementById("illegalCharactersError"));
    }
    if (!hasAtLeastEightCharacters(confirm_password)) {
        markAsInvalid(document.getElementById("lengthError"));
    }
    else {
        markAsValid(document.getElementById("lengthError"));
    }
    if (!hasNumbers(confirm_password)) {
        markAsInvalid(document.getElementById("numbersError"));
    }
    else {
        markAsValid(document.getElementById("numbersError"));
    }
    if (!hasLowerAndUpperCaseLetters(confirm_password)) {
        markAsInvalid(document.getElementById("upperAndLowerCaseError"));
    }
    else {
        markAsValid(document.getElementById("upperAndLowerCaseError"));
    }
    if (password == confirm_password) {
        markAsValid(document.getElementById("matchPassError"));
    }
    else {
        markAsInvalid(document.getElementById("matchPassError"));
    }

}
/*function validateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("email").value;
    if (email.length > 0) {

        if (email == mailformat) {
            doNotChangeColorUponValidation(document.getElementById("email"));
        }
        else {
            changeColorUponValidation(document.getElementById("email"));

        }
    }  else{
        doNotChangeColorUponValidation(document.getElementById("email"));
    }
}*/
function changeInputStylePassword() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById('confirm_password').value;
    if (password.length > 0) {
        if (!checkPassword(password)) {
            changeColorUponValidation(document.getElementById("password"));
        }
        else {
            doNotChangeColorUponValidation(document.getElementById("password"));
        }
        if (password != confirm_password) {
            changeColorUponValidation(document.getElementById("confirm_password"));
        }
        else {
            doNotChangeColorUponValidation(document.getElementById("confirm_password"));
            doNotChangeColorUponValidation(document.getElementById("password"));
        }
        document.getElementById("errorMessages").style.display = "none";
    }
    else
    {
        doNotChangeColorUponValidation(document.getElementById("password"));
        document.getElementById("errorMessages").style.display = "none";
    }
}

function showErrorMessages() {
    document.getElementById("errorMessages").style.display = "block";
}



function markAsValid(element) {
    if (!element.classList.contains("valid")) {
        element.classList.add("valid");
    }
    if (element.classList.contains("invalid")) {
        element.classList.remove("invalid");
    }
}

function markAsInvalid(element) {
    if (!element.classList.contains("invalid")) {
        element.classList.add("invalid");
    }
    if (element.classList.contains("valid")) {
        element.classList.remove("valid");
    }
}
function doNotChangeColorUponValidation(element) {
    if (!element.classList.contains("initial")) {
        element.classList.add("initial")
    }
    if (element.classList.contains("red")) {
        element.classList.remove("red");
    }
}

function changeColorUponValidation(element) {
    if (!element.classList.contains("red")) {
        element.classList.add("red")
    }
    if (element.classList.contains("initial")) {
        element.classList.remove("initial");
    }
}
function hasIllegalCharacters(password) {
    var illegalCharacters = ["<", ">", "/", "?", ".", ",", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];
    for (var i = 0; i < illegalCharacters.length; i++) {
        if (password.indexOf(illegalCharacters[i]) > -1) {
            return true;
        }
    }
    return false;
}
function hasAtLeastEightCharacters(password) {
    return password.length >= 8;
}

function hasNumbers(password) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var j = 0; j < numbers.length; j++) {
        if (password.indexOf(numbers[j]) > -1) {
            return true;
        }
    }
    return false;
}

function hasLowerCaseLetters(password) {
    return password != password.toUpperCase();
}

function hasUpperCaseLetters(password) {
    return password != password.toLowerCase();
}

function hasLowerAndUpperCaseLetters(password) {
    return hasLowerCaseLetters(password) && hasUpperCaseLetters(password);
}

function showSignIn() {
    var signIn = document.getElementById("signIn");
    var signUp = document.getElementById("signUp");
    var forgotPassword = document.getElementById("forgotPassword");
    if ((signUp).style.display = "block") {
        signUp.style.display = "none"
    }
    if ((forgotPassword).style.display = "block") {
        forgotPassword.style.display = "none"
    }
    signIn.style.display ="block";
}


function showSignUp() {
    var signIn = document.getElementById("signIn");
    var signUp = document.getElementById("signUp");
    var signInAfterReg = document.getElementById("signInAfterReg");
    if ((signIn).style.display = "block") {
        signIn.style.display = "none"
    }
    if ((signInAfterReg).style.display = "block") {
        signInAfterReg.style.display = "none"
    }
    signUp.style.display ="block";
}
function showSignInAfterReg() {
    var signInAfterReg = document.getElementById("signInAfterReg");
    var signUp = document.getElementById("signUp");
    if ((signUp).style.display = "block") {
        signUp.style.display = "none"
    }
    signInAfterReg.style.display ="block";
}
function showForgotPassword(){
    var signIn = document.getElementById("signIn");
    var signUp = document.getElementById("signUp");
    var forgotPassword = document.getElementById("forgotPassword");
    var signInAfterReg = document.getElementById("signInAfterReg");
    if((signIn).style.display = "block"){
        signIn.style.display = "none"
    }
    if ((signUp).style.display = "block") {
        signUp.style.display = "none"
    }
    if ((signInAfterReg).style.display = "block") {
        signInAfterReg.style.display = "none"
    }
    forgotPassword.style.display ="block";
}
