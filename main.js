let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'runner.jpg') {
        myImage.setAttribute('src','runner2.jpg');
    } else if(mySrc === 'runner2.jpg'){
        myImage.setAttribute('src','runner3.jpg');
    }else if(mySrc === 'runner3.jpg'){
        myImage.setAttribute('src','runner4.jpg');
    }else if(mySrc === 'runner4.jpg'){
        myImage.setAttribute('src','runner5.jpg');
    }else{
        myImage.setAttribute('src','runner.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome, ' + myName + ", to Akiva\'s First Year Writing Portfolio";
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName + ", to Akiva\'s First Year Writing Portfolio";
}

myButton.onclick = function() {
    setUserName();
}

