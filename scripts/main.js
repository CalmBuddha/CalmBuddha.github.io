/* change header 1 string using script */
/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Mozilla is cool'*/

/*************************************************************************************/

/* change image on click */
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc == 'images/firefox.png') {
		myImage.setAttribute('src','images/firefox3.png');
	} else {
		myImage.setAttribute('src','images/firefox.png');
	}
}

/*************************************************************************************/