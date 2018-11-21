function insertMissingLetters (str){
   // set my alphabet
   var alphabet = 'abcdefghijklmnopqrstuvwxyz';
   for (var val = 0;  alphabet[val];val++)
   {str = str.replace(new RegExp(alphabet[val]),l => l+ alphabet.slice(val+1).replace(/./g,l=>str.includes(l)?'':l).toUpperCase());}
   //return my final result
   return str;
}