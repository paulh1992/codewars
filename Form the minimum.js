function minValue(values){
	// create a set collection of the values and store these
	var numset = new Set(values)

	// create a new array instance from this set
	var arr = Array.from(numset)

	// finally parse this then sort the elements of this array and join together to return the value needed
	return parseInt(arr.sort().join(''))
}