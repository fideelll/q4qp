
var a = document.getElementById("Name");
var b = document.getElementById("LName");
var c = document.getElementById("Password");
var d = document.getElementById("Email");
var e = document.getElementById("Gender");
var f = document.getElementById("support");

function blurfn1(){
    if (a.value == "")
    {
        a.style.border = "2px solid red";
    }else{
        a.style.border = "1px solid rgb(87, 51, 51)";
    }
} 

function blurfn2(){
    if (b.value == "")
    {
        b.style.border = "2px solid red";
    }else{
        b.style.border = "1px solid rgb(87, 51, 51)";
    }
} 

function blurfn3(){
    if (c.value == "")
    {
        c.style.border = "2px solid red";
    }else{
        c.style.border = "1px solid rgb(87, 51, 51)";
    }
} 

function blurfn4(){
    if (d.value == "")
    {
        d.style.border = "2px solid red";
    }else{
        d.style.border = "1px solid rgb(87, 51, 51)";
    }
} 

function blurfn5(){
    if (e.value == "")
    {
        e.style.border = "2px solid red";
    }else{
        e.style.border = "1px solid rgb(87, 51, 51)";
    }
} 

function blurfn6(){
    if (f.value == "")
    {
        f.style.border = "2px solid red";
    }else{
        f.style.border = "1px solid rgb(87, 51, 51)";
    }
} 

function submit(){
    window.location.href("profile.html");
    var fn=document.getElementById("FName").value;
    var ln=document.getElementById("LName").value;
    var sx=document.querySelector('input[name="genderS"]:checked').value;
    var em=document.getElementById("Email").value;
    var tx=document.getElementById("textArea").value;
    
    localStorage.setItem('firstname', fn);
    localStorage.setItem('lastname', ln);
    localStorage.setItem('gndr', sx);
    localStorage.setItem('email', em);
    localStorage.setItem('text', tx);
}