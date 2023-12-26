// form validation
// var form=document.getElementById("reg-form");
// var nameError = document.getElementById("name-error");
// var emailError = document.getElementById("email-error");
// var passError = document.getElementById("pass-error");
// var repassError = document.getElementById("repass-error");
// var submitError = document.getElementById("submit-error");
// function validatename() {
//   var name = document.getElementById("name").value;

//   if (name.length == 0) {
//     nameError.innerHTML = "Name is required";

//     return false;
//   }
//   if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
//     nameError.innerHTML = "Full Name Required";

//     return false;
//   }
//   nameError.innerHTML = '<i class="fa fa-check-circle">';
//   return true;
// }
// function validatepass() {
//   var pass = document.getElementById("pass").value;
//   if (pass.length == 0) {
//     passError.innerHTML = "Password is required";
//     return false;
//   }
//   if (pass.length < 8) {
//     passError.innerHTML = "Atleast 8 characters";
//     return false;
//   }
//   passError.innerHTML = '<i class="fa fa-check-circle">';
//   return true;
// }
// function validaterepass() {
//   var repass = document.getElementById("repass").value;
//   var pass = document.getElementById("pass").value;
//   if (repass.length == 0) {
//     repassError.innerHTML = "Confirm ur password";
//     return false;
//   }
//   if (repass != pass) {
//     repassError.innerHTML = "Password doesn't match";
//     return false;
//   }
//   if (repass == pass) {
//     repassError.innerHTML = '<i class="fa fa-check-circle">';
//     return true;
//   }
// }
// function validateemail() {
//   var email = document.getElementById("email").value;
//   if (email.length == 0) {
//     emailError.innerHTML = "Email is required";
//     return false;
//   }
//   if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
//     emailError.innerHTML = "Email is Invalid";
//     return false;
//   }
//   emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
//   return true;
// }
// function validateform(){
//   var email = document.getElementById("email").value;
//   var pass = document.getElementById("pass").value;
//   if(!validatename() || !validateemail() || !validatepass() || !validaterepass()){
//    alert("Please Enter the Details ⚠");
//   }
//   if(validatename() && validateemail() && validatepass() && validaterepass()){
//     localStorage.setItem('UserEmail',email);
//     localStorage.setItem('UserPaswd',pass);
//     alert("Account Created Successfully ✓");
//   }
// }
// Login Validate details
// function validatelogin(){
//   var logEmail= document.getElementById("log-email").value;
//   var logPass = document.getElementById("log-pass").value;

//   var getEmail=localStorage.getItem('UserEmail');
//   var getPaswd=localStorage.getItem('UserPaswd');

// if(logEmail == getEmail && logPass == getPaswd){
//   window.location.href="index.html";  
//   alert("Successfully Login");
// }else{
//   alert("Invalid Details");
//   window.location.href="LoginPage.html";  
// }
// }

// Used for responsive design for the Menu Bar
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

// Login Form Script File
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function login() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";
}
function register() {
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
}

// Product Viewing Script File
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");
SmallImg[0].onclick = function () {
  ProductImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
  ProductImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
  ProductImg.src = SmallImg[2].src;
};
SmallImg[3].onclick = function () {
  ProductImg.src = SmallImg[3].src;
};
