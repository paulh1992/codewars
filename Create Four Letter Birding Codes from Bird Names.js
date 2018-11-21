// https://www.codewars.com/kata/create-four-letter-birding-codes-from-bird-names

----------------------------------------------------------------------------------

function birdCode(arr){
  return arr.map(function(value){
  var final = value.toUpperCase().split(/[ -]/)
  switch(final.length){ 
  	case 1: return final[0].substr(0,4); 
  	case 2: return final[0].substr(0,2) + final[1].substr(0,2); 
  	case 3: return final[0][0] + final[1][0] + final[2].substr(0,2); 
  	case 4: return final[0][0] + final[1][0] + final[2][0] + final[3][0]; 
  	default: return value;
  }
  });
}