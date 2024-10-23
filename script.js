function firstChar(text) {
	
    const trimmedText = text.trim();
    
    return trimmedText.length > 0 ? trimmedText[0] : '';
}
  // your code here
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
