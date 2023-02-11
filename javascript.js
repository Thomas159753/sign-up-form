const password = document.getElementById("user_password");
const confirm_password = document.getElementById("confirm_password");
const submit = document.getElementById("submit");
const passwordText = document.querySelector(".pasMatch");
const validiti = document.querySelector(".validiti");


function validatePassword(){
  if(password.value != confirm_password.value) {
    password.style.border = "2px solid red";
    confirm_password.style.border = "2px solid red";
    passwordText.innerText = "* Passwords Don't Match";

  } else {
    confirm_password.setCustomValidity('');
    passwordText.innerText = "";
    password.style.border = "1px solid black";
    confirm_password.style.border = "1px solid black";
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;