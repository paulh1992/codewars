function countDays(d) {
	// set my one day values
	var fullday = 1000 * 60 * 60 * 24;

  	// use the date function to set today
  	var presentday = new Date();

  	// set days from today to check how many days from todays date the input value is
  	var daysFromToday = Math.round((d.getTime() - presentday.getTime()) / fullday);

  	if (daysFromToday < 0) {
   		return 'The day is in the past!';
  	}
  	if (daysFromToday == 0) {
    	return 'Today is the day!';
  	}
  	
  	return `${daysFromToday} days`;
}

//slightly optimised

function countDays(d) {
  	var today = Math.round((((((d.getTime()-new Date().getTime())/1000)/60)/60)/24));
  	if (today < 0) { return 'The day is in the past!';}
  	if (today == 0) { return 'Today is the day!';}
  	return `${today} days`;
}