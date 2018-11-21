function getMiddle(str) {
   //First off find the length of the string
   var myletters = str.length;

	// Now if this length is even i can return the middle 2 characters
	if(myletters & 2 !== 0) {
		var final = str[Math.floor(str.length /2)];
    	return final;
	} // If odd then return the middle character and determine the middle position
	else {
		var final = str[Math.floor((str.length - 1) / 2)];
		var final2 = str[Math.floor(str.length / 2)]
		return (final + final2);
	}
}