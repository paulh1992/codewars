function kebabize(str) {
  // set my final variable
  var final = '';
  
  // get all letters from alphabet possible in string
  var alphabet = 'ABCDEGFHIJKLMNOPQRSTUVWXYZ';
  
  // convert these to lowercase letters
  var converted = alphabet + alphabet.toLowerCase();
  
  for (var i = 0; i <str.length; i++){
    if (alphabet.indexOf(str[i]) !== -1){
      final += '-' + str[i].toLowerCase();
    } else if(converted.indexOf(str[i]) !== -1){
      final += str[i].toLowerCase();
    } 
  }
  
  
  // return my kebabized string
  return final;
}