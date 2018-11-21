function wave(str){
	// set my initial result value
	var result = [];
  	
	// set my i value to 0 then check if this is less than the string value - after this add one to my i value
  	for (var i=0; i < str.length; i++) {
  		// test if my string contains only letters
    	if (/[a-z]/.test(str[i])) {
    		// slice my string from the start and extract the value which is now taken from my i variable - now convert this to uppercase and move onto the next letter
      		result.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1, str.length))
    	}
  	}  
	// return my final result  	
  	return result;
}

function wave(str){
	var result = [];
	for (var i=0; i < str.length; i++) { if (/[a-z]/.test(str[i])) { result.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1, str.length))}}  
	return result;
}