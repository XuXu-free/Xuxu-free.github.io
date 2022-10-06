let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/test-photo01.jpg"){
        myImage.setAttribute("src", "images/test-photo02.jpg");
    }else {
        myImage.setAttribute("src", "images/test-photo01.jpg");
    }
}

let myBotton = document.querySelector("botton");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("Please Enter Your Name:");
    localStorage.setItem("name",myName);
    myHeading.textContent() = "It's cool, " + myName;
}

if(!localStorage.getItem("name")){
    setUserName();
}else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "It's cool, " + storedName; 
}

myBotton.onclick = function(){
    setUserName();
}