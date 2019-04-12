var a = localStorage.getItem("newUser1");
a = JSON.parse(a);

console.log(a[0].email);
var userName  = a[0].email.slice(0 ,a[0].email.length-10);
console.log(userName);
document.getElementById("h1").innerHTML = userName;

x = localStorage.getItem("marks")
x = JSON.parse(x)
document.getElementById("marks1").innerHTML = x + "%";

if(x > 70){
    document.getElementById("p2").innerHTML = "Congratulations!  You are passed "
}
else if(x < 69){
    document.getElementById("p1").innerHTML = "Sorry!  You are failed "
}

function btn1(){
    window.location.href = "index.html"
    x = localStorage.removeItem("marks");
}