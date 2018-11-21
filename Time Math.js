function timeMath(time1, op, time2) {
  // first off use the date function to get each time but in milliseconds 
  var first = new Date('May 31, 2018 '+time1);
  var second = new Date('May 31, 2018 '+time2);
  
  // now check which operator is being used - either plus or subtract and then get only the time section for these
  if(op=="+") {
    first = new Date(first.getTime() + second.getTime());
  }  else
    first = new Date(first.getTime() - second.getTime());
  }

  // finally set my hours, minutes and seconds variables and get these from the date above
  var hours = ("0" + first.getHours()).slice(-2);
  var minutes = ("0" + first.getMinutes()).slice(-2);
  var seconds = ("0" + first.getSeconds()).slice(-2);
    
  return hours+":"+minutes+":"+seconds;
}