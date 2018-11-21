// https://www.codewars.com/kata/cut-me-in-pieces-but-in-the-way-i-like/train/javascript
----------------------------------------------------------------------------

function partConst(n, k, num) {
  
  // first off return my partition of all the possible instances we can have 
  return partition(n, k, n).filter(part => part.indexOf(num) < 0).length
  
  function partition(n, k, p) {
  	// check if the n value is blank, if so return this 
    if (n <= 0) return []

    // if the k value equals 1 	
    if (k === 1) return n <= p ? [[n]] : []
    
    // set my final variable
    var final = []
    
    
    for (var i = Math.min(p, n); i >= 1; i--) {
      var s = partition(n - i, k - 1, i).map(v => [i].concat(v))
      final = final.concat(s)
    }

    // return my final result
    return final
  }
}