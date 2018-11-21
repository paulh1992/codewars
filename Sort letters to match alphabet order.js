 function solve(arr){  
  // set my alphabet
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // return an array and map these in order
  return arr.map(function (paul) {
  
  //set a count variable with base as 0 
  var count=0;

  paul.split('').map(function (newletter,index) {
		if(index==letters.indexOf(newletter.toLowerCase())){
	    	count++;
	  	}
	});
  
  // return the count
  return count;

    })
 }