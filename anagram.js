// write the function isAnagram
function isAnagram(word01, word02){
    return sortWord(word01) == sortWord(word02);
}

function sortWord(word){
    // convert my array to lower case then split the array down and sort these then join these back together and return the array
    return word.toLowerCase().split("").sort().join("");
}