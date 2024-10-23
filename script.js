function firstChar(text) {
  // your code here 
	const trimmedText = text.trim();
	return trimmedText.length > 0 ? trimmedText[0] : '';

}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
