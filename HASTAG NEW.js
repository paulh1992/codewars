// http://www.codewars.com/kata/the-hashtag-generator/train/javascript

function generateHashtag (str) { 
  if (str === '') return false
  var final = '#' + str[0].toUpperCase() + str.slice(1).replace( / [a-zA-Z]/g, (match)=>match[1].toUpperCase()).replace(/\s/g, "")
  if (final.length > 140 || final.length == 1) return false
  return final
}
