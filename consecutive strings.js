function longestConsec(strArr, k) {
  // check my string length
  var n = strArr.length;

  //set of longest variable
  longest = "";

  // set my str variable to empty 
  str = ''

  // check if my string is empty or if the integer is greater or less than 0
  if (n === 0 || k > n || k <= 0) {
    // return empty if so
    return "";
  }

  // set an initial variable and check if the string is not less than this then add 1 to the i variable
  for (var i= 0; i < n; i++) {
    // set my current string variable and slice this then join the i variable with this to determine the first one
    var currentStr = strArr.slice(i, k+i).join('');
    // then check if the new currentstring length is greater than the empty string variable above and return the currentstring
    if (currentStr.length > str.length) {
      str = currentStr;
    }
  }

  return str;
}