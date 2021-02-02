var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/12.png') {
      myImage.setAttribute ('src','images/100.png');
    } else {
      myImage.setAttribute ('src','images/12.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Пожалуйста введите своё имя.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Это биография Йозефа Гайдна, ' + myName;
}
	if(!localStorage.getItem('name')) {
  	setUserName();
	} else {
  	var storedname = localStorage.getItem('name');
  	myHeading.textContent = 'Это биография Йозефа Гайдна, ' + storedname;
}
	myButton.onclick = function() {
  	setUserName();}
