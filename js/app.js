var email = document.getElementById('email');
var password = document.getElementById('password');
var mydiv1 = document.getElementById('message');
function sign(){
 window.location.href = ("signup.html");
}
function login(){  
    
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var user = localStorage.getItem('user');
    console.log(user);
    var newUser = { 
    email: email.value,
    password: password.value,
    }
    if(user === null){
    user = [];
    }
    else{
    user = JSON.parse(user);
    }
    var setvalue = false;
    for(var i=0; i<user.length; i++){
    if(user[i].email === email.value && user[i].password === password.value){
    setvalue =  true;
    }
    }
    if(setvalue === false){
    alert("enter correct email or password");
    }
    else{   
    var email1 = document.getElementById('email');
    var password1 = document.getElementById('password');
    var newUser1  = {
    email : email1.value,
    password : password1.value
    }
    var array1 = [];
    array1.push(newUser1);
    console.log(array1);
        
    localStorage.setItem("newUser1", JSON.stringify(array1));
    email1.value =  '';
    password1.value =  '';
    mydiv1.innerHTML = "sucessfully login"
    window.location.href = ("home.html");
    }
    if  (setvalue === false){
    mydiv1.innerHTML ="login field"
    }
    }