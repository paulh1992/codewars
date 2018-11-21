// https://www.codewars.com/kata/catalog/train/javascript

------------------------------------------------------------

function catalog(s, article) {
  // split my string and remove blank lines
  var newline = s.split('\n\n');

  // set my result
  var final = "";
 
  // set my initial i value to 0 then check if my line length is greater than this - then add 1 to my value
  for (var i = 0; i < newline.length; i++) {
    // get my product name - then cut out the tags <name> and </name>
    var name = newline[i].substr(newline[i].indexOf("<name>") + 6, newline[i].indexOf("</name>") - newline[i].indexOf("<name>") - 6)
    
    // check if the index of my name value is greater than 0 and if this already exists
    if (name.indexOf(article) >= 0) {
      // then check if my result length is greater than 0 
      if (final.length > 0) {
        // if so remove this
        final += "\r\n";
      }
    
      // get my price - then cut out the tags <prx> and </prx>
      var prx = newline[i].substr(newline[i].indexOf("<prx>") + 5, newline[i].indexOf("</prx>") - newline[i].indexOf("<prx>") - 5)

      // get my quantity - then cut out the tags <qty> and </qty>
      var qty = newline[i].substr(newline[i].indexOf("<qty>") + 5, newline[i].indexOf("</qty>") - newline[i].indexOf("<qty>") - 5)
      
      //set my result and add the information needed with $ prefix
      final += name + " > prx: $" + prx + " qty: " + qty;
    }

  }
  
  // if my result is blank return nothing but if not show my new result
  if (final === "")
    return "Nothing";
    
  return final;
}