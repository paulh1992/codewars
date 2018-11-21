function maxMultiple(divisor, bound){
	var number1 = bound
	var number2 = divisor

	// use the floor method to return the largest value less than or equal to the given value
    return Math.floor(number1/number2)*number2 // then times this by the initial value to get the maximum multiple
}