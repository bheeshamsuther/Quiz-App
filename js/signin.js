var email = document.getElementById('email');
var password = document.getElementById('password');
var mydiv1 = document.getElementById('message');

function sign(){
  
  
  // var clear = email.value;
  
if (document.getElementById("name").value.length === 0) {
  alert("Please enter your Frist name");
  document.getElementById("name").focus();
  return false
}
if(document.getElementById("lastname").value.length === 0) {
   alert("Please enter your Last Name");
  document.getElementById("lastname").focus();
  return false
}
var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
   if (!(email.value.match(regex))) {
   alert("Please correct email address");
   return false;
   }
if(document.getElementById("password").value.length === 0) {
 alert("Please enter your Password ");
 document.getElementById("password").focus();
 return false
}
if(document.getElementById("password").value.length < 8) {
  alert("Please enter your Password must be 8 correcter ");
  document.getElementById("password").focus();
  return false
 }
 


else{
var user = localStorage.getItem('user');
console.log(user);
var setvalue = false;
if(user === null){
user = [];
}
else{
user = JSON.parse(user);
console.log(user);
}
var user1 = {
email: email.value,
password: password.value,
}
for(var i=0; i<user.length; i++){
if(user[i].email === email.value){
setvalue =  true;
}
}

if(password.value.length === 0){
  alert("please enter password")
}
else{

if(setvalue === true){
mydiv1.innerHTML = "Your Email Alradey Exits"
window.location.href = ("index.html");

}
else{
user.push(user1);
user = JSON.stringify(user);
user = localStorage.setItem('user', user);
// email.value =  '';
// password.value =  '';
// name.value =  '';
// lastname.value =  '';
// Contact.value =  '';
// age.value =  '';
// document.getElementById("message").reset()
mydiv1.innerHTML = "Sucessfully Sign Up"
window.location.href = ("index.html");

}
}}

}
