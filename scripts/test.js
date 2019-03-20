/*var icecream = 'chocolate';

if(icecream == 'chocolate') {
	alert('Yay!');
} else {
	alert('Awww!');
}*/

/*************************************************************************************/

/*function multiply(num1,num2) {
	var result = num1*num2;
	return result;
}

multiply(10,10);

# DOM - Document Object Model
document.querySelector('html').onclick = function() {
	alert('Ouch!');
}*/

/*************************************************************************************/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storeName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storeName;
}

myButton.onclick = function() {
	setUserName();
}


