function playPass(s, n) {
    // Split my string and then create 2 new strings with all numbers and characters in
    var string = s.split("");
    var characters = "!/\.,><@~#':;{}[]_+-=| ()£?$%^&*\"'";
    var numbers = "0123456789";

    // Loop over each item in the string array
    for (var i = 0; i < string.length; i++) {
      
      // Skip loop iteration if whitespace
      if (characters.indexOf(string[i]) != -1)
        continue;
      
      // If it is a num, shift it by 9
      if (numbers.indexOf(string[i]) != -1) {
        string[i] = Math.abs(Number(string[i]) - 9);
      } else {
          // If it is an odd index, lowercase it, otherwise uppercase it
          if (i % 2) {
            string[i] = newletters(string[i], n).toLowerCase();
          } else {
            string[i] = newletters(string[i], n).toUpperCase();
          }
      }
    
    }
    // return my final result reversed and joined
    return string.reverse().join("");
}

function newletters(letter, n) {
    // create a string of all alphabet characters
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // get current position
    var currentPos = alphabet.indexOf(letter);
    
    //get next position
    var nextPos = currentPos + n;

    // check if the next position is greater than the alphabet length
    if (nextPos > alphabet.length-1) {
      nextPos = nextPos - alphabet.length;
    }
    //return the next position
    return alphabet[nextPos];
}