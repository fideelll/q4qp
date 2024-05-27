function blurfn1(){
    var x = document.getElementById("Name");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }else{
        x.style.border = "1px solid rgb(87, 51, 51)";
    }
} 

function blurfn2(){
    var x = document.getElementById("LName");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }else{
        x.style.border = "1px solid rgb(87, 51, 51)";
    }
} 

function blurfn3(){
    var x = document.getElementById("Password");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }else{
        x.style.border = "1px solid rgb(87, 51, 51)";
    }
} 

function blurfn4(){
    var x = document.getElementById("Email");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }else{
        x.style.border = "1px solid rgb(87, 51, 51)";
    }
} 

function blurfn5(){
    var x = document.getElementById("Gender");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }else{
        x.style.border = "1px solid rgb(87, 51, 51)";
    }
} 

function blurfn6(){
    var x = document.getElementById("support");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }else{
        x.style.border = "1px solid rgb(87, 51, 51)";
    }
} 

function submit(){
    window.location.replace("profile.html");
}