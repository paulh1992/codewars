function count (str) {  
  // set my count variable
  var result = {};

  // split the string and use a ternary operator to determine if empty 
  str.split('').forEach(function(s) {
     result[s] ? result[s]++ : result[s] = 1;
  });

  // return my final result
  return result;
}