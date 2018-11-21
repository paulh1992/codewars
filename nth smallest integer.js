function nthSmallest(arr, n) {

  // create a new array set to get the unique values from the initial array
  arr = [...new Set(arr)];

  // sort my array into the correct order
  arr.sort((a, b) => a - b);
  
  // check if the position element is greater than the length and return null if so
  if (n > arr.length) return null;

  // return my final value
  return arr[n - 1];
}

//optimised

function nthSmallest(arr, n) {
  arr = [...new Set(arr)]; arr.sort((a, b) => a - b); if (n > arr.length) return null; return arr[n - 1];
}